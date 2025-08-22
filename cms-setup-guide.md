# Lab Repository Content Management Guide

## Overview
This guide provides multiple options for managing lab repository content without requiring students to edit code directly.

## Option 1: Google Sheets + Web App (Easiest)

### Setup Process:
1. **Create Google Sheets for each content type:**
   - `Protocols` sheet
   - `Data Repository` sheet  
   - `Software & Code` sheet
   - `Lab Resources` sheet

2. **Sheet Structure Example (Protocols):**
   ```
   | Title | Version | Description | Author | Last Updated | File Link |
   |-------|---------|-------------|--------|--------------|-----------|
   | RNA Extraction | v2.1 | Standard protocol... | YAK | 2024-12-01 | https://drive.google.com/... |
   ```

3. **Publish sheets as JSON:**
   - File → Share → Publish to web
   - Choose "Entire Document" and "JSON" format
   - Copy the published URL

4. **Update repository.js to fetch from Google Sheets:**
   ```javascript
   // Fetch protocols from Google Sheets
   async function loadProtocols() {
       const response = await fetch('YOUR_GOOGLE_SHEETS_JSON_URL');
       const data = await response.json();
       // Update the DOM with the data
   }
   ```

### Benefits:
- ✅ Students only need to edit Google Sheets
- ✅ Real-time updates
- ✅ No coding required
- ✅ Version history built-in
- ✅ Easy to backup

---

## Option 2: Notion Database (Modern & Powerful)

### Setup Process:
1. **Create Notion databases for each content type**
2. **Set up Notion API integration**
3. **Create a simple admin interface**

### Benefits:
- ✅ Beautiful interface
- ✅ Rich text formatting
- ✅ File attachments
- ✅ Comments and collaboration
- ✅ API access

---

## Option 3: Airtable (Professional & Flexible)

### Setup Process:
1. **Create Airtable bases for content**
2. **Set up Airtable API**
3. **Build admin interface**

### Benefits:
- ✅ Professional database features
- ✅ Advanced filtering and views
- ✅ API with good documentation
- ✅ User permissions

---

## Option 4: Simple Admin Panel (Custom Solution)

### Features:
- Web-based form to add/edit content
- File upload functionality
- Simple authentication
- JSON file storage

### Implementation:
```html
<!-- Simple admin form -->
<form id="add-protocol-form">
    <input type="text" name="title" placeholder="Protocol Title">
    <input type="text" name="version" placeholder="Version">
    <textarea name="description" placeholder="Description"></textarea>
    <input type="file" name="protocol-file">
    <button type="submit">Add Protocol</button>
</form>
```

---

## Option 5: GitHub Issues + Actions (Developer-Friendly)

### Setup Process:
1. **Students create GitHub issues with specific templates**
2. **GitHub Actions automatically process issues**
3. **Content gets updated automatically**

### Benefits:
- ✅ Version control
- ✅ Discussion threads
- ✅ File attachments
- ✅ Automated processing

---

## Recommended Implementation: Google Sheets

Here's how to implement the Google Sheets approach:

### Step 1: Create the Google Sheets

**Protocols Sheet:**
```
A1: Title | B1: Version | C1: Description | D1: Author | E1: Last Updated | F1: File Link
A2: RNA Extraction | B2: v2.1 | C2: Standard protocol for RNA extraction... | D2: YAK | E2: 2024-12-01 | F2: https://drive.google.com/...
```

**Data Repository Sheet:**
```
A1: Title | B1: Size | C1: Description | D1: Last Updated | E1: Downloads | F1: Download Link
A2: RNA Structure Datasets | B2: 2.3 GB | C2: Compiled datasets... | D2: 2024-12-01 | E2: 15 | F2: https://drive.google.com/...
```

### Step 2: Publish as JSON

1. Go to File → Share → Publish to web
2. Choose "Entire Document"
3. Format: JSON
4. Copy the URL (looks like: `https://docs.google.com/spreadsheets/d/e/.../pub?output=json`)

### Step 3: Update the Website Code

The website will automatically fetch and display the latest content from Google Sheets.

---

## Student Training Guide

### For Google Sheets Approach:
1. **Access the Google Sheet** (shared link)
2. **Add new row** for new content
3. **Fill in all required fields**
4. **Save** - changes appear on website within minutes

### For Notion Approach:
1. **Access the Notion database**
2. **Click "New" to add entry**
3. **Fill in the form**
4. **Save** - changes sync automatically

---

## Security Considerations

### For Google Sheets:
- ✅ Only share with lab members
- ✅ Use Google Workspace for better control
- ✅ Regular backup of sheets

### For Notion/Airtable:
- ✅ Set up proper user permissions
- ✅ Use API keys with limited access
- ✅ Regular data exports

---

## Implementation Timeline

1. **Week 1**: Set up Google Sheets structure
2. **Week 2**: Update website code to fetch from sheets
3. **Week 3**: Train students on the system
4. **Week 4**: Test and refine

---

## Cost Comparison

| Option | Setup Cost | Monthly Cost | Ease of Use |
|--------|------------|--------------|-------------|
| Google Sheets | Free | Free | ⭐⭐⭐⭐⭐ |
| Notion | Free | $8/user/month | ⭐⭐⭐⭐ |
| Airtable | Free | $12/user/month | ⭐⭐⭐⭐ |
| Custom Admin | $500-2000 | $10-50/month hosting | ⭐⭐⭐ |
| GitHub Issues | Free | Free | ⭐⭐ |

---

## Recommendation

**Start with Google Sheets** because:
- Zero cost
- Students already know how to use it
- Real-time updates
- Easy to implement
- Can upgrade to other options later

Would you like me to implement the Google Sheets integration for your repository? 