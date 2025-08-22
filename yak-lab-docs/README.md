# YAK Lab Wiki - Collaborative Knowledge Base

## 🎉 **Your Lab Wiki is Ready for Collaboration!**

This wiki serves as the central knowledge repository for the Yousuf A. Khan (YAK) Lab at Stanford University. It contains protocols, data, software, and resources that can be easily edited and maintained by all lab members.

## 🚀 **Quick Start for Lab Members**

### **Want to Edit Something? (5 minutes)**
1. **Open the wiki**: Click "Lab Wiki" on your lab website
2. **Find a page** you want to edit
3. **Click the edit button** (pencil icon ✏️)
4. **Make your changes** and save!

### **Want to Add a New Protocol? (10 minutes)**
1. **Use the template**: Copy from `docs/protocols/_template.md`
2. **Create new file**: Go to `docs/protocols/` folder
3. **Fill in your protocol** using the template
4. **Save it** with a descriptive name

### **Need Help?**
- **Quick Guide**: `QUICK_START_EDITING.md` (5-minute tutorial)
- **Full Guide**: `COLLABORATIVE_EDITING.md` (comprehensive instructions)
- **Template**: `docs/protocols/_template.md` (protocol template)

## 📁 **Wiki Structure**

```
yak-lab-docs/
├── docs/                           # Your documentation
│   ├── index.md                    # Home page
│   ├── protocols/                  # Experimental procedures
│   │   ├── _template.md           # Protocol template
│   │   ├── rna-extraction.md      # RNA extraction protocol
│   │   └── cryoem-prep.md         # CryoEM preparation
│   ├── data/                      # Data repository
│   ├── software/                  # Code and tools
│   └── resources/                 # Lab resources
├── site/                          # Built website (auto-generated)
├── COLLABORATIVE_EDITING.md       # Full editing guide
├── QUICK_START_EDITING.md         # 5-minute tutorial
└── mkdocs.yml                     # Configuration
```

## 🔧 **How to Use**

### **For Lab Members (Easy Editing)**
- **Web-based editing**: Edit directly in your browser
- **No technical knowledge required**: Just click and type
- **Automatic version control**: All changes are tracked
- **Collaborative**: Multiple people can edit simultaneously

### **For Lab PI (Advanced Control)**
- **Local development**: `mkdocs serve` for live preview
- **Configuration**: Edit `mkdocs.yml` for site structure
- **Deployment**: `mkdocs gh-deploy` for updates
- **Customization**: Modify themes and plugins

## 🌐 **Accessing Your Wiki**

### **From Your Lab Website**
1. Navigate to any page on your lab website
2. Click **"Lab Wiki"** in the top navigation
3. Click **"Open Wiki"** to access the full documentation

### **Direct Access**
- **Built site**: `yak-lab-docs/site/index.html`
- **Source files**: `yak-lab-docs/docs/`
- **Development server**: Run `mkdocs serve` and visit `http://127.0.0.1:8000`

## 📝 **Content Guidelines**

### **What to Include**
- ✅ **Step-by-step protocols** with exact measurements
- ✅ **Troubleshooting guides** for common problems
- ✅ **Safety information** and required PPE
- ✅ **Quality control** procedures and expected results
- ✅ **References** to original papers and resources

### **What to Avoid**
- ❌ **Vague instructions** ("add some buffer")
- ❌ **Missing measurements** (be specific!)
- ❌ **Outdated information** (update regularly)
- ❌ **Personal opinions** (stick to facts and procedures)

## 🔄 **Maintenance Workflow**

### **Daily**
- **Edit protocols** as you use them
- **Add notes** and improvements
- **Fix typos** and errors

### **Weekly**
- **Review recent changes** as a team
- **Verify accuracy** of new content
- **Plan upcoming additions**

### **Monthly**
- **Archive old protocols** no longer used
- **Update contact information** if needed
- **Backup important data**

## 🎯 **Getting Your Team Started**

### **Week 1: Introduction**
- **Show everyone** how to access the wiki
- **Demonstrate** the GitHub web editor
- **Practice** editing a simple file together

### **Week 2: Content Creation**
- **Have each person** add one protocol
- **Use the template** for consistency
- **Practice** markdown formatting

### **Week 3: Collaboration**
- **Work on documents** together
- **Practice commenting** and suggesting changes
- **Learn about** version control basics

### **Week 4: Maintenance**
- **Establish update** schedules
- **Assign responsibilities** for different sections
- **Create quality control** procedures

## 🚨 **Troubleshooting**

### **Common Issues**

#### **"I can't edit the wiki"**
- **Solution**: Make sure you're logged into GitHub
- **Alternative**: Ask your lab PI to add you as a collaborator

#### **"My changes aren't showing up"**
- **Solution**: Wait a few minutes for the site to rebuild
- **Alternative**: Ask your lab PI to run `mkdocs build`

#### **"I broke something"**
- **Don't panic!** All changes are tracked and can be undone
- **Solution**: Check the file history on GitHub
- **Help**: Contact your lab PI for assistance

### **Getting Help**
- **Check the guides**: Start with `QUICK_START_EDITING.md`
- **Ask your lab PI**: For technical support
- **GitHub help**: For platform-specific questions

## 🎉 **You're All Set!**

Your lab wiki is now a **powerful, collaborative tool** that will:
- ✅ **Maintain consistency** in lab procedures
- ✅ **Share knowledge** among team members
- ✅ **Preserve protocols** for future lab members
- ✅ **Improve research quality** through better documentation
- ✅ **Save time** by avoiding repeated protocol development

### **Next Steps**
1. **Share this guide** with your lab team
2. **Set up a training session** to walk through the process
3. **Start adding content** using any of the methods above
4. **Establish regular update schedules**

---

**Remember**: The goal is to make documentation **easy and collaborative**, not perfect from the start. Start simple and improve over time!

**Need help?** Check the `COLLABORATIVE_EDITING.md` file for detailed instructions, or ask your lab PI for support.

---

*Last updated: {{ git_revision_date_localized }}* 