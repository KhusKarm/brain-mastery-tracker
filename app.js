// MAIN APPLICATION LOGIC WITH INDEXEDDB AUTO-PERSISTENCE
let trackerData = {};
let currentWeek = null;
let currentDay = null;
const DB_NAME = 'BrainMasteryTrackerDB';
const STORE_NAME = 'trackerData';
let db = null;

// Initialize IndexedDB
function initializeIndexedDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, 1);

        request.onerror = () => {
            console.error('IndexedDB initialization failed');
            reject(request.error);
        };

        request.onsuccess = () => {
            db = request.result;
            console.log('IndexedDB initialized successfully');
            resolve(db);
        };

        request.onupgradeneeded = (event) => {
            db = event.target.result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME);
            }
        };
    });
}

// Load data from IndexedDB
function loadFromIndexedDB() {
    return new Promise((resolve, reject) => {
        if (!db) {
            resolve({});
            return;
        }

        const transaction = db.transaction([STORE_NAME], 'readonly');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.get('allData');

        request.onerror = () => reject(request.error);
        request.onsuccess = () => {
            const data = request.result ? request.result.data : {};
            resolve(data);
        };
    });
}

// Save data to IndexedDB
function saveToIndexedDB(data) {
    if (!db) {
        console.warn('IndexedDB not ready yet');
        return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
        const transaction = db.transaction([STORE_NAME], 'readwrite');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.put({ data: data }, 'allData');

        request.onerror = () => reject(request.error);
        request.onsuccess = () => {
            console.log('Data saved to IndexedDB');
            updateLastUpdated();
            resolve();
        };
    });
}

// Initialize app
document.addEventListener('DOMContentLoaded', async function() {
    try {
        // Initialize IndexedDB
        await initializeIndexedDB();

        // Load existing data
        trackerData = await loadFromIndexedDB();

        // If no data exists, initialize empty structure
        if (Object.keys(trackerData).length === 0) {
            initializeAppData();
        }

        setupEventListeners();
        populateWeekSelector();

        console.log('App initialized successfully');
    } catch (error) {
        console.error('Error initializing app:', error);
        // Fallback to in-memory storage
        initializeAppData();
        setupEventListeners();
        populateWeekSelector();
    }
});

// INITIALIZE APP DATA
function initializeAppData() {
    trackerData = {};
    for (let week = 1; week <= 12; week++) {
        trackerData[week] = {};
        for (let day = 1; day <= 7; day++) {
            trackerData[week][day] = {};
        }
    }
    // Save to IndexedDB
    saveToIndexedDB(trackerData).catch(e => console.error('Failed to save initial data:', e));
}

// SETUP EVENT LISTENERS
function setupEventListeners() {
    // Week selector
    document.getElementById('weekSelect').addEventListener('change', function() {
        currentWeek = parseInt(this.value);
        if (currentWeek) {
            populateDaySelector();
            document.getElementById('daySelect').disabled = false;
        } else {
            document.getElementById('daySelect').innerHTML = '<option value="">-- Choose a Day --</option>';
            document.getElementById('daySelect').disabled = true;
            document.getElementById('trackingForm').innerHTML = '<p style="text-align: center; color: #999;">Select a week first</p>';
        }
    });

    // Day selector
    document.getElementById('daySelect').addEventListener('change', function() {
        currentDay = parseInt(this.value);
        if (currentDay && currentWeek) {
            loadDayForm();
            updatePhaseIndicator();
            updateProgressBar();
            document.getElementById('prevBtn').disabled = (currentDay === 1);
            document.getElementById('nextBtn').disabled = (currentDay === 7);
            document.getElementById('summaryBtn').disabled = false;
        }
    });

    // Navigation buttons
    document.getElementById('prevBtn').addEventListener('click', function() {
        if (currentDay > 1) {
            currentDay--;
            document.getElementById('daySelect').value = currentDay;
            loadDayForm();
            updateProgressBar();
            document.getElementById('prevBtn').disabled = (currentDay === 1);
            document.getElementById('nextBtn').disabled = false;
        }
    });

    document.getElementById('nextBtn').addEventListener('click', function() {
        if (currentDay < 7) {
            currentDay++;
            document.getElementById('daySelect').value = currentDay;
            loadDayForm();
            updateProgressBar();
            document.getElementById('nextBtn').disabled = (currentDay === 7);
            document.getElementById('prevBtn').disabled = false;
        }
    });

    // Summary button
    document.getElementById('summaryBtn').addEventListener('click', showWeeklySummary);

    // Save button (new)
    document.getElementById('saveBtn').addEventListener('click', saveDayData);

    // Download button
    document.getElementById('downloadBtn').addEventListener('click', downloadProgress);

    // Upload button
    document.getElementById('uploadBtn').addEventListener('click', function() {
        document.getElementById('fileInput').click();
    });
    document.getElementById('fileInput').addEventListener('change', uploadProgress);

    // Clear button
    document.getElementById('clearBtn').addEventListener('click', function() {
        if (confirm('Are you sure? This will clear ALL data.\n\nDownload a backup first!')) {
            if (confirm('Are you REALLY sure? This cannot be undone without a backup!')) {
                initializeAppData();
                currentWeek = null;
                currentDay = null;
                document.getElementById('weekSelect').value = '';
                document.getElementById('daySelect').value = '';
                document.getElementById('daySelect').disabled = true;
                document.getElementById('trackingForm').innerHTML = '<p style="text-align: center; color: #999;">Data cleared. Select a week to start over.</p>';
                alert('✓ All data cleared! You can restore from a backup.');
            }
        }
    });

    // Modal close
    const modal = document.getElementById('summaryModal');
    const closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Range input listeners for real-time value display
    document.addEventListener('input', function(e) {
        if (e.target.type === 'range') {
            const valueSpan = document.getElementById(e.target.id + 'Value');
            if (valueSpan) {
                valueSpan.textContent = e.target.value;
            }
        }
    });

    // Show save button on form change
    document.addEventListener('change', function(e) {
        if (e.target.dataset.field && currentWeek && currentDay) {
            document.getElementById('saveBtn').style.display = 'inline-block';
        }
    });

    document.addEventListener('input', function(e) {
        if (e.target.dataset.field && currentWeek && currentDay) {
            document.getElementById('saveBtn').style.display = 'inline-block';
        }
    });
}

