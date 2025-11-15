# 12-Week Brain Mastery Challenge Tracker
## Complete File-Based Application

---

## 📁 FILES INCLUDED

### 1. **index.html**
- Main HTML structure
- Contains all form containers and UI elements
- Links to CSS and JavaScript files

### 2. **styles.css**
- Complete styling for the application
- Responsive design (works on mobile, tablet, desktop)
- Print-friendly CSS
- Color-coded phases (Foundation/Blue, Expansion/Orange, Resilience/Green, Integration/Purple)

### 3. **data.js**
- Configuration data (phases, week focuses, fear hierarchy)
- Form templates for all 12 weeks
- Challenge descriptions and metrics
- Review templates

### 4. **app.js**
- Main application logic
- Week/day navigation
- Form data saving and loading
- Download/Upload functionality
- Summary generation
- Progress tracking

---

## 🚀 QUICK START

### Step 1: Prepare Files
1. Create a new folder on your computer (e.g., `brain-mastery-tracker`)
2. Download/save all 4 files into this folder:
   - `index.html`
   - `styles.css`
   - `data.js`
   - `app.js`

### Step 2: Open Application
1. Open `index.html` in your web browser
   - Double-click the file, OR
   - Right-click → Open with → Your preferred browser

### Step 3: Start Tracking
1. Click "Select Week" dropdown and choose Week 1
2. Click "Select Day" dropdown and choose Day 1
3. Fill out the daily tracking form
4. All data is automatically saved in memory during your session

---

## 💾 DATA SAVING & RECOVERY

### Download Your Progress
1. Fill out your daily tracking
2. Click **"💾 Download Progress"** button at the top
3. A JSON file will download (e.g., `brain-mastery-progress-2025-11-15.json`)
4. Save this file somewhere safe (Desktop, Google Drive, cloud storage)

### Upload & Restore Progress
1. When you return to the tracker, click **"📂 Upload Progress"**
2. Select your previously downloaded JSON file
3. All your previous data will be restored instantly
4. Continue tracking where you left off

### Clear Data (Use with Caution)
- Click **"🗑️ Clear All Data"** to start fresh
- Note: You can only restore from a downloaded file afterward

---

## 📋 WHAT TO TRACK BY WEEK

**Week 1-3 (Foundation Phase)**
- Study hours (fixed times)
- Wake time and exercise
- Sleep discipline and phone boundaries

**Week 4-6 (Expansion Phase)**
- Running distances and times
- Cold shower duration
- Phone-free study hours

**Week 7-9 (Resilience Phase)**
- Daily journaling reflections
- Social interactions (fear hierarchy levels)
- Avoided tasks and speaking up

**Week 10-12 (Integration Phase)**
- Daily accountability check-ins
- Weekly metrics review (7-point scale)
- Mentoring others
- Final identity transformation reflection

---

## ✨ KEY FEATURES

✅ **Complete 12-Week Structure**
- All weeks pre-configured with specific challenges
- Automatic phase detection (Foundation → Expansion → Resilience → Integration)

✅ **Daily Tracking Forms**
- Checkbox inputs for habits
- Time and duration inputs
- 1-10 rating scales for metrics
- Text areas for reflections

✅ **Progress Bar**
- Visual representation of 84-day progress
- Current day indicator (e.g., "Day 47/84")

✅ **Auto-Saving**
- All form inputs auto-save as you type
- No manual "Save" button needed
- Data persists during browser session

✅ **Download/Upload**
- Export all tracking data as JSON
- Re-import when you return
- Perfect for session-to-session continuity

✅ **Weekly Summaries**
- View summary of each week
- See Green/Yellow/Red day counts
- Check progress at glance

✅ **Responsive Design**
- Works on desktop, tablet, mobile
- Print-friendly for printing weekly reports

✅ **No Internet Required**
- Runs completely locally in your browser
- No login or accounts needed
- No cloud dependency

---

## 🎮 HOW TO USE THE TRACKER

### Navigation
1. **Select Week**: Choose from Week 1-12
2. **Select Day**: Choose from Day 1-7
3. **Fill Form**: Complete the daily tracking for that day
4. **Auto-Saves**: Data is saved automatically

### Moving Between Days
- Click **"← Previous Day"** to go back
- Click **"Next Day →"** to advance
- Or use the Day dropdown to jump to any day

### View Weekly Summary
- Click **"📊 Weekly Summary"** button
- See overview of all 7 days in that week
- Track status progression

### Save Your Session
- Click **"💾 Download Progress"** before closing browser
- File is saved to your Downloads folder
- Name format: `brain-mastery-progress-YYYY-MM-DD.json`

---

## 📱 BROWSER COMPATIBILITY

Works on:
- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera
- ✅ Any modern web browser

**Note**: Desktop browsers recommended for best experience. Mobile browsers work but smaller screen may require more scrolling.

---

## 📊 FORM FIELDS BY WEEK

