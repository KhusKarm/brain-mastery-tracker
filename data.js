// PHASE CONFIGURATION
const PHASES = {
    foundation: { name: 'Foundation', weeks: [1, 2, 3], color: '#3498db' },
    expansion: { name: 'Expansion', weeks: [4, 5, 6], color: '#f39c12' },
    resilience: { name: 'Resilience', weeks: [7, 8, 9], color: '#27ae60' },
    integration: { name: 'Integration', weeks: [10, 11, 12], color: '#8e44ad' }
};

// WEEK FOCUS MAPPING
const WEEK_FOCUS = {
    1: 'Fixed Study Hours',
    2: 'Morning Exercise + Wake Time',
    3: 'Sleep Discipline + Digital Boundary',
    4: 'Running 3-4x/week',
    5: 'Cold Showers',
    6: 'No Phone During Study',
    7: 'Daily Journaling',
    8: 'Social Courage (Fear Hierarchy)',
    9: 'Avoided Tasks + Speak Up',
    10: 'Accountability Check-ins',
    11: 'Mentoring Others',
    12: 'Identity Consolidation'
};

// FEAR HIERARCHY LEVELS
const FEAR_HIERARCHY = [
    { level: 1, anxiety: '2-3', task: 'Ask name & listen', duration: '30 sec - 1 min' },
    { level: 2, anxiety: '3-4', task: 'Ask about interest/hobby', duration: '1-2 min' },
    { level: 3, anxiety: '4-5', task: 'Keep conversation going', duration: '2 min' },
    { level: 4, anxiety: '5-6', task: 'Initiate with unfamiliar person', duration: '2-3 min' },
    { level: 5, anxiety: '6-7', task: 'Join group & contribute', duration: '3-5 min' },
    { level: 6, anxiety: '7-8', task: 'Conversation with senior/admired', duration: '3-5 min' },
    { level: 7, anxiety: '8-9', task: 'Ask for help / admit not knowing', duration: '2-3 min' },
    { level: 8, anxiety: '9-10', task: 'Share unpopular opinion', duration: '2-3 min' }
];

// WEEKLY REVIEW METRICS
const REVIEW_METRICS = [
    'Emotional Resilience',
    'Confidence Level',
    'Procrastination',
    'Social Ease',
    'Accountability',
    'Mental Clarity',
    'Physical Confidence'
];

