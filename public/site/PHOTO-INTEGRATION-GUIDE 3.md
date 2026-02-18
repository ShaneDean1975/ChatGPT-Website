# PHOTO INTEGRATION GUIDE
## Dean & Camper P.A. Website - Adding Attorney Photos

---

## 📸 OVERVIEW

This guide provides step-by-step instructions for adding professional photos of Shane Dean and Chad Camper to your website, including photo specifications, preparation, uploading, and SEO optimization.

---

## ✅ REQUIRED PHOTOS

You need to obtain and prepare **professional headshot photos** for both attorneys:

### Shane Dean Photo
- **Filename:** `shane-dean-photo.jpg`
- **WebP version:** `shane-dean-photo.webp`

### Chad Camper Photo
- **Filename:** `chad-camper-photo.jpg`
- **WebP version:** `chad-camper-photo.webp`

---

## 📐 PHOTO SPECIFICATIONS

### Minimum Requirements:
- **Dimensions:** 800px wide × 1000px tall (minimum)
- **Aspect Ratio:** 4:5 (portrait orientation) - preferred
- **File Format:** JPG or PNG (high quality)
- **File Size:** Under 500KB per photo (optimized for web)
- **Resolution:** 72-150 DPI (web standard)

### Professional Standards:
✓ **Business attire** (suit and tie preferred)
✓ **Professional background** (solid color or office setting)
✓ **Well-lit** (no harsh shadows on face)
✓ **In focus** (sharp, clear image quality)
✓ **Direct eye contact** with camera
✓ **Natural, confident expression**
✓ **Head and shoulders** to upper torso visible
✓ **Neutral or law office** background

---

## 🎯 WHERE PHOTOS WILL APPEAR

### Homepage (index.html):
- "Meet Your Legal Team" section
- Display size: 400px wide (responsive)
- Both attorneys shown side-by-side on desktop
- Stacked on mobile devices

### Individual Attorney Pages:
- **shane-dean.html** - Large hero photo at top
- **chad-camper.html** - Large hero photo at top
- Display size: 400px × 500px

---

## 📝 STEP-BY-STEP PHOTO PREPARATION

### Step 1: Obtain Professional Photos
Options for getting photos:
1. **Hire a professional photographer** (recommended)
   - Local portrait photographer
   - Cost: $200-$500 for headshots
   - Best quality results

2. **Use existing professional photos**
   - From bar association profiles
   - From previous marketing materials
   - Ensure you have rights to use

3. **Take high-quality photos yourself** (budget option)
   - Use good camera or modern smartphone
   - Proper lighting is essential
   - Solid background (white, gray, or blue wall)
   - Have someone else take the photo

### Step 2: Crop and Resize Photos
1. Open photo in editing software (Photoshop, GIMP, or online tool like Pixlr)
2. Crop to **4:5 ratio** (portrait orientation)
   - Example: 800px × 1000px
   - Example: 1000px × 1250px
   - Example: 1200px × 1500px
3. Ensure face is centered and fills upper 2/3 of frame
4. Export as high-quality JPG

### Step 3: Optimize File Size
Use free online tools:

**Recommended Tools:**
- **TinyPNG.com** - Excellent compression
- **Squoosh.app** - Google's optimizer
- **Compressor.io** - Easy to use

**Target File Sizes:**
- JPG version: 150-300KB
- WebP version: 80-150KB

**How to use TinyPNG:**
1. Go to https://tinypng.com
2. Upload your JPG photo
3. Download the compressed version
4. Rename to exact filename needed

### Step 4: Create WebP Versions
WebP format is 30-50% smaller than JPG with same quality.

**Online Conversion (Easiest):**
1. Go to https://squoosh.app
2. Upload shane-dean-photo.jpg
3. Select "WebP" from format dropdown
4. Adjust quality to 80
5. Download as shane-dean-photo.webp
6. Repeat for chad-camper-photo.jpg

**Alternative Tools:**
- CloudConvert.com
- Convertio.co
- Photoshop: File > Export > Save for Web > WebP

### Step 5: Name Files Correctly
**CRITICAL:** Use exact filenames (case-sensitive on some servers)

Shane Dean:
- `shane-dean-photo.jpg`
- `shane-dean-photo.webp`

