#!/bin/bash
# Dean & Camper Website - GitHub Update Script
# This script will help you update your repository with the converted files

echo "=========================================="
echo "Dean & Camper Website - GitHub Update"
echo "=========================================="
echo ""

# Instructions for the user
cat << 'EOF'
INSTRUCTIONS TO UPDATE YOUR GITHUB REPOSITORY:

1. DOWNLOAD THE CONVERTED WEBSITE
   - Download: dc-website-unified-navy-gold.zip
   - Extract it to a folder on your computer

2. OPEN TERMINAL/COMMAND PROMPT
   - Windows: Open "Git Bash" or "Command Prompt"
   - Mac: Open "Terminal"

3. NAVIGATE TO YOUR LOCAL REPOSITORY
   cd path/to/your/dc-website

4. BACKUP YOUR CURRENT FILES (RECOMMENDED)
   git checkout -b backup-before-conversion
   git push origin backup-before-conversion
   git checkout main

5. COPY THE CONVERTED FILES
   - Copy all files from the extracted folder
   - Paste them into your local dc-website folder
   - Replace when prompted

6. COMMIT AND PUSH CHANGES
   Run these commands:

   git add .
   git commit -m "Convert entire website to unified Navy & Gold color scheme

   - Converted 12 practice area pages from blue/yellow to navy/gold
   - Updated contact page to match unified branding
   - Preserved all content and SEO optimization
   - Added master-styles.css for consistency
   - All pages now use premium Navy (#0A1F3D) and Gold (#D4AF37)
   - Enhanced typography with Playfair Display headings
   - Maintained mobile responsiveness across all pages"
   
   git push origin main

7. VERIFY ON GITHUB
   - Go to https://github.com/ShaneDean1975/dc-website
   - Refresh the page
   - Check that files are updated

ALTERNATIVE: UPLOAD DIRECTLY ON GITHUB.COM
If you don't use Git command line:

1. Go to https://github.com/ShaneDean1975/dc-website
2. Create a new branch: Click "main" dropdown → "Create branch: updated-design"
3. Click "Add file" → "Upload files"
4. Drag all your converted files
5. Commit message: "Convert to Navy & Gold unified design"
6. Click "Commit changes"
7. Create Pull Request and merge when ready

FILES TO UPLOAD:
- index.html (updated)
- contact.html (converted)
- shane-dean.html (updated)
- chad-camper.html (updated)
- car-accident-injuries.html (converted)
- truck-accident-injuries.html (converted)
- motorcycle-accident-injuries.html (converted)
- boat-accident-injuries.html (converted)
- defective-product-injuries.html (converted)
- dog-bite-injuries.html (converted)
- other-personal-injuries.html (converted)
- wrongful-death.html (converted)
- auto-insurance-claims.html (converted)
- premises-liability.html (converted)
- car-accident-faq.html (converted)
- master-styles.css (NEW)
- All images and badges (same as before)

WHAT WAS CHANGED:
✓ All pages converted to Navy & Gold color scheme
✓ Consistent branding across entire site
✓ Enhanced typography with Playfair Display
✓ Preserved all content and functionality
✓ Maintained SEO optimization
✓ Mobile-responsive design maintained

EOF

echo ""
echo "=========================================="
echo "Need help? Let me know!"
echo "=========================================="
