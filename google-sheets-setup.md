# Google Sheets Setup Guide for YAK Lab Repository

## Overview
This guide will help you set up Google Sheets to manage your lab repository content. Students will only need to edit these sheets, and the website will automatically update.

## Step 1: Create Google Sheets

### 1.1 Protocols Sheet
Create a new Google Sheet called "YAK Lab - Protocols"

**Headers (Row 1):**
```
A1: Title | B1: Version | C1: Description | D1: Author | E1: Last Updated | F1: File Link
```

**Example Data (Row 2):**
```
A2: RNA Extraction Protocol | B2: v2.1 | C2: Standard protocol for RNA extraction from various sample types | D2: YAK | E2: 2024-12-01 | F2: https://drive.google.com/file/d/...
```

### 1.2 Data Repository Sheet
Create a new Google Sheet called "YAK Lab - Data Repository"

**Headers (Row 1):**
```
A1: Title | B1: Size | C1: Description | D1: Last Updated | E1: Downloads | F1: Download Link
```

**Example Data (Row 2):**
```
A2: RNA Structure Datasets | B2: 2.3 GB | C2: Compiled datasets of RNA structures for machine learning training | D2: 2024-12-01 | E2: 15 | F2: https://drive.google.com/file/d/...
```

### 1.3 Software & Code Sheet
Create a new Google Sheet called "YAK Lab - Software"

**Headers (Row 1):**
```
A1: Title | B1: Version | C1: Description | D1: Language | E1: Platform | F1: Repository Link
```

**Example Data (Row 2):**
```
A2: RNA Structure Predictor | B2: v1.2.0 | C2: Python package for predicting RNA secondary structure using machine learning | D2: Python 3.8+ | E2: GitHub | F2: https://github.com/yaklab/rna-predictor
```

### 1.4 Lab Resources Sheet
Create a new Google Sheet called "YAK Lab - Resources"

**Headers (Row 1):**
```
A1: Category | B1: Links
```

**Example Data (Row 2):**
```
A2: Lab Presentations | B2: https://drive.google.com/file/d/..., https://drive.google.com/file/d/...
```

## Step 2: Publish Sheets as JSON

### For each sheet:

1. **Open the Google Sheet**
2. **Go to File → Share → Publish to web**
3. **Choose settings:**
   - **Entire Document**
   - **Format: JSON**
4. **Click "Publish"**
5. **Copy the URL** (it will look like: `https://docs.google.com/spreadsheets/d/e/.../pub?output=json`)

## Step 3: Update Website Configuration

### 3.1 Open the CMS Configuration
Open `js/cms-integration.js` and find the `SHEETS_CONFIG` section:

```javascript
const SHEETS_CONFIG = {
    protocols: 'YOUR_PROTOCOLS_SHEET_JSON_URL',
    data: 'YOUR_DATA_SHEET_JSON_URL',
    software: 'YOUR_SOFTWARE_SHEET_JSON_URL',
    resources: 'YOUR_RESOURCES_SHEET_JSON_URL'
};
```

### 3.2 Replace URLs
Replace each placeholder with your actual JSON URLs:

```javascript
const SHEETS_CONFIG = {
    protocols: 'https://docs.google.com/spreadsheets/d/e/YOUR_PROTOCOLS_ID/pub?output=json',
    data: 'https://docs.google.com/spreadsheets/d/e/YOUR_DATA_ID/pub?output=json',
    software: 'https://docs.google.com/spreadsheets/d/e/YOUR_SOFTWARE_ID/pub?output=json',
    resources: 'https://docs.google.com/spreadsheets/d/e/YOUR_RESOURCES_ID/pub?output=json'
};
```

## Step 4: Share Sheets with Lab Members

### 4.1 Set Permissions
For each sheet:
1. **Click "Share" button**
2. **Add lab member emails**
3. **Set permission to "Editor"**
4. **Send invitation**

### 4.2 Create a Master Document
Create a Google Doc with links to all sheets:
- YAK Lab - Protocols
- YAK Lab - Data Repository  
- YAK Lab - Software
- YAK Lab - Resources

## Step 5: Student Training

### 5.1 Basic Instructions for Students

**To add a new protocol:**
1. Open "YAK Lab - Protocols" sheet
2. Add a new row at the bottom
3. Fill in all columns:
   - **Title**: Protocol name
   - **Version**: Version number (e.g., v1.0)
   - **Description**: Brief description
   - **Author**: Your name
   - **Last Updated**: Today's date
   - **File Link**: Google Drive link to the protocol file
4. Save - changes appear on website within 5 minutes

**To add new data:**
1. Open "YAK Lab - Data Repository" sheet
2. Add new row
3. Fill in columns:
   - **Title**: Dataset name
   - **Size**: File size (e.g., 2.3 GB)
   - **Description**: What the data contains
   - **Last Updated**: Today's date
   - **Downloads**: Start with 0
   - **Download Link**: Google Drive link to the data file

### 5.2 File Organization
**Google Drive Structure:**
```
YAK Lab Repository/
├── Protocols/
│   ├── RNA Extraction Protocol.pdf
│   ├── CryoEM Sample Preparation.pdf
│   └── Machine Learning Pipeline.pdf
├── Data/
│   ├── RNA Structure Datasets/
│   └── CryoEM Maps/
├── Software/
│   ├── RNA Structure Predictor/
│   └── CryoEM Analysis Tools/
└── Resources/
    ├── Presentations/
    ├── Papers/
    └── Manuals/
```

## Step 6: Testing

### 6.1 Test the Integration
1. **Add a test entry** to one of the sheets
2. **Wait 5 minutes** for auto-refresh
3. **Check the website** to see if it appears
4. **Use the "Refresh" button** to force immediate update

### 6.2 Troubleshooting
**If content doesn't appear:**
1. Check that the JSON URL is correct
2. Verify the sheet is published
3. Check browser console for errors
4. Ensure column headers match exactly

## Step 7: Advanced Features

### 7.1 Auto-Update Downloads Counter
You can add a simple script to automatically increment download counts when files are accessed.

### 7.2 File Upload Integration
Consider using Google Apps Script to allow direct file uploads to Google Drive.

### 7.3 Notifications
Set up email notifications when new content is added to sheets.

## Security Notes

### 7.1 Access Control
- Only share sheets with lab members
- Use Google Workspace for better control
- Regularly review access permissions

### 7.2 Backup Strategy
- Export sheets monthly as Excel files
- Keep backup copies in lab Google Drive
- Document any custom formulas or formatting

## Maintenance

### 7.1 Regular Tasks
- **Weekly**: Check for broken links
- **Monthly**: Review and clean up old entries
- **Quarterly**: Update student access permissions

### 7.2 Performance
- Keep sheets under 1000 rows for best performance
- Archive old content to separate sheets
- Use filters to organize content

## Support

If students have issues:
1. **Check the sheet permissions**
2. **Verify the JSON URL is working**
3. **Clear browser cache**
4. **Contact the lab PI for technical support**

---

**That's it!** Your lab now has a simple, effective content management system that requires no coding knowledge from students. 