Chad Camper:
- `chad-camper-photo.jpg`
- `chad-camper-photo.webp`

❌ **DO NOT use:**
- IMG_1234.jpg
- photo.jpg
- shane.jpg
- attorney1.jpg
- Any other variations

---

## 📤 UPLOADING PHOTOS TO YOUR WEBSITE

### Where to Upload:
Upload all 4 photo files to your website's **root directory** (same location as index.html)

**File structure should be:**
```
yourwebsite.com/
├── index.html
├── shane-dean.html
├── chad-camper.html
├── dean-camper-logo-main.png
├── shane-dean-photo.jpg ← Upload here
├── shane-dean-photo.webp ← Upload here
├── chad-camper-photo.jpg ← Upload here
└── chad-camper-photo.webp ← Upload here
```

### Upload Methods:

**Option 1: FTP Client (Most Common)**
1. Open FileZilla, Cyberduck, or your FTP client
2. Connect to your website server
3. Navigate to public_html or www folder
4. Upload all 4 photo files
5. Verify files appear in directory

**Option 2: Web Hosting Control Panel**
1. Log into cPanel, Plesk, or your hosting control panel
2. Open "File Manager"
3. Navigate to public_html
4. Click "Upload"
5. Select all 4 photo files
6. Upload

**Option 3: Website Builder**
(If using WordPress, Wix, Squarespace, etc.)
1. Access media library or file manager
2. Upload photos
3. Note the exact URL where they're stored
4. Update HTML file paths if needed

---

## ✅ VERIFICATION CHECKLIST

After uploading, verify everything works:

### Test Each Photo URL:
Open these URLs in your browser (replace yourwebsite.com):
- `https://yourwebsite.com/shane-dean-photo.jpg`
- `https://yourwebsite.com/shane-dean-photo.webp`
- `https://yourwebsite.com/chad-camper-photo.jpg`
- `https://yourwebsite.com/chad-camper-photo.webp`

You should see each photo display in your browser.

### Test Homepage:
1. Open `https://yourwebsite.com/index.html`
2. Scroll to "Meet Your Legal Team" section
3. Verify both attorney photos appear
4. Check photos are not distorted
5. Test on mobile phone

### Test Attorney Profile Pages:
1. Open `https://yourwebsite.com/shane-dean.html`
2. Verify Shane's photo appears at top
3. Open `https://yourwebsite.com/chad-camper.html`
4. Verify Chad's photo appears at top

### Test Responsive Design:
- View on desktop computer ✓
- View on tablet ✓
- View on mobile phone ✓
- All photos should scale properly

---

## 🔧 TROUBLESHOOTING

### Problem: Photos Don't Appear
**Solutions:**
1. Verify filenames match exactly (case-sensitive)
2. Check files uploaded to correct directory
3. Clear browser cache (Ctrl+F5)
4. Verify file permissions (should be 644)
5. Check file paths in HTML match your server structure

### Problem: Photos Look Pixelated/Blurry
**Solutions:**
1. Use higher resolution source photos (minimum 800×1000px)
2. Don't upscale small photos
3. Ensure JPG quality is 80% or higher
4. Use original high-resolution photos

### Problem: Photos Too Large (Slow Loading)
**Solutions:**
1. Compress JPGs using TinyPNG
2. Ensure WebP versions are created
3. Target file sizes: JPG <300KB, WebP <150KB
4. Check PageSpeed Insights for optimization tips

### Problem: Photos Show on Desktop But Not Mobile
**Solutions:**
1. Test in mobile browser (not just resized desktop)
2. Check CSS media queries aren't hiding images
3. Verify mobile data connection allows images
4. Clear mobile browser cache

### Problem: Only JPG Shows (WebP Doesn't Load)
**Solutions:**
1. This is normal for older browsers
2. Modern browsers (Chrome, Edge, Firefox) use WebP
3. Safari and older browsers fall back to JPG
4. Both versions are needed for compatibility

---

## 🎨 PHOTO EDITING TIPS

### If Photos Need Improvement:

**Background Removal:**
- Use remove.bg (free tool) to remove/replace background
- Solid color backgrounds work well for professional headshots
- Navy blue or gray matches your website colors

**Lighting Adjustment:**
- Brighten faces if too dark
- Reduce harsh shadows
- Use "levels" or "curves" adjustment in photo editor

