# Additional Practice Area Pages - Creation Guide

## ✅ Pages Created

1. **index.html** - Main homepage (updated with all links)
2. **chad-camper.html** - Chad Camper attorney profile page
3. **shane-dean.html** - Shane Dean attorney profile page  
4. **car-accident-lawyers.html** - Car accident practice area page

## 📝 Pages Still Needed

The following practice area pages should be created following the same format as `car-accident-lawyers.html`:

### 1. Truck Accident Lawyers
**Filename:** `truck-accident-lawyers.html`
**Title:** Truck Accident Lawyers Pensacola, Destin, Fort Walton Beach, Mobile | Dean & Camper
**Key Content:**
- Types of truck accidents (jackknife, underride, rollover, etc.)
- Federal trucking regulations (FMCSA)
- Common causes (driver fatigue, overloaded trucks, poor maintenance)
- Damages available
- Why commercial truck accidents are different
**Keywords:** truck accident lawyer Pensacola, 18-wheeler attorney, semi-truck accident lawyer

### 2. Motorcycle Accident Lawyers
**Filename:** `motorcycle-accident-lawyers.html`
**Title:** Motorcycle Accident Lawyers Pensacola, Destin, Mobile | Dean & Camper
**Key Content:**
- Types of motorcycle accidents (left-turn, lane-splitting, road hazards)
- Common injuries (road rash, fractures, head injuries)
- Overcoming bias against motorcyclists
- Helmet laws in FL and AL
- Compensation available
**Keywords:** motorcycle accident lawyer Pensacola, motorcycle injury attorney Florida

### 3. Insurance Claims Lawyers
**Filename:** `insurance-claims-lawyers.html`
**Title:** Auto Insurance Claims Lawyers Florida & Alabama | Dean & Camper
**Key Content:**
- Dealing with insurance adjusters
- Uninsured/underinsured motorist claims
- Bad faith insurance practices
- Denied or lowball settlements
- PIP claims in Florida
**Keywords:** insurance claim lawyer, uninsured motorist attorney, bad faith insurance lawyer

### 4. Wrongful Death Lawyers
**Filename:** `wrongful-death-lawyers.html`
**Title:** Wrongful Death Lawyers Pensacola, Destin, Mobile | Dean & Camper
**Key Content:**
- Who can file a wrongful death claim (FL and AL laws differ)
- Types of wrongful death cases (auto, medical malpractice, etc.)
- Damages available (funeral costs, lost income, loss of companionship)
- Statute of limitations
- Compassionate representation
**Keywords:** wrongful death lawyer Pensacola, wrongful death attorney Florida Alabama

### 5. Personal Injury Lawyers (General)
**Filename:** `personal-injury-lawyers.html`
**Title:** Personal Injury Lawyers Pensacola, Destin, Fort Walton Beach, Mobile | Dean & Camper
**Key Content:**
- Slip and fall accidents
- Premises liability
- Dog bites
- Product liability
- Boat and jet ski accidents
- Other injury types
**Keywords:** personal injury lawyer Pensacola, injury attorney Destin, accident lawyer Mobile

## 🎨 Page Template Structure

Each practice area page should follow this structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta tags -->
    <title>[Practice Area] Lawyers [Locations] | Dean & Camper</title>
    <meta name="description" content="[SEO description]">
    <meta name="keywords" content="[relevant keywords]">
    
    <!-- Service Schema -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "[Practice Area] Legal Representation",
        "provider": {
            "@type": "LegalService",
            "name": "Dean & Camper, P.A."
        }
    }
    </script>
    
    <!-- Same CSS as car-accident-lawyers.html -->
