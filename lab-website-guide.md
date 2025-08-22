# Lab Website Development Guide

## Overview
This guide walks you through creating a professional lab website, hosting it on GitHub Pages, and connecting it to your Squarespace domain.

## Why This Approach?
- **Free hosting**: GitHub Pages provides reliable, free hosting
- **Full control**: Custom HTML/CSS/JavaScript without Squarespace limitations
- **Version control**: Track changes and collaborate using Git
- **Professional**: Clean, fast-loading website
- **SEO-friendly**: Good for academic visibility

## Prerequisites
- GitHub account
- Squarespace domain
- Basic knowledge of HTML/CSS (or willingness to learn)
- Text editor (VS Code, Sublime Text, etc.)

## Step 1: Planning Your Lab Website

### Essential Pages to Include
1. **Home Page** - Lab overview, mission, key research areas
2. **Research** - Current projects, publications, methodology
3. **Team** - Lab members, PI, students, collaborators
4. **Publications** - Papers, presentations, datasets
5. **News/Updates** - Recent achievements, events, announcements
6. **Contact** - Location, email, social media, join the lab
7. **Resources** - Code, data, protocols (if applicable)

### Design Considerations
- **Academic aesthetic**: Clean, professional, easy to navigate
- **Mobile-responsive**: Must work on phones and tablets
- **Fast loading**: Optimize images and code
- **Accessible**: Follow WCAG guidelines
- **Brand consistency**: Use your institution's colors/fonts

## Step 2: Choose Your Technology Stack

### Option A: Static Site (Recommended for beginners)
- **HTML/CSS/JavaScript** - Pure static files
- **Jekyll** - GitHub Pages' built-in static site generator
- **Hugo** - Fast static site generator
- **Bootstrap/Tailwind** - CSS frameworks for responsive design

### Option B: Modern Framework
- **React/Next.js** - For more interactive features
- **Vue.js/Nuxt** - Alternative to React
- **Astro** - Modern static site generator

## Step 3: Set Up Development Environment

### 1. Install Required Tools
```bash
# Install Git (if not already installed)
# macOS: brew install git
# Windows: Download from git-scm.com

# Install Node.js (for modern frameworks)
# Download from nodejs.org

# Install a text editor
# VS Code: code.visualstudio.com
```