### Week 1: Fixed Study Hours
- [ ] Morning study block (7-9 AM)
- [ ] Evening study block (7-9 PM)
- Reflection on distractions
- Daily status: Green/Yellow/Red

### Week 2: Morning Exercise + Wake Time
- Wake time input
- Exercise type and duration
- Energy levels (1-10)
- All Week 1 habits

### Week 3: Sleep Discipline + Digital Boundary
- Phone away time
- Sleep time
- Sleep quality (1-10)
- All previous habits

### Week 4: Running 3-4x/week
- Running distance (km)
- Running time (minutes)
- Difficulty and enjoyment (1-10)
- All previous habits

### Week 5: Cold Showers
- Cold shower duration (seconds)
- Temperature
- Fear before/after (1-10)
- Self-talk during shower

### Week 6: No Phone During Study
- Morning study phone-free status
- Evening study phone-free status
- Times tempted to check phone
- Study focus quality (1-10)

### Week 7: Daily Journaling
- Journaling duration
- 4 reflection prompts (textareas)
- Journaling depth (1-10)
- Clarity after journaling (1-10)

### Week 8: Social Courage
- Fear hierarchy level (1-8)
- Person name
- Conversation topic and duration
- Anxiety before/after (1-10)

### Week 9: Avoided Tasks + Speak Up
- Task name and difficulty level
- Time taken
- Anxiety before/after
- Speaking context
- What you said

### Week 10: Accountability
- Daily check-in status (Green/Yellow/Red)
- Check-in sent to partner
- Their response
- Accountability impact (1-10)
- Weekly review metrics (7 categories)

### Week 11: Mentoring Others
- Person helped
- What you taught
- Duration
- Impact on you (1-10)
- Share journey status

### Week 12: Identity Consolidation
- Transformation comparison (7 metrics, Week 1 vs 12)
- 6 deep reflection questions
- Next phase plan (Continue/Upgrade/New Goal)
- Celebration and gratitude reflections

---

## 🔧 TECHNICAL DETAILS

### Data Structure
All data is stored in JavaScript memory as a nested object:
```
trackerData = {
  1: { 1: {field1: value1, field2: value2, ...}, 2: {...}, ..., 7: {...} },
  2: { 1: {...}, 2: {...}, ..., 7: {...} },
  ...
  12: { 1: {...}, 2: {...}, ..., 7: {...} }
}
```

### Download Format
Downloads as JSON with structure:
```json
{
  "exportDate": "2025-11-15T22:30:00.000Z",
  "totalWeeksData": 12,
  "weeks": {...trackerData...},
  "lastUpdated": "11/15/2025, 10:30:00 PM"
}
```

### File Size
- HTML: ~50 KB
- CSS: ~25 KB
- JavaScript: ~60 KB
- **Total: ~135 KB** (very lightweight)

---

## ⚠️ IMPORTANT NOTES

1. **Data is NOT persistent across browser sessions by default**
   - If you close the browser without downloading, data is lost
   - Always click "Download Progress" before closing

2. **Import/Export only works with files downloaded from this app**
   - Don't edit the JSON file manually
   - Always use the Download/Upload buttons

3. **Browser local storage is NOT used**
   - This is intentional - provides explicit download/upload control
   - All data stays private on your device

4. **Mobile users**: Recommended to use desktop browser for best experience
   - Tracker works on mobile but form fields may require more scrolling
   - Download button works on mobile but JSON file management varies by device

---

## 🆘 TROUBLESHOOTING

### "Files not found" error
- Make sure all 4 files are in the same folder
- Check file names are exactly: `index.html`, `styles.css`, `data.js`, `app.js`

### Data disappeared after closing browser
- You didn't download your progress before closing
- Next time, click "💾 Download Progress" before closing browser

### Upload says "Invalid file format"
- Make sure you're uploading the correct JSON file downloaded from this app
- Don't try to manually edit the JSON file

### Form fields not appearing
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Try opening in a different browser
- Check that all 4 files are in the same folder

### Progress bar shows wrong percentage
- Refresh the page (F5)
- Re-upload your latest downloaded file

---

## 📞 SUPPORT

This tracker was built for your **12-Week Brain Mastery Challenge** - a scientifically-designed program to build neuroplasticity, resilience, and complete control over your brain and life.

For questions about:
- **The Challenge itself**: Refer to the 12week_science.md document
- **How to use the tracker**: Follow the instructions above
- **Technical issues**: Check Troubleshooting section

---

## ✅ READY TO BEGIN?

1. Download all 4 files
2. Open `index.html`
3. Start tracking today
4. Download your progress regularly
5. Own your 12-week transformation 🚀

---

**Remember:** This tracker mirrors your 12week_daily_tracker.md document but in an interactive digital format. Use it daily to document your journey from Day 1 to Day 84. By the time you complete the challenge, you'll have a complete digital record of your neuroplasticity transformation.

**Let's go! 🧠💪🔥**