</head>
<body>
    <!-- Same nav as other pages -->
    
    <!-- Hero Section -->
    <section class="page-hero">
        <h1>[Practice Area] Lawyers</h1>
        <p>[Compelling description]</p>
        <a href="tel:8504333077" class="btn">Call Now</a>
    </section>
    
    <!-- Main Content -->
    <section class="content-section">
        <h2>Overview</h2>
        <p>Introduction paragraph...</p>
        
        <div class="stats-grid">
            <!-- Same stats boxes -->
        </div>
        
        <h3>Types of [Cases]</h3>
        <ul>
            <li>Case type 1</li>
            <li>Case type 2</li>
            <!-- etc -->
        </ul>
        
        <div class="highlight-box">
            <h3>Why Choose Dean & Camper?</h3>
            <p>Proven results, no fees unless we win, etc.</p>
        </div>
        
        <h3>Common Injuries</h3>
        <!-- If applicable -->
        
        <h3>Compensation Available</h3>
        <ul>
            <li>Medical expenses</li>
            <li>Lost wages</li>
            <!-- etc -->
        </ul>
    </section>
    
    <!-- CTA Section -->
    <section class="cta-section">
        <h2>Get Your Free Consultation</h2>
        <p>Contact us today...</p>
        <a href="tel:8504333077" class="btn">Call Now</a>
    </section>
    
    <!-- Footer -->
</body>
</html>
```

## 🔗 Updating Home Page Links

Once you create each page, update the corresponding "Learn More →" link on index.html:

**Current links in index.html:**
- ✅ Car Accidents → `car-accident-lawyers.html` (already updated)
- ⚠️ Truck Accidents → Update to `truck-accident-lawyers.html`
- ⚠️ Motorcycle Accidents → Update to `motorcycle-accident-lawyers.html`
- ⚠️ Insurance Claims → Update to `insurance-claims-lawyers.html`
- ⚠️ Wrongful Death → Update to `wrongful-death-lawyers.html`
- ⚠️ Other Personal Injuries → Update to `personal-injury-lawyers.html`

## 📊 SEO Optimization Checklist for Each Page

When creating each page, ensure:

✅ **Title tag** includes location keywords
✅ **Meta description** under 160 characters
✅ **H1 heading** matches the title
✅ **Service schema** properly configured
✅ **Internal links** back to homepage
✅ **Phone numbers** are clickable (tel: links)
✅ **"Si Hablo Español"** included in CTA
✅ **Stats boxes** showing $50M+, 30+ years, 24/7
✅ **Mobile responsive** (use same CSS)
✅ **Logo links** back to index.html

## 🎯 Priority Order

Create pages in this order based on search volume and importance:

1. ✅ Car Accident Lawyers (DONE)
2. **Truck Accident Lawyers** (High search volume)
3. **Personal Injury Lawyers** (Broad, catches all)
4. **Wrongful Death Lawyers** (High value cases)
5. **Motorcycle Accident Lawyers** (Moderate volume)
6. **Insurance Claims Lawyers** (Important for existing clients)

## 💡 Tips for Fast Creation

1. **Copy** car-accident-lawyers.html as your template
2. **Find/Replace** "car accident" with the new practice area
3. **Update** title, meta description, keywords
4. **Customize** the content sections (types of cases, injuries, etc.)
5. **Update** Service schema with new serviceType
6. **Test** all links and phone numbers
7. **Verify** mobile responsiveness

## 📁 File Structure

Your final website structure should be:

```
/
├── index.html (homepage)
├── chad-camper.html
├── shane-dean.html
├── car-accident-lawyers.html ✅
├── truck-accident-lawyers.html
├── motorcycle-accident-lawyers.html
├── insurance-claims-lawyers.html
├── wrongful-death-lawyers.html
├── personal-injury-lawyers.html
└── images/
    ├── dean-camper-logo.webp
    └── dean-camper-logo.png
```

## 🚀 Quick Start Command

To create a new practice area page:

1. Copy car-accident-lawyers.html
2. Replace "Car Accident" throughout
3. Update meta tags
4. Customize content sections
5. Save with appropriate filename
6. Update link in index.html

Example:
```bash
cp car-accident-lawyers.html truck-accident-lawyers.html
# Then edit truck-accident-lawyers.html
```

---

**Need help?** Refer to car-accident-lawyers.html as the perfect template. It has all the SEO optimization, proper structure, and styling you need!
