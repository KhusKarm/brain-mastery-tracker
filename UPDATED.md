# 12-Week Brain Mastery Challenge Tracker
## With IndexedDB Auto-Persistence

---

## 🎯 WHAT'S NEW: Auto-Saving with IndexedDB

**Your data is now automatically saved to your browser's database!**

### How It Works:
1. ✅ **Fill out daily tracking** → Data auto-saves to IndexedDB
2. ✅ **Close browser** → Come back later
3. ✅ **Open tracker again** → All previous data loads automatically
4. ✅ **No manual download/upload needed** for daily use
5. ✅ **Optional backup** via Download button for extra safety

---

## 📁 FILES INCLUDED

### 1. **index.html** (Updated)
- Main HTML structure with new Save button
- Auto-saving feedback
- IndexedDB integration

### 2. **styles.css** (Updated)
- Save button with pulsing animation
- All responsive design features
- Print-friendly styles

### 3. **data.js**
- All 12-week configurations
- Form templates
- Challenge data

### 4. **app.js** (Completely Rewritten)
- **IndexedDB database initialization**
- **Auto-save on form change**
- **Auto-load on page reload**
- **Session persistence**
- Optional backup/restore
- Weekly summaries

### 5. **README.md** (This file)
- Usage instructions
- Troubleshooting guide

---

## 🚀 QUICK START

### Setup:
1. Create folder: `brain-mastery-tracker`
2. Put all 4 files in folder
3. Double-click `index.html`
4. Application starts (data loads from IndexedDB if exists)

### Using the Tracker:

**Day 1:**
```
1. Select Week 1 → Day 1
2. Fill out all daily tracking fields
3. Green "💾 Save Day Data" button appears
4. Click Save button
5. See "✓ Saved!" confirmation
6. Data automatically saved to IndexedDB
```

**Day 2 (Next Session):**
```
1. Open index.html again
2. Select Week 1 → Day 2
3. All your Day 1 data is still there!
4. Fill out Day 2
5. Click Save
```

---

## 💾 DATA STORAGE EXPLAINED

### Primary Storage: IndexedDB (Automatic)
- **What**: Browser's local database
- **Where**: Stored on your computer
- **Persistence**: Survives browser closing
- **Capacity**: ~50MB per app (more than enough)
- **Privacy**: Your data stays on your device, never sent to servers
- **Auto-Save**: Every click of Save button

### Secondary Storage: JSON Backup (Optional)
- **Purpose**: Extra safety net
- **When to use**: Download periodically
- **How to restore**: Upload from any device

---

## 🎮 HOW TO USE THE TRACKER

### Basic Workflow:

**Step 1: Select Week & Day**
```
Week Dropdown → Select Week (1-12)
Day Dropdown → Select Day (1-7)
Form loads with all fields for that day
```

**Step 2: Fill Daily Tracking**
```
- Check boxes for completed habits
- Enter times, durations, distances
- Rate 1-10 scales
- Write reflections in text areas
```

**Step 3: Click "💾 Save Day Data"**
```
- Button appears when you make changes
- Click it to save
- Green "✓ Saved!" notification shows
- Data saved to IndexedDB
- Button hides after 2 seconds
```

**Step 4: Navigate & Continue**
```
Use arrow buttons or Day dropdown
Move between days freely
Previous data stays loaded
```

### Weekly Summary:
```
Click "📊 Weekly Summary"
See all 7 days of that week
View status counts
Check progress
```

---

## 📊 WHAT GETS TRACKED

**Week 1-3: Foundation**
- Study hours, exercise, wake times, sleep discipline, phone boundaries

**Week 4-6: Expansion**
- Running distances, cold shower duration, device-free hours

**Week 7-9: Resilience**
- Journal entries, social interactions, avoided tasks, speaking up

**Week 10-12: Integration**
- Accountability check-ins, mentoring, identity transformation

---

## 💡 TIPS & TRICKS

### Pro Tips:
1. **Download backup weekly** - Extra safety
2. **Fill tracking at night** - Remember your day
3. **Use weekly summaries** - Check your progress
4. **Print reports** - Use print button on computer

### Keyboard Shortcuts:
- Tab between form fields
- Enter to submit/confirm
- Arrow keys work in dropdowns

---

## ⚠️ IMPORTANT NOTES

### Data Persistence:
✅ **Browser Closure**: Data persists (saved in IndexedDB)  
✅ **Page Refresh**: Data loads automatically  
✅ **Computer Restart**: Data persists (stored on disk)  
⚠️ **Browser Cache Clear**: Data lost (unless you downloaded backup)  
⚠️ **Uninstall Browser**: Data lost (unless downloaded backup)

### Backup Safety:
- Download backup every week for extra security
- Keep backups in Google Drive/cloud storage
- One file = complete snapshot of all 12 weeks

### If Data Disappears:
1. Check if you cleared browser cache
2. Try uploading a previously downloaded backup
3. Or start fresh (data not recoverable without backup)

---

