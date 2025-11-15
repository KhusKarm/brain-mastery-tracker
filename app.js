// MAIN APPLICATION LOGIC
let trackerData = {};
let currentWeek = null;
let currentDay = null;

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    populateWeekSelector();
});

// INITIALIZE APP
function initializeApp() {
    // Initialize empty data structure for all 12 weeks
    for (let week = 1; week <= 12; week++) {
        trackerData[week] = {};
        for (let day = 1; day <= 7; day++) {
            trackerData[week][day] = {};
        }
    }
    updateLastUpdated();
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

    // Download button
    document.getElementById('downloadBtn').addEventListener('click', downloadProgress);

    // Upload button
    document.getElementById('uploadBtn').addEventListener('click', function() {
        document.getElementById('fileInput').click();
    });
    document.getElementById('fileInput').addEventListener('change', uploadProgress);

    // Clear button
    document.getElementById('clearBtn').addEventListener('click', function() {
        if (confirm('Are you sure? This will clear all data in this session.\n\nYou can restore from a downloaded file.')) {
            initializeApp();
            currentWeek = null;
            currentDay = null;
            document.getElementById('weekSelect').value = '';
            document.getElementById('daySelect').value = '';
            document.getElementById('daySelect').disabled = true;
            document.getElementById('trackingForm').innerHTML = '<p style="text-align: center; color: #999;">Data cleared. Select a week to start over.</p>';
            alert('All data cleared!');
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

    // Form data auto-save
    document.addEventListener('change', function(e) {
        if (e.target.dataset.field && currentWeek && currentDay) {
            saveFormField(e.target);
        }
    });

    document.addEventListener('blur', function(e) {
        if (e.target.dataset.field && currentWeek && currentDay) {
            saveFormField(e.target);
        }
    }, true);
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
    const totalDays = 12 * 7; // 84 days total
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
}

// SAVE FORM FIELD
function saveFormField(field) {
    const fieldName = field.dataset.field;
    let value;

    if (field.type === 'checkbox') {
        value = field.checked;
    } else {
        value = field.value;
    }

    trackerData[currentWeek][currentDay][fieldName] = value;
    updateLastUpdated();
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
                // Update range display
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

// SHOW WEEKLY SUMMARY
function showWeeklySummary() {
    const modal = document.getElementById('summaryModal');
    const summaryBody = document.getElementById('summaryBody');
    const phase = getPhaseForWeek(currentWeek);

    document.getElementById('summaryTitle').textContent = `Week ${currentWeek} Summary - ${WEEK_FOCUS[currentWeek]}`;

    let summaryHTML = `
        <div style="background: ${phase.color}; color: white; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
            <h3>${phase.name} Phase</h3>
            <p>Week ${currentWeek} of 12 | Days Tracked: 7</p>
        </div>

        <h4>Weekly Tracking Summary</h4>
        <table>
            <thead>
                <tr>
                    <th>Day</th>
                    <th>Status</th>
                    <th>Key Focus</th>
                </tr>
            </thead>
            <tbody>
    `;

    for (let day = 1; day <= 7; day++) {
        const dayData = trackerData[currentWeek][day];
        const status = dayData.dailyStatus || 'Not tracked';
        const statusClass = `status-${status}`;

        summaryHTML += `
            <tr>
                <td>Day ${day}</td>
                <td><span class="status-badge ${statusClass}">${status.toUpperCase()}</span></td>
                <td>${dayData.reflection1 ? dayData.reflection1.substring(0, 40) + '...' : 'No data'}</td>
            </tr>
        `;
    }

    summaryHTML += `
            </tbody>
        </table>

        <h4 style="margin-top: 20px;">Metrics This Week</h4>
        <p><strong>Challenges:</strong> This week focused on <strong>${WEEK_FOCUS[currentWeek]}</strong></p>
        <p><strong>Goal:</strong> Build consistency and internalize this habit</p>

        <div style="background: #f0f0f0; padding: 15px; border-radius: 8px; margin-top: 15px;">
            <h5>🎯 Next Steps</h5>
            <ul>
                <li>Review your daily reflections above</li>
                <li>Identify patterns and obstacles</li>
                <li>Progress to next week to layer in new challenges</li>
                <li>Download your progress regularly</li>
            </ul>
        </div>
    `;

    summaryBody.innerHTML = summaryHTML;
    modal.style.display = 'block';
}

// DOWNLOAD PROGRESS
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

    alert('✅ Progress downloaded successfully!');
    updateLastUpdated();
}

// UPLOAD PROGRESS
function uploadProgress(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(event) {
        try {
            const data = JSON.parse(event.target.result);
            trackerData = data.weeks;
            updateLastUpdated();
            alert('✅ Progress restored successfully!');
            console.log('Loaded weeks with data');
        } catch (error) {
            alert('❌ Invalid file format. Please select a valid downloaded progress file.');
        }
    };
    reader.readAsText(file);

    // Reset input
    document.getElementById('fileInput').value = '';
}

// UPDATE LAST UPDATED TIME
function updateLastUpdated() {
    const now = new Date();
    document.getElementById('lastUpdated').textContent = now.toLocaleString();
}
