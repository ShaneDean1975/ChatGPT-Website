# How to Update Your GitHub Repository - Simple Steps

## 🎯 Quick Method (No Git Knowledge Required)

### Step 1: Download Your Converted Website
1. Download the file: **dc-website-unified-navy-gold.zip**
2. Extract/unzip it on your computer
3. You'll see a folder called `dc-website-converted` with all your files

### Step 2: Go to GitHub
1. Open your browser
2. Go to: https://github.com/ShaneDean1975/dc-website
3. Make sure you're logged in

### Step 3: Create a Backup Branch (Recommended)
1. Click the dropdown that says **"main"** (near the top left)
2. Type: `backup-old-design`
3. Click "Create branch: backup-old-design from main"
4. This saves your old version just in case!

### Step 4: Switch Back to Main
1. Click the branch dropdown again
2. Click **"main"** to switch back

### Step 5: Upload Your New Files

**METHOD A: Upload via GitHub Website (Easier)**

1. Click **"Add file"** button (top right area)
2. Click **"Upload files"**
3. Open your extracted folder on your computer
4. Select ALL files and drag them into the GitHub upload area
   - Include all .html files
   - Include all .png, .jpg image files
   - Include the master-styles.css file
   - Include the Badges folder
5. In the "Commit changes" box at bottom:
   - **Title:** `Convert to unified Navy & Gold design`
   - **Description:** 
   ```
   - Converted all pages to consistent Navy & Gold color scheme
   - Enhanced typography with Playfair Display headings
   - Preserved all content and SEO optimization
   - Added master-styles.css for design consistency
   - All 15 pages now feature premium law firm branding
   ```
6. Click **"Commit changes"** (green button)

**METHOD B: Replace Individual Files**

If you prefer to replace files one by one:

1. Click on a file in GitHub (e.g., `contact.html`)
2. Click the pencil icon (✏️ Edit)
3. Delete all content
4. Open the same file from your converted folder
5. Copy all content and paste into GitHub
6. Scroll down, add commit message
7. Click "Commit changes"
8. Repeat for each file

### Step 6: Verify Upload
1. Go back to: https://github.com/ShaneDean1975/dc-website
2. Click on a few files to verify they updated
3. Look at `contact.html` - it should have Navy (#0A1F3D) colors now

---

## ✅ Files to Upload/Replace

### Essential Files (15 HTML pages)
- [ ] index.html
- [ ] contact.html
- [ ] shane-dean.html
- [ ] chad-camper.html
- [ ] car-accident-injuries.html
- [ ] truck-accident-injuries.html
- [ ] motorcycle-accident-injuries.html
- [ ] boat-accident-injuries.html
- [ ] defective-product-injuries.html
- [ ] dog-bite-injuries.html
- [ ] other-personal-injuries.html
- [ ] wrongful-death.html
- [ ] auto-insurance-claims.html
- [ ] premises-liability.html
- [ ] car-accident-faq.html

### New File
- [ ] master-styles.css (NEW - add this!)

### Images (Same as before - can skip if already uploaded)
- [ ] dean-camper-logo.png
- [ ] dean-camper-logo.webp
- [ ] dean-camper-logo-og.png
- [ ] shane-dean-photo.jpg.JPG
- [ ] chad-camper-photo.jpg
- [ ] car_crash_with_ambulance.jpeg
- [ ] truck_accident.jpg
- [ ] Badges/ folder with all badge images

### Documentation (Optional but recommended)
- [ ] CHANGELOG.md (explains what changed)
- [ ] CONVERSION_COMPLETE.md (summary documentation)

---

## 🎓 For Git Command Line Users

If you're comfortable with Git commands:

```bash
# Navigate to your local repository
cd /path/to/dc-website

# Create backup branch
git checkout -b backup-old-design
git push origin backup-old-design

# Switch back to main
git checkout main

# Copy all converted files to your local repo
# (Copy files from dc-website-converted folder)

# Stage all changes
git add .

# Commit with descriptive message
git commit -m "Convert to unified Navy & Gold design

- Converted 12 practice area pages to Navy & Gold color scheme
- Updated contact page and attorney bios for consistency
- Added master-styles.css with complete design system
- Enhanced typography with Playfair Display headings
- Maintained all content, SEO optimization, and functionality
- All pages now feature premium, professional branding"

# Push to GitHub
git push origin main
```

---

## ❓ Troubleshooting

**Problem:** "File too large" error  
**Solution:** Images should be fine. If you get this, upload files in smaller batches.

**Problem:** "Nothing to commit"  
**Solution:** Make sure you're actually replacing/changing files, not just viewing them.

**Problem:** Can't see the upload button  
**Solution:** Make sure you're logged into YOUR GitHub account and you're in YOUR repository.

**Problem:** Want to undo changes  
**Solution:** That's why we created the backup branch! Just switch to `backup-old-design` branch and everything is safe.

---

## 🎉 Success!

Once uploaded, your GitHub repository will have:
- ✅ Unified Navy & Gold design across all pages
- ✅ Professional, consistent branding
- ✅ Enhanced typography
- ✅ All content preserved
- ✅ Version controlled and backed up

**Your website is now ready to build trust and convert visitors into clients!**

---

## 📞 Need Help?

If you run into issues:
1. Check that you're logged into the correct GitHub account
2. Make sure you have write permissions to the repository
3. Try uploading files in smaller batches if you get errors
4. The backup branch keeps your old version safe

**Note:** Changes to GitHub don't automatically update your live website. You'll still need to deploy these files to your web server for the public to see them.