**Color Correction:**
- Adjust white balance for natural skin tones
- Ensure professional, neutral color tone
- Avoid overly warm or cool tones

**Cropping:**
- Leave some space above head (don't crop tight)
- Center face in frame
- Include shoulders and upper torso

---

## 📊 SEO OPTIMIZATION (Already Built-In)

Your website HTML already includes SEO optimization for photos:

### Alt Text (Screen Readers & SEO):
- Shane: "Shane Dean - Personal Injury Attorney at Dean & Camper P.A."
- Chad: "Chad Camper - Personal Injury Attorney at Dean & Camper P.A."

### Structured Data (JSON-LD):
- Person schema for each attorney
- Photo URL included in schema
- Links to profile pages

### WebP + Fallback:
```html
<picture>
  <source srcset="attorney-photo.webp" type="image/webp">
  <img src="attorney-photo.jpg" alt="...">
</picture>
```

### Dimensions Specified:
- Prevents layout shift (good for Core Web Vitals)
- Improves page load performance

---

## 🚀 OPTIONAL ENHANCEMENTS

### Future Improvements:

**Add More Photos:**
- Office location photos
- Team photos
- Courtroom/professional setting photos
- Community involvement photos

**Video Introductions:**
- 1-2 minute attorney introduction videos
- Can significantly increase engagement
- Upload to YouTube, embed on website

**Photo Gallery:**
- Create dedicated "Our Team" page
- Multiple photos of each attorney
- Office photos
- Awards and recognition photos

---

## 📋 FINAL CHECKLIST

Before launch, verify:

□ All 4 photo files uploaded to server
□ Filenames match exactly (case-sensitive)
□ Photos display on homepage
□ Photos display on shane-dean.html
□ Photos display on chad-camper.html
□ Photos look professional and clear
□ File sizes optimized (under 500KB each)
□ WebP versions created for modern browsers
□ Mobile responsive (test on phone)
□ No broken image icons
□ Alt text describes images properly
□ Page loads quickly (test PageSpeed)

---

## 🆘 NEED HELP?

### If you get stuck:

1. **Check filename spelling** - Most common issue
2. **Verify upload location** - Must be in same directory as HTML files
3. **Clear browser cache** - Force refresh with Ctrl+F5
4. **Test direct URL** - Type photo URL directly in browser
5. **Contact web host** - They can verify file permissions and locations

### Testing Tools:
- PageSpeed Insights: https://pagespeed.web.dev/
- Mobile-Friendly Test: https://search.google.com/test/mobile-friendly
- Rich Results Test: https://search.google.com/test/rich-results

---

## ✅ SUCCESS METRICS

After adding photos, you should see:

✓ Professional appearance on all pages
✓ Increased trust from website visitors
✓ Better engagement (people stay on page longer)
✓ Higher conversion rates (more calls/contacts)
✓ Improved SEO (images help with rankings)
✓ Enhanced social media sharing (photos in previews)

---

## 📞 SUMMARY

**What You Need:**
- 2 professional headshot photos (Shane & Chad)
- Each as both JPG and WebP format
- 4 total files to upload

**Where They Go:**
- Upload to website root directory
- Same location as index.html

**How to Prepare:**
- Crop to 4:5 ratio (800×1000px minimum)
- Optimize file size (under 500KB)
- Create WebP versions
- Use exact filenames listed in this guide

**Once Uploaded:**
- Photos automatically appear on your website
- No code changes needed (HTML already configured)
- Test on desktop and mobile
- Verify all pages display correctly

---

**Your website is ready for photos. Just upload the 4 files with the correct names and they'll automatically appear!**

---

## 📸 PHOTO SPECIFICATIONS QUICK REFERENCE

| Specification | Requirement |
|--------------|-------------|
| Dimensions | 800px × 1000px minimum |
| Aspect Ratio | 4:5 (portrait) |
| File Format | JPG + WebP |
| File Size | JPG <300KB, WebP <150KB |
| Resolution | 72-150 DPI |
| Background | Professional, solid color preferred |
| Attire | Business suit and tie |
| Lighting | Well-lit, no harsh shadows |
| Expression | Professional, confident, friendly |

---

**Good luck with your photos! Your website will look fantastic once they're added.**