// POPULATE WEEK SELECTOR
function populateWeekSelector() {
    const weekSelect = document.getElementById('weekSelect');
    for (let week = 1; week <= 12; week++) {
        const option = document.createElement('option');
        option.value = week;
        const phase = getPhaseForWeek(week);
        option.textContent = `Week ${week} - ${WEEK_FOCUS[week]} (${phase.name})`;
        weekSelect.appendChild(option);
    }
}

// POPULATE DAY SELECTOR
function populateDaySelector() {
    const daySelect = document.getElementById('daySelect');
    daySelect.innerHTML = '<option value="">-- Choose a Day --</option>';
    for (let day = 1; day <= 7; day++) {
        const option = document.createElement('option');
        option.value = day;
        option.textContent = `Day ${day}`;
        daySelect.appendChild(option);
    }
}

// UPDATE PHASE INDICATOR
function updatePhaseIndicator() {
    const phase = getPhaseForWeek(currentWeek);
    const indicator = document.getElementById('phaseIndicator');
    indicator.textContent = `${phase.name} Phase`;
    indicator.className = `phase-indicator phase-${phase.name.toLowerCase()}`;
}

// UPDATE PROGRESS BAR
function updateProgressBar() {
    const totalDays = 12 * 7;
    const currentDayNumber = (currentWeek - 1) * 7 + currentDay;
    const percentage = (currentDayNumber / totalDays) * 100;

    document.getElementById('progressFill').style.width = percentage + '%';
    document.getElementById('progressText').textContent = `Progress: ${Math.round(percentage)}% (Day ${currentDayNumber}/84)`;
}

// LOAD DAY FORM
function loadDayForm() {
    const formTemplate = FORM_TEMPLATES[currentWeek];
    document.getElementById('trackingForm').innerHTML = formTemplate;

    // Restore saved data
    restoreFormData();

    // Setup range value displays
    document.querySelectorAll('input[type="range"]').forEach(input => {
        const valueSpan = document.getElementById(input.id + 'Value');
        if (valueSpan) {
            valueSpan.textContent = input.value;
        }
    });

    // Hide save button initially
    document.getElementById('saveBtn').style.display = 'none';
}

// RESTORE FORM DATA
function restoreFormData() {
    const dayData = trackerData[currentWeek][currentDay];

    for (let fieldName in dayData) {
        const value = dayData[fieldName];
        const field = document.querySelector(`[data-field="${fieldName}"]`);

        if (field) {
            if (field.type === 'checkbox') {
                field.checked = value;
            } else {
                field.value = value;
                if (field.type === 'range') {
                    const valueSpan = document.getElementById(field.id + 'Value');
                    if (valueSpan) {
                        valueSpan.textContent = value;
                    }
                }
            }
        }
    }
}