// FORM TEMPLATES FOR EACH WEEK
const FORM_TEMPLATES = {
    1: `
        <div class="form-section">
            <h3>🎯 Week 1: Fixed Study Hours</h3>
            <div class="form-group">
                <label>Morning Study Block</label>
                <div class="checkbox-group">
                    <input type="checkbox" id="morningStudy" data-field="morningStudy">
                    <label for="morningStudy">7-9 AM Study (2 hours)</label>
                </div>
            </div>
            <div class="form-group">
                <label>Morning Study Time</label>
                <input type="time" id="morningTime" data-field="morningTime" placeholder="HH:MM">
            </div>
            <div class="form-group">
                <label>Evening Study Block</label>
                <div class="checkbox-group">
                    <input type="checkbox" id="eveningStudy" data-field="eveningStudy">
                    <label for="eveningStudy">7-9 PM Study (2 hours)</label>
                </div>
            </div>
            <div class="form-group">
                <label>Evening Study Time</label>
                <input type="time" id="eveningTime" data-field="eveningTime" placeholder="HH:MM">
            </div>
            <div class="form-group">
                <label>Total Study Hours</label>
                <input type="number" id="totalHours" data-field="totalHours" placeholder="4" readonly>
            </div>
            <div class="form-group">
                <label>What distracted you?</label>
                <textarea id="reflection1" data-field="reflection1" placeholder="What pulled your attention away?"></textarea>
            </div>
            <div class="form-group">
                <label>Will you do differently tomorrow?</label>
                <textarea id="reflection2" data-field="reflection2" placeholder="Your plan for tomorrow..."></textarea>
            </div>
            <div class="form-group">
                <label>Daily Status</label>
                <select id="dailyStatus" data-field="dailyStatus">
                    <option value="">Select Status</option>
                    <option value="green">🟢 GREEN - Both blocks completed</option>
                    <option value="yellow">🟡 YELLOW - One block completed</option>
                    <option value="red">🔴 RED - No blocks completed</option>
                </select>
            </div>
        </div>
    `,

    2: `
        <div class="form-section">
            <h3>💪 Week 2: Morning Exercise + Wake Time</h3>
            <div class="form-group">
                <label>Wake Time (Target: 6:00 AM)</label>
                <input type="time" id="wakeTime" data-field="wakeTime">
            </div>
            <div class="form-group">
                <label>Snooze Used?</label>
                <select id="snoozeUsed" data-field="snoozeUsed">
                    <option value="">Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <div class="form-group">
                <label>Morning Exercise</label>
                <div class="checkbox-group">
                    <input type="checkbox" id="exercise" data-field="exercise">
                    <label for="exercise">Completed 30-min exercise</label>
                </div>
            </div>
            <div class="form-group">
                <label>Exercise Type</label>
                <input type="text" id="exerciseType" data-field="exerciseType" placeholder="e.g., Running, PT, Gym">
            </div>
            <div class="form-group">
                <label>Exercise Duration (minutes)</label>
                <input type="number" id="exerciseDuration" data-field="exerciseDuration" placeholder="30">
            </div>
            <div class="form-group">
                <label>Morning Study Block</label>
                <div class="checkbox-group">
                    <input type="checkbox" id="morningStudy2" data-field="morningStudy">
                    <label for="morningStudy2">7-9 AM Study</label>
                </div>
            </div>
            <div class="form-group">
                <label>Evening Study Block</label>
                <div class="checkbox-group">
                    <input type="checkbox" id="eveningStudy2" data-field="eveningStudy">
                    <label for="eveningStudy2">7-9 PM Study</label>
                </div>
            </div>
            <div class="form-group">
                <label>Resistance Level to Wake Up</label>
                <div class="rating-group">
                    <input type="range" id="wakeResistance" data-field="wakeResistance" min="1" max="10" value="5">
                    <span class="rating-value" id="wakeResistanceValue">5</span>/10
                </div>
            </div>
            <div class="form-group">
                <label>Energy After Exercise</label>
                <div class="rating-group">
                    <input type="range" id="postExerciseEnergy" data-field="postExerciseEnergy" min="1" max="10" value="5">
                    <span class="rating-value" id="postExerciseEnergyValue">5</span>/10
                </div>
            </div>
            <div class="form-group">
                <label>Daily Status</label>
                <select id="dailyStatus" data-field="dailyStatus">
                    <option value="">Select Status</option>
                    <option value="green">🟢 GREEN - All completed</option>
                    <option value="yellow">🟡 YELLOW - Most completed</option>
                    <option value="red">🔴 RED - Some missed</option>
                </select>
            </div>
        </div>
    `,

    3: `
        <div class="form-section">
            <h3>😴 Week 3: Sleep Discipline + Digital Boundary</h3>
            <div class="form-group">
                <label>Wake Time</label>
                <input type="time" id="wakeTime3" data-field="wakeTime">
            </div>
            <div class="form-group">
                <label>Exercise Completed</label>
                <div class="checkbox-group">
                    <input type="checkbox" id="exercise3" data-field="exercise">
                    <label for="exercise3">30-min exercise</label>
                </div>
            </div>
            <div class="form-group">
                <label>Morning Study</label>
                <div class="checkbox-group">
                    <input type="checkbox" id="morningStudy3" data-field="morningStudy">
                    <label for="morningStudy3">7-9 AM Study</label>
                </div>
            </div>
            <div class="form-group">
                <label>Evening Study</label>
                <div class="checkbox-group">
                    <input type="checkbox" id="eveningStudy3" data-field="eveningStudy">
                    <label for="eveningStudy3">7-9 PM Study</label>
                </div>
            </div>
            <div class="form-group">
                <label>Phone Away Time (Target: 9:00 PM)</label>
                <input type="time" id="phoneAwayTime" data-field="phoneAwayTime">
            </div>
            <div class="form-group">
                <label>Sleep Time (Target: 10:30 PM)</label>
                <input type="time" id="sleepTime" data-field="sleepTime">
            </div>
            <div class="form-group">
                <label>Sleep Quality (1-10)</label>
                <div class="rating-group">
                    <input type="range" id="sleepQuality" data-field="sleepQuality" min="1" max="10" value="5">
                    <span class="rating-value" id="sleepQualityValue">5</span>/10
                </div>
            </div>
            <div class="form-group">
                <label>Phone Temptation Level (1-10)</label>
                <div class="rating-group">
                    <input type="range" id="phoneTemptation" data-field="phoneTemptation" min="1" max="10" value="5">
                    <span class="rating-value" id="phoneTemptationValue">5</span>/10
                </div>
            </div>
            <div class="form-group">
                <label>Reflection: How is your sleep vs Week 2?</label>
                <textarea id="reflection" data-field="reflection" placeholder="Your observations..."></textarea>
            </div>
            <div class="form-group">
                <label>Daily Status</label>
                <select id="dailyStatus" data-field="dailyStatus">
                    <option value="">Select Status</option>
                    <option value="green">🟢 GREEN - All completed</option>
                    <option value="yellow">🟡 YELLOW - Most completed</option>
                    <option value="red">🔴 RED - Some missed</option>
                </select>
            </div>
        </div>
    `,

    4: `
        <div class="form-section">
            <h3>🏃 Week 4: Running 3-4x/week</h3>
            <div class="form-group">
                <label>Running Day?</label>
                <select id="runningDay" data-field="runningDay">
                    <option value="no">Not today</option>
                    <option value="yes">Yes, running today!</option>
                </select>
            </div>
            <div class="form-group">
                <label>Distance (km)</label>
                <input type="number" id="runDistance" data-field="runDistance" placeholder="2-3 km" step="0.1">
            </div>
            <div class="form-group">
                <label>Time (minutes)</label>
                <input type="number" id="runTime" data-field="runTime" placeholder="20-30 minutes">
            </div>
            <div class="form-group">
                <label>Pace</label>
                <input type="text" id="runPace" data-field="runPace" placeholder="e.g., 8:00 min/km">
            </div>
            <div class="form-group">
                <label>Difficulty Level (1-10)</label>
                <div class="rating-group">
                    <input type="range" id="runDifficulty" data-field="runDifficulty" min="1" max="10" value="5">
                    <span class="rating-value" id="runDifficultyValue">5</span>/10
                </div>
            </div>
            <div class="form-group">
                <label>Enjoyment Level (1-10)</label>
                <div class="rating-group">
                    <input type="range" id="runEnjoyment" data-field="runEnjoyment" min="1" max="10" value="5">
                    <span class="rating-value" id="runEnjoymentValue">5</span>/10
                </div>
            </div>
            <div class="form-group">
                <label>All Previous Habits Maintained</label>
                <div class="checkbox-group">
                    <input type="checkbox" id="prevHabits" data-field="prevHabits">
                    <label for="prevHabits">Study, Sleep, Digital discipline</label>
                </div>
            </div>
            <div class="form-group">
                <label>Post-Run Reflection</label>
                <textarea id="reflection" data-field="reflection" placeholder="How did today's run go?"></textarea>
            </div>
            <div class="form-group">
                <label>Daily Status</label>
                <select id="dailyStatus" data-field="dailyStatus">
                    <option value="">Select Status</option>
                    <option value="green">🟢 GREEN - All completed</option>
                    <option value="yellow">🟡 YELLOW - Most completed</option>
                    <option value="red">🔴 RED - Some missed</option>
                </select>
            </div>
        </div>
    `,

    5: `
        <div class="form-section">
            <h3>❄️ Week 5: Cold Showers</h3>
            <div class="form-group">
                <label>Cold Shower Taken?</label>
                <div class="checkbox-group">
                    <input type="checkbox" id="coldShower" data-field="coldShower">
                    <label for="coldShower">Completed cold shower</label>
                </div>
            </div>
            <div class="form-group">
                <label>Duration (seconds)</label>
                <input type="number" id="showerDuration" data-field="showerDuration" placeholder="30">
            </div>
            <div class="form-group">
                <label>Temperature (°C)</label>
                <input type="number" id="showerTemp" data-field="showerTemp" placeholder="5-15">
            </div>
            <div class="form-group">
                <label>Fear Before Shower (1-10)</label>
                <div class="rating-group">
                    <input type="range" id="fearBefore" data-field="fearBefore" min="1" max="10" value="5">
                    <span class="rating-value" id="fearBeforeValue">5</span>/10
                </div>
            </div>
            <div class="form-group">
                <label>Difficulty During Shower (1-10)</label>
                <div class="rating-group">
                    <input type="range" id="difficulty" data-field="difficulty" min="1" max="10" value="5">
                    <span class="rating-value" id="difficultyValue">5</span>/10
                </div>
            </div>
            <div class="form-group">
                <label>Feeling After Shower (1-10, energized)</label>
                <div class="rating-group">
                    <input type="range" id="feelingAfter" data-field="feelingAfter" min="1" max="10" value="5">
                    <span class="rating-value" id="feelingAfterValue">5</span>/10
                </div>
            </div>
            <div class="form-group">
                <label>Running/Exercise Completed</label>
                <div class="checkbox-group">
                    <input type="checkbox" id="exercise5" data-field="exercise">
                    <label for="exercise5">30-45 min exercise</label>
                </div>
            </div>
            <div class="form-group">
                <label>What did you tell yourself during the cold?</label>
                <textarea id="selfTalk" data-field="selfTalk" placeholder="Your mental strategy..."></textarea>
            </div>
            <div class="form-group">
                <label>Daily Status</label>
                <select id="dailyStatus" data-field="dailyStatus">
                    <option value="">Select Status</option>
                    <option value="green">🟢 GREEN - Cold shower + all habits</option>
                    <option value="yellow">🟡 YELLOW - Most completed</option>
                    <option value="red">🔴 RED - Skipped cold shower</option>
                </select>
            </div>
        </div>
    `,

    6: `
        <div class="form-section">
            <h3>📵 Week 6: No Phone During Study</h3>
            <div class="form-group">
                <label>Morning Study (7-9 AM) Phone-Free?</label>
                <div class="checkbox-group">
                    <input type="checkbox" id="morningPhoneFree" data-field="morningPhoneFree">
                    <label for="morningPhoneFree">Phone in another room</label>
                </div>
            </div>
            <div class="form-group">
                <label>Evening Study (7-9 PM) Phone-Free?</label>
                <div class="checkbox-group">
                    <input type="checkbox" id="eveningPhoneFree" data-field="eveningPhoneFree">
                    <label for="eveningPhoneFree">Phone in another room</label>
                </div>
            </div>
            <div class="form-group">
                <label>Phone Location During Study</label>
                <input type="text" id="phoneLocation" data-field="phoneLocation" placeholder="e.g., Kitchen, Locker, Parent's room">
            </div>
            <div class="form-group">
                <label>Times I Wanted to Check Phone</label>
                <input type="number" id="phoneUrges" data-field="phoneUrges" placeholder="0" min="0">
            </div>
            <div class="form-group">
                <label>Phone Urge Control (1-10, 1=easy to resist)</label>
                <div class="rating-group">
                    <input type="range" id="urgeControl" data-field="urgeControl" min="1" max="10" value="5">
                    <span class="rating-value" id="urgeControlValue">5</span>/10
                </div>
            </div>
            <div class="form-group">
                <label>Study Depth/Focus (1-10)</label>
                <div class="rating-group">
                    <input type="range" id="studyFocus" data-field="studyFocus" min="1" max="10" value="5">
                    <span class="rating-value" id="studyFocusValue">5</span>/10
                </div>
            </div>
            <div class="form-group">
                <label>Mental Clarity (1-10)</label>
                <div class="rating-group">
                    <input type="range" id="mentalClarity" data-field="mentalClarity" min="1" max="10" value="5">
                    <span class="rating-value" id="mentalClarityValue">5</span>/10
                </div>
            </div>
            <div class="form-group">
                <label>Reflection</label>
                <textarea id="reflection" data-field="reflection" placeholder="How different was your study without phone?"></textarea>
            </div>
            <div class="form-group">
                <label>Daily Status</label>
                <select id="dailyStatus" data-field="dailyStatus">
                    <option value="">Select Status</option>
                    <option value="green">🟢 GREEN - Full device-free hours</option>
                    <option value="yellow">🟡 YELLOW - Most hours device-free</option>
                    <option value="red">🔴 RED - Broke phone-free rule</option>
                </select>
            </div>
        </div>
    `,

    7: `
        <div class="form-section">
            <h3>📝 Week 7: Daily Journaling</h3>
            <div class="form-group">
                <label>Journaling Time</label>
                <input type="time" id="journalTime" data-field="journalTime" value="21:00">
            </div>
            <div class="form-group">
                <label>Duration (minutes)</label>
                <input type="number" id="journalDuration" data-field="journalDuration" placeholder="5-10" min="1">
            </div>
            <div class="form-group">
                <label>🤔 What challenged me today?</label>
                <textarea id="challenged" data-field="challenged" placeholder="Write about the challenges you faced..."></textarea>
            </div>
            <div class="form-group">
                <label>😊 What am I proud of today?</label>
                <textarea id="proud" data-field="proud" placeholder="Write about your wins and accomplishments..."></textarea>
            </div>
            <div class="form-group">
                <label>😨 What fear did I face today?</label>
                <textarea id="fearFaced" data-field="fearFaced" placeholder="Even small fears count..."></textarea>
            </div>
            <div class="form-group">
                <label>🔄 What will I do differently tomorrow?</label>
                <textarea id="tomorrow" data-field="tomorrow" placeholder="Your plan for improvement..."></textarea>
            </div>
            <div class="form-group">
                <label>Journaling Depth (1-10)</label>
                <div class="rating-group">
                    <input type="range" id="journalDepth" data-field="journalDepth" min="1" max="10" value="5">
                    <span class="rating-value" id="journalDepthValue">5</span>/10
                </div>
            </div>
            <div class="form-group">
                <label>Clarity After Journaling (1-10)</label>
                <div class="rating-group">
                    <input type="range" id="clarity" data-field="clarity" min="1" max="10" value="5">
                    <span class="rating-value" id="clarityValue">5</span>/10
                </div>
            </div>
            <div class="form-group">
                <label>Daily Status</label>
                <select id="dailyStatus" data-field="dailyStatus">
                    <option value="">Select Status</option>
                    <option value="green">🟢 GREEN - Journal completed + habits</option>
                    <option value="yellow">🟡 YELLOW - Journal brief</option>
                    <option value="red">🔴 RED - No journaling</option>
                </select>
            </div>
        </div>
    `,

    8: `
        <div class="form-section">
            <h3>🤝 Week 8: Social Courage (Fear Hierarchy)</h3>
            <div class="form-group">
                <label>Social Interaction Completed?</label>
                <div class="checkbox-group">
                    <input type="checkbox" id="interaction" data-field="interaction">
                    <label for="interaction">Had 1+ conversation today</label>
                </div>
            </div>
            <div class="form-group">
                <label>Fear Hierarchy Level Attempted (1-8)</label>
                <select id="hierarchyLevel" data-field="hierarchyLevel">
                    <option value="">Select Level</option>
                    <option value="1">Level 1: Ask name & listen (Anxiety 2-3)</option>
                    <option value="2">Level 2: Ask about interest (Anxiety 3-4)</option>
                    <option value="3">Level 3: Keep conversation (Anxiety 4-5)</option>
                    <option value="4">Level 4: Unfamiliar person (Anxiety 5-6)</option>
                    <option value="5">Level 5: Join group (Anxiety 6-7)</option>
                    <option value="6">Level 6: Senior/admired person (Anxiety 7-8)</option>
                    <option value="7">Level 7: Ask for help (Anxiety 8-9)</option>
                    <option value="8">Level 8: Share opinion (Anxiety 9-10)</option>
                </select>
            </div>
            <div class="form-group">
                <label>Person's Name</label>
                <input type="text" id="personName" data-field="personName" placeholder="Who did you talk to?">
            </div>
            <div class="form-group">
                <label>Topic/What You Talked About</label>
                <input type="text" id="topic" data-field="topic" placeholder="e.g., Their hobby, class, weekend">
            </div>
            <div class="form-group">
                <label>Duration (minutes)</label>
                <input type="number" id="duration" data-field="duration" placeholder="1-5" min="0.5" step="0.5">
            </div>
            <div class="form-group">
                <label>Anxiety Before (1-10)</label>
                <div class="rating-group">
                    <input type="range" id="anxietyBefore" data-field="anxietyBefore" min="1" max="10" value="5">
                    <span class="rating-value" id="anxietyBeforeValue">5</span>/10
                </div>
            </div>
            <div class="form-group">
                <label>Anxiety After (1-10)</label>
                <div class="rating-group">
                    <input type="range" id="anxietyAfter" data-field="anxietyAfter" min="1" max="10" value="5">
                    <span class="rating-value" id="anxietyAfterValue">5</span>/10
                </div>
            </div>
            <div class="form-group">
                <label>How did it go?</label>
                <textarea id="reflection" data-field="reflection" placeholder="What went well? What was hard?"></textarea>
            </div>
            <div class="form-group">
                <label>Daily Status</label>
                <select id="dailyStatus" data-field="dailyStatus">
                    <option value="">Select Status</option>
                    <option value="green">🟢 GREEN - Conversation + anxiety decreased</option>
                    <option value="yellow">🟡 YELLOW - Conversation had</option>
                    <option value="red">🔴 RED - No conversation</option>
                </select>
            </div>
        </div>
    `,

    9: `
        <div class="form-section">
            <h3>🎯 Week 9: Avoided Tasks + Speak Up</h3>

            <h4 style="margin-top: 20px; margin-bottom: 10px; color: #667eea;">Part 1: Avoided Task</h4>

            <div class="form-group">
                <label>Task Completed?</label>
                <div class="checkbox-group">
                    <input type="checkbox" id="taskCompleted" data-field="taskCompleted">
                    <label for="taskCompleted">Completed avoided task today</label>
                </div>
            </div>
            <div class="form-group">
                <label>What Task?</label>
                <input type="text" id="taskName" data-field="taskName" placeholder="e.g., Hard DSA problem, code bug, senior conversation">
            </div>
            <div class="form-group">
                <label>Task Difficulty (1-3)</label>
                <select id="taskDifficulty" data-field="taskDifficulty">
                    <option value="">Select</option>
                    <option value="1">Level 1: Small task (1 hour)</option>
                    <option value="2">Level 2: Medium task (2-3 hours)</option>
                    <option value="3">Level 3: Hard task (3+ hours)</option>
                </select>
            </div>
            <div class="form-group">
                <label>Time Taken (hours)</label>
                <input type="number" id="timeTaken" data-field="timeTaken" placeholder="0.5" step="0.5">
            </div>
            <div class="form-group">
                <label>Anxiety Before (1-10)</label>
                <div class="rating-group">
                    <input type="range" id="taskAnxietyBefore" data-field="taskAnxietyBefore" min="1" max="10" value="5">
                    <span class="rating-value" id="taskAnxietyBeforeValue">5</span>/10
                </div>
            </div>
            <div class="form-group">
                <label>Anxiety After (1-10)</label>
                <div class="rating-group">
                    <input type="range" id="taskAnxietyAfter" data-field="taskAnxietyAfter" min="1" max="10" value="5">
                    <span class="rating-value" id="taskAnxietyAfterValue">5</span>/10
                </div>
            </div>
            <div class="form-group">
                <label>What you learned from completing it</label>
                <textarea id="taskReflection" data-field="taskReflection" placeholder="What did you discover?"></textarea>
            </div>

            <h4 style="margin-top: 20px; margin-bottom: 10px; color: #667eea;">Part 2: Speak Up</h4>

            <div class="form-group">
                <label>Spoke Up?</label>
                <div class="checkbox-group">
                    <input type="checkbox" id="spokenUp" data-field="spokenUp">
                    <label for="spokenUp">Spoke up in class/NCC today</label>
                </div>
            </div>
            <div class="form-group">
                <label>Context (where?)</label>
                <input type="text" id="speakContext" data-field="speakContext" placeholder="e.g., Math class, NCC parade, group project">
            </div>
            <div class="form-group">
                <label>What did you say?</label>
                <textarea id="whatSaid" data-field="whatSaid" placeholder="Your question, answer, or comment..."></textarea>
            </div>
            <div class="form-group">
                <label>Speaking Anxiety Before (1-10)</label>
                <div class="rating-group">
                    <input type="range" id="speakAnxietyBefore" data-field="speakAnxietyBefore" min="1" max="10" value="5">
                    <span class="rating-value" id="speakAnxietyBeforeValue">5</span>/10
                </div>
            </div>
            <div class="form-group">
                <label>Speaking Anxiety After (1-10)</label>
                <div class="rating-group">
                    <input type="range" id="speakAnxietyAfter" data-field="speakAnxietyAfter" min="1" max="10" value="5">
                    <span class="rating-value" id="speakAnxietyAfterValue">5</span>/10
                </div>
            </div>
            <div class="form-group">
                <label>Pride Level (1-10)</label>
                <div class="rating-group">
                    <input type="range" id="prideLevel" data-field="prideLevel" min="1" max="10" value="5">
                    <span class="rating-value" id="prideLevelValue">5</span>/10
                </div>
            </div>

            <div class="form-group">
                <label>Daily Status</label>
                <select id="dailyStatus" data-field="dailyStatus">
                    <option value="">Select Status</option>
                    <option value="green">🟢 GREEN - Task + Spoke up</option>
                    <option value="yellow">🟡 YELLOW - Task only or Spoke up only</option>
                    <option value="red">🔴 RED - Neither completed</option>
                </select>
            </div>
        </div>
    `,

    10: `
        <div class="form-section">
            <h3>📞 Week 10: Accountability Check-ins</h3>
            <div class="form-group">
                <label>Daily Check-in Status</label>
                <select id="checkInStatus" data-field="checkInStatus">
                    <option value="">Select Status</option>
                    <option value="green">🟢 GREEN - 8-10/10 habits completed</option>
                    <option value="yellow">🟡 YELLOW - 5-7/10 habits completed</option>
                    <option value="red">🔴 RED - Below 5/10 habits</option>
                </select>
            </div>
            <div class="form-group">
                <label>Check-in Message Sent?</label>
                <div class="checkbox-group">
                    <input type="checkbox" id="checkInSent" data-field="checkInSent">
                    <label for="checkInSent">Sent to accountability partner</label>
                </div>
            </div>
            <div class="form-group">
                <label>Who (Partner's Name)</label>
                <input type="text" id="partnerName" data-field="partnerName" placeholder="Your accountability partner">
            </div>
            <div class="form-group">
                <label>What You Reported</label>
                <textarea id="checkInMessage" data-field="checkInMessage" placeholder="Status: Green/Yellow/Red. What you accomplished today..."></textarea>
            </div>
            <div class="form-group">
                <label>Their Response</label>
                <textarea id="partnerResponse" data-field="partnerResponse" placeholder="What did they say?"></textarea>
            </div>
            <div class="form-group">
                <label>Impact of Accountability (1-10)</label>
                <div class="rating-group">
                    <input type="range" id="accountabilityImpact" data-field="accountabilityImpact" min="1" max="10" value="5">
                    <span class="rating-value" id="accountabilityImpactValue">5</span>/10
                </div>
            </div>

            <h4 style="margin-top: 20px; margin-bottom: 10px; color: #667eea;">SUNDAY WEEKLY REVIEW (Complete on Day 7)</h4>

            <div class="form-group">
                <label>Week's Summary</label>
                <textarea id="weeklySummary" data-field="weeklySummary" placeholder="Reflect on the entire week..."></textarea>
            </div>
        </div>
    `,

    11: `
        <div class="form-section">
            <h3>🤝 Week 11: Mentoring Others</h3>
            <div class="form-group">
                <label>Who did you help?</label>
                <input type="text" id="helpedPerson" data-field="helpedPerson" placeholder="Name or description">
            </div>
            <div class="form-group">
                <label>What did you teach/help with?</label>
                <input type="text" id="helpedWith" data-field="helpedWith" placeholder="e.g., DSA problem, debugging code, confidence building">
            </div>
            <div class="form-group">
                <label>Duration (minutes)</label>
                <input type="number" id="helpDuration" data-field="helpDuration" placeholder="15-60" min="5">
            </div>
            <div class="form-group">
                <label>Their Feedback</label>
                <textarea id="theirFeedback" data-field="theirFeedback" placeholder="What did they say?"></textarea>
            </div>
            <div class="form-group">
                <label>Impact on Me (1-10)</label>
                <div class="rating-group">
                    <input type="range" id="mentorImpact" data-field="mentorImpact" min="1" max="10" value="5">
                    <span class="rating-value" id="mentorImpactValue">5</span>/10
                </div>
            </div>
            <div class="form-group">
                <label>How did it feel helping?</label>
                <textarea id="mentorFeeling" data-field="mentorFeeling" placeholder="Your emotions and thoughts..."></textarea>
            </div>
            <div class="form-group">
                <label>Did you share your journey today?</label>
                <div class="checkbox-group">
                    <input type="checkbox" id="sharedJourney" data-field="sharedJourney">
                    <label for="sharedJourney">Shared my 10-week transformation</label>
                </div>
            </div>
            <div class="form-group">
                <label>What you shared (if applicable)</label>
                <textarea id="journeyShared" data-field="journeyShared" placeholder="Your story, challenges, wins..."></textarea>
            </div>
        </div>
    `,

    12: `
        <div class="form-section">
            <h3>🎓 Week 12: Identity Consolidation</h3>
            <p style="background: #e8f5e9; padding: 10px; border-radius: 5px; margin-bottom: 15px; font-size: 13px;">
                📊 TRANSFORMATION COMPARISON: Rate yourself Week 1 vs Week 12 (1-10 scale)
            </p>

            <div class="table-responsive">
                <table>
                    <thead>
                        <tr>
                            <th>Metric</th>
                            <th>Week 1</th>
                            <th>Week 12</th>
                            <th>Change</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Physical Confidence</td>
                            <td><input type="number" id="physW1" data-field="physW1" min="1" max="10" placeholder="1-10"></td>
                            <td><input type="number" id="physW12" data-field="physW12" min="1" max="10" placeholder="1-10"></td>
                            <td id="physChange">-</td>
                        </tr>
                        <tr>
                            <td>Mental Resilience</td>
                            <td><input type="number" id="mentalW1" data-field="mentalW1" min="1" max="10" placeholder="1-10"></td>
                            <td><input type="number" id="mentalW12" data-field="mentalW12" min="1" max="10" placeholder="1-10"></td>
                            <td id="mentalChange">-</td>
                        </tr>
                        <tr>
                            <td>Social Ease</td>
                            <td><input type="number" id="socialW1" data-field="socialW1" min="1" max="10" placeholder="1-10"></td>
                            <td><input type="number" id="socialW12" data-field="socialW12" min="1" max="10" placeholder="1-10"></td>
                            <td id="socialChange">-</td>
                        </tr>
                        <tr>
                            <td>Procrastination (lower=better)</td>
                            <td><input type="number" id="procrastW1" data-field="procrastW1" min="1" max="10" placeholder="1-10"></td>
                            <td><input type="number" id="procrastW12" data-field="procrastW12" min="1" max="10" placeholder="1-10"></td>
                            <td id="procrastChange">-</td>
                        </tr>
                        <tr>
                            <td>Accountability</td>
                            <td><input type="number" id="accountW1" data-field="accountW1" min="1" max="10" placeholder="1-10"></td>
                            <td><input type="number" id="accountW12" data-field="accountW12" min="1" max="10" placeholder="1-10"></td>
                            <td id="accountChange">-</td>
                        </tr>
                        <tr>
                            <td>Shyness (lower=better)</td>
                            <td><input type="number" id="shynessW1" data-field="shynessW1" min="1" max="10" placeholder="1-10"></td>
                            <td><input type="number" id="shynessW12" data-field="shynessW12" min="1" max="10" placeholder="1-10"></td>
                            <td id="shynessChange">-</td>
                        </tr>
                        <tr>
                            <td>Overall Confidence</td>
                            <td><input type="number" id="overallW1" data-field="overallW1" min="1" max="10" placeholder="1-10"></td>
                            <td><input type="number" id="overallW12" data-field="overallW12" min="1" max="10" placeholder="1-10"></td>
                            <td id="overallChange">-</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4 style="margin-top: 20px; margin-bottom: 10px; color: #667eea;">DEEP REFLECTION QUESTIONS</h4>

            <div class="form-group">
                <label>1. How has my physical body and energy changed?</label>
                <textarea id="physicalTransform" data-field="physicalTransform" placeholder="Describe your transformation..."></textarea>
            </div>
            <div class="form-group">
                <label>2. What fear have I overcome?</label>
                <textarea id="fearOvercome" data-field="fearOvercome" placeholder="Your journey..."></textarea>
            </div>
            <div class="form-group">
                <label>3. How has my shyness/social ease changed?</label>
                <textarea id="socialTransform" data-field="socialTransform" placeholder="Describe your growth..."></textarea>
            </div>
            <div class="form-group">
                <label>4. How has my accountability and follow-through improved?</label>
                <textarea id="accountabilityTransform" data-field="accountabilityTransform" placeholder="Your progress..."></textarea>
            </div>
            <div class="form-group">
                <label>5. How has my ability to focus and complete tasks changed?</label>
                <textarea id="focusTransform" data-field="focusTransform" placeholder="Your transformation..."></textarea>
            </div>
            <div class="form-group">
                <label>6. WHO AM I NOW? (Week 1 self vs Week 12 self)</label>
                <textarea id="whoAmI" data-field="whoAmI" placeholder="Deep reflection on your identity shift..."></textarea>
            </div>

            <h4 style="margin-top: 20px; margin-bottom: 10px; color: #667eea;">NEXT PHASE PLAN</h4>

            <div class="form-group">
                <label>What's Next?</label>
                <select id="nextPhase" data-field="nextPhase">
                    <option value="">Select Option</option>
                    <option value="continue">Continue: Maintain same habits (maintenance mode)</option>
                    <option value="upgrade">Upgrade: Increase difficulty & add new challenges</option>
                    <option value="new">New Goal: Different 12-week focus</option>
                </select>
            </div>
            <div class="form-group">
                <label>Describe your plan</label>
                <textarea id="nextPhasePlan" data-field="nextPhasePlan" placeholder="Your next chapter..."></textarea>
            </div>

            <h4 style="margin-top: 20px; margin-bottom: 10px; color: #667eea;">CELEBRATION & GRATITUDE</h4>

            <div class="form-group">
                <label>How will you celebrate?</label>
                <textarea id="celebration" data-field="celebration" placeholder="Your celebration plan..."></textarea>
            </div>
            <div class="form-group">
                <label>Who do I owe thanks to?</label>
                <textarea id="gratitude" data-field="gratitude" placeholder="Your accountability partner, family, mentors..."></textarea>
            </div>
        </div>
    `
};

// Get phase for week
function getPhaseForWeek(week) {
    for (let phaseKey in PHASES) {
        if (PHASES[phaseKey].weeks.includes(week)) {
            return PHASES[phaseKey];
        }
    }
    return null;
}