### 2. Create GitHub Repository
1. Go to [GitHub.com](https://github.com)
2. Click "New repository"
3. Name it: `your-lab-name.github.io` (replace with your lab name)
4. Make it public
5. Initialize with README

### 3. Clone Repository Locally
```bash
git clone https://github.com/yourusername/your-lab-name.github.io.git
cd your-lab-name.github.io
```

## Step 4: Build Your Website

### Option A: Using Jekyll (GitHub Pages Native)
1. **Install Jekyll**:
   ```bash
   gem install jekyll bundler
   ```

2. **Create Jekyll site**:
   ```bash
   jekyll new .
   ```

3. **Customize**:
   - Edit `_config.yml` for site settings
   - Modify `index.html` for homepage
   - Add pages in root directory
   - Style with CSS in `assets/css/`

### Option B: Pure HTML/CSS
1. **Create basic structure**:
   ```
   your-lab-name.github.io/
   ├── index.html
   ├── css/
   │   └── style.css
   ├── js/
   │   └── main.js
   ├── images/
   ├── research.html
   ├── team.html
   ├── publications.html
   └── contact.html
   ```

2. **Start with a template**:
   - Use Bootstrap templates
   - Modify academic/research templates
   - Create custom design

### Option C: Modern Framework (Next.js Example)
1. **Create Next.js project**:
   ```bash
   npx create-next-app@latest lab-website --typescript --tailwind --eslint
   cd lab-website
   ```

2. **Build pages** in `pages/` directory
3. **Style with Tailwind CSS**

## Step 5: Content Development

### Homepage Structure
```html
<!-- Example homepage structure -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Lab Name - Research Institution</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header>
        <nav>
            <div class="logo">Your Lab Name</div>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="research.html">Research</a></li>
                <li><a href="team.html">Team</a></li>
                <li><a href="publications.html">Publications</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section class="hero">
            <h1>Welcome to [Lab Name]</h1>
            <p>Research focus and mission statement</p>
        </section>
        
        <section class="research-areas">
            <h2>Research Areas</h2>
            <!-- Research highlights -->
        </section>
        
        <section class="news">
            <h2>Latest News</h2>
            <!-- Recent updates -->
        </section>
    </main>
    
    <footer>
        <!-- Contact info, social links -->
    </footer>
</body>
</html>
```

### Key Content Elements
- **Lab description**: Clear, jargon-free explanation
- **Research highlights**: Visual representations of key projects
- **Team photos**: Professional headshots with brief bios
- **Publication list**: Organized by year/topic
- **Contact information**: Multiple ways to reach the lab

## Step 6: Testing and Optimization

### Local Testing
1. **Test locally**:
   ```bash
   # For Jekyll
   bundle exec jekyll serve
   
   # For static files
   # Open index.html in browser
   
   # For Next.js
   npm run dev
   ```

2. **Cross-browser testing**: Chrome, Firefox, Safari, Edge
3. **Mobile testing**: Test on actual devices
4. **Performance testing**: Use Google PageSpeed Insights

### Optimization
- **Compress images**: Use WebP format, optimize file sizes
- **Minify CSS/JS**: Reduce file sizes
- **Enable caching**: Set appropriate cache headers
- **Use CDN**: For faster global loading

## Step 7: Deploy to GitHub Pages

### 1. Push Code to GitHub
```bash
git add .
git commit -m "Initial lab website"
git push origin main
```

### 2. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"

### 3. Wait for Deployment
- GitHub will build and deploy your site
- Usually takes 2-5 minutes
- Your site will be available at: `https://yourusername.github.io/your-lab-name`

## Step 8: Connect Squarespace Domain

### 1. Get GitHub Pages IP Address
- Your site will be served from GitHub's servers
- You'll need to point your domain to GitHub's IP addresses

### 2. Configure Squarespace Domain
1. Log into your Squarespace account
2. Go to "Settings" → "Domains"
3. Select your domain
4. Go to "DNS Settings" or "Advanced DNS"
5. Add these records:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   
   Type: A
   Name: @
   Value: 185.199.109.153
   
   Type: A
   Name: @
   Value: 185.199.110.153
   
   Type: A
   Name: @
   Value: 185.199.111.153
   
   Type: CNAME
   Name: www
   Value: yourusername.github.io
   ```

### 3. Update GitHub Repository Settings
1. Go to your GitHub repository
2. Settings → Pages
3. Under "Custom domain", enter your domain
4. Save
5. Check "Enforce HTTPS" (recommended)

### 4. Wait for DNS Propagation
- Can take 24-48 hours
- Test by visiting your domain

## Step 9: Maintenance and Updates

### Regular Updates
- **Content updates**: New publications, team changes, news
- **Technical updates**: Security patches, performance improvements
- **Design updates**: Keep up with modern web standards

### Workflow
```bash
# Make changes locally
git add .
git commit -m "Update lab news"
git push origin main
# GitHub Pages automatically rebuilds
```

## Step 10: Advanced Features (Optional)

### Analytics
- **Google Analytics**: Track visitor behavior
- **Google Search Console**: Monitor search performance

### Interactive Elements
- **Contact forms**: Use services like Formspree or Netlify Forms
- **Publication search**: JavaScript-based filtering
- **Lab calendar**: Integration with Google Calendar
- **Social media feeds**: Display latest posts

### SEO Optimization
- **Meta tags**: Proper titles, descriptions
- **Structured data**: Help search engines understand content
- **Sitemap**: XML sitemap for better indexing
- **Robots.txt**: Control search engine crawling

## Troubleshooting

### Common Issues
1. **Site not loading**: Check DNS settings, wait for propagation
2. **Styling issues**: Verify CSS file paths
3. **Images not showing**: Check file paths and formats
4. **Mobile problems**: Test responsive design

### Resources
- [GitHub Pages Documentation](https://pages.github.com/)
- [Jekyll Documentation](https://jekyllrb.com/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)

## Timeline Estimate
- **Planning**: 1-2 days
- **Development**: 1-2 weeks (depending on complexity)
- **Testing**: 2-3 days
- **Deployment**: 1 day
- **DNS propagation**: 1-2 days

## Next Steps
1. Choose your technology stack
2. Set up your GitHub repository
3. Start with a simple homepage
4. Gradually add more pages and features
5. Deploy and connect your domain

This approach gives you a professional, maintainable lab website that you control completely while leveraging free, reliable hosting! 