// SAVE DAY DATA
function saveDayData() {
    // Collect all form data
    const formFields = document.querySelectorAll('[data-field]');
    const dayData = {};

    formFields.forEach(field => {
        const fieldName = field.dataset.field;
        let value;

        if (field.type === 'checkbox') {
            value = field.checked;
        } else {
            value = field.value;
        }

        dayData[fieldName] = value;
    });

    // Update in-memory data
    trackerData[currentWeek][currentDay] = dayData;

    // Save to IndexedDB
    saveToIndexedDB(trackerData)
        .then(() => {
            // Show success message
            const saveBtn = document.getElementById('saveBtn');
            const originalText = saveBtn.textContent;
            saveBtn.textContent = '✓ Saved!';
            saveBtn.style.background = '#27ae60';

            setTimeout(() => {
                saveBtn.textContent = originalText;
                saveBtn.style.background = '';
                saveBtn.style.display = 'none';
            }, 2000);
        })
        .catch(error => {
            alert('Error saving data: ' + error.message);
        });
}

// SHOW WEEKLY SUMMARY
function showWeeklySummary() {
    const modal = document.getElementById('summaryModal');
    const summaryBody = document.getElementById('summaryBody');
    const phase = getPhaseForWeek(currentWeek);

    document.getElementById('summaryTitle').textContent = `Week ${currentWeek} Summary - ${WEEK_FOCUS[currentWeek]}`;

    let summaryHTML = `
        <div style="background: ${phase.color}; color: white; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
            <h3>${phase.name} Phase</h3>
            <p>Week ${currentWeek} of 12 | Days Completed: 7</p>
        </div>

        <h4>Weekly Tracking Summary</h4>
        <table>
            <thead>
                <tr>
                    <th>Day</th>
                    <th>Status</th>
                    <th>Data Saved</th>
                </tr>
            </thead>
            <tbody>
    `;

    for (let day = 1; day <= 7; day++) {
        const dayData = trackerData[currentWeek][day];
        const status = dayData.dailyStatus || 'Not set';
        const statusClass = `status-${status}`;
        const dataCount = Object.keys(dayData).length;

        summaryHTML += `
            <tr>
                <td><strong>Day ${day}</strong></td>
                <td><span class="status-badge ${statusClass}">${status.toUpperCase()}</span></td>
                <td>${dataCount} fields saved</td>
            </tr>
        `;
    }

    summaryHTML += `
            </tbody>
        </table>

        <h4 style="margin-top: 20px;">Week Focus</h4>
        <p><strong>${WEEK_FOCUS[currentWeek]}</strong></p>
        <p style="color: #666; font-size: 13px;">This week, focus on building this habit consistently across all 7 days.</p>

        <div style="background: #e8f5e9; padding: 15px; border-radius: 8px; margin-top: 15px;">
            <h5>💡 Tips</h5>
            <ul style="margin: 10px 0; padding-left: 20px; font-size: 13px;">
                <li>Click "Save Day Data" after filling each day</li>
                <li>Data automatically saves to your browser</li>
                <li>Download backup regularly for safety</li>
                <li>Progress to next week when ready</li>
            </ul>
        </div>
    `;

    summaryBody.innerHTML = summaryHTML;
    modal.style.display = 'block';
}

// DOWNLOAD PROGRESS (as JSON backup)
function downloadProgress() {
    const data = {
        exportDate: new Date().toISOString(),
        totalWeeksData: 12,
        weeks: trackerData,
        lastUpdated: document.getElementById('lastUpdated').textContent
    };

    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `brain-mastery-progress-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    alert('✓ Backup downloaded successfully!');
}

// UPLOAD PROGRESS (restore from JSON)
function uploadProgress(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(event) {
        try {
            const data = JSON.parse(event.target.result);
            trackerData = data.weeks;

            // Save to IndexedDB
            saveToIndexedDB(trackerData)
                .then(() => {
                    alert('✓ Backup restored successfully!');
                    console.log('Data restored from backup');
                })
                .catch(error => {
                    alert('Error saving restored data: ' + error.message);
                });
        } catch (error) {
            alert('✗ Invalid backup file. Please select a valid downloaded progress file.');
        }
    };
    reader.readAsText(file);

    document.getElementById('fileInput').value = '';
}

// UPDATE LAST UPDATED TIME
function updateLastUpdated() {
    const now = new Date();
    document.getElementById('lastUpdated').textContent = now.toLocaleString();
}