## 🔧 TECHNICAL DETAILS

### IndexedDB Features:
- **Database Name**: BrainMasteryTrackerDB
- **Store Name**: trackerData
- **Data Format**: JSON objects
- **Auto-Upgrade**: Automatically creates on first load
- **Data Size**: Typically 100-500 KB (varies with notes)

### Browser Support:
✓ Chrome/Chromium  
✓ Firefox  
✓ Safari (v10+)  
✓ Edge  
✓ Opera  
⚠️ Internet Explorer (not supported)

### File Sizes:
- index.html: ~50 KB
- styles.css: ~30 KB
- data.js: ~40 KB
- app.js: ~70 KB (with IndexedDB code)
- **Total: ~190 KB** (lightweight)

---

## 🆘 TROUBLESHOOTING

### "Data disappeared after closing browser"
**Solution**: IndexedDB doesn't work in private/incognito mode. Use normal browser mode.

### "Save button doesn't appear"
**Solution**: Make changes to form first (any input). Button appears after changes detected.

### "IndexedDB error in console"
**Solution**: 
- Try clearing browser cache
- Disable browser extensions blocking storage
- Restart browser
- Use different browser

### "Upload says invalid file"
**Solution**: Only upload JSON files downloaded from this app. Don't manually edit them.

### "Data loads very slow"
**Solution**: This is normal for large databases. First load takes longest.

### "Lost all data after clearing cache"
**Solution**: This is why downloads exist! Always download backups. You can restore from backup file.

---

## 📝 KEYBOARD NAVIGATION

- **Tab**: Move to next form field
- **Shift+Tab**: Move to previous field
- **Enter/Space**: Check/uncheck boxes
- **Arrow Keys**: Navigate dropdowns
- **Ctrl+S**: Many browsers save page (doesn't affect app)

---

## 🎯 WORKFLOW BY WEEK

### Daily Workflow:
```
6:00 PM → Open tracker (auto-loads yesterday's data)
6:05 PM → Select today's date
6:10 PM → Fill tracking form
6:15 PM → Click Save button
6:16 PM → Confirmation appears
✓ Done! Data saved for today
```

### Weekly Workflow (Sunday):
```
1. Select current week
2. Click "Weekly Summary"
3. Review all 7 days
4. See status progress
5. Plan next week
6. Download backup
7. Save backup file
```

### Monthly Backup Routine:
```
Week 1, 2, 3, 4 complete:
1. Click "Download Backup"
2. File saves: brain-mastery-progress-[DATE].json
3. Move to Google Drive/cloud storage
4. Keep multiple backups
```

---

## 📊 UNDERSTANDING YOUR DATA

### Status Indicators:
- **Green**: All daily goals completed (8-10 habits)
- **Yellow**: Most goals completed (5-7 habits)
- **Red**: Incomplete day (<5 habits)

### Anxiety Scale:
- **1-3**: Minimal anxiety
- **4-6**: Moderate anxiety
- **7-10**: Severe anxiety

### Confidence/Energy Scale:
- **1-3**: Low
- **4-6**: Average
- **7-10**: High

---

## 🎓 GETTING THE MOST OUT OF THE TRACKER

### Best Practices:
1. **Fill daily** - Don't skip days (affects accuracy)
2. **Be honest** - Accurate data = better insights
3. **Review weekly** - See patterns and progress
4. **Download regularly** - Backup data for safety
5. **Use reflections** - Write meaningful notes

### Maximizing Results:
- Track anxiety before/after (shows desensitization working)
- Note what helped most
- Celebrate Green days
- Learn from Red days
- Reference past weeks to see growth

---

## 📞 FREQUENTLY ASKED QUESTIONS

**Q: Will my data sync across devices?**
A: No, data is stored locally on each device. Use download/upload to move between devices.

**Q: Can I edit the JSON file manually?**
A: Not recommended. Use the app interface instead. Manual edits may cause errors.

**Q: How long will the data persist?**
A: Until you clear browser cache or uninstall browser. That's why downloads are important!

**Q: Can I recover deleted data?**
A: Only from downloaded backup files. Always keep backups!

**Q: Does the app need internet?**
A: No! Completely offline. All data stays on your device.

**Q: Is my data safe?**
A: Yes! Never sent to servers. Stays on your computer. Download backups for extra safety.

---

## 🚀 YOU'RE ALL SET!

Your Brain Mastery Tracker is ready with:
- ✅ Auto-saving to IndexedDB
- ✅ Automatic data loading on page reload
- ✅ Optional JSON backup/restore
- ✅ All 12 weeks pre-configured
- ✅ Complete tracking interface

### Start Now:
1. Open `index.html`
2. Select Week 1, Day 1
3. Start filling daily tracking
4. Click Save
5. Data auto-saves!

**Your 12-week neuroplasticity journey begins now. Own it! 🧠💪🚀**

---

**Last Updated**: November 15, 2025  
**Version**: 2.0 (IndexedDB Auto-Save)
