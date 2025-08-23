# Lab Website

A modern, responsive lab website template built with HTML, CSS, and JavaScript. This template is designed to be easily customizable and deployable to GitHub Pages.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design suitable for academic labs
- **Interactive Elements**: Smooth animations, mobile navigation, and interactive components
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Fast Loading**: Optimized CSS and JavaScript for performance
- **Accessible**: Follows web accessibility guidelines

## Project Structure

```
lab-website/
├── index.html          # Main homepage
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── main.js         # JavaScript functionality
├── images/             # Image assets (create this folder)
├── research.html       # Research page (to be created)
├── team.html          # Team page (to be created)
├── publications.html   # Publications page (to be created)
├── contact.html       # Contact page (to be created)
└── README.md          # This file
```

## Customization Guide

### 1. Basic Information
Replace all placeholder text in `index.html` with your lab's information:

- `[Lab Name]` → Your actual lab name
- `[research area]` → Your research focus
- `[Institution]` → Your university/institution
- `yousuf@stanford.edu` → Your contact email
- `[phone number]` → Your phone number
- `[building, room number]` → Your lab location

### 2. Colors and Branding
The website uses a blue color scheme (`#3498db`) by default. To change colors:

1. Open `css/style.css`
2. Find the color values (e.g., `#3498db`, `#2c3e50`)
3. Replace with your institution's brand colors

### 3. Content Sections

#### Hero Section
- Update the main title and subtitle
- Add your lab's mission statement
- Replace the placeholder image with an actual lab photo

#### Research Areas
- Update the three research area cards with your actual research topics
- Change the icons to match your research (FontAwesome icons available)
- Add detailed descriptions

#### News Section
- Replace with actual lab news and updates
- Add links to full articles or announcements
- Update dates and content regularly

#### Footer
- Add your actual contact information
- Update social media links
- Include your institution's branding

### 4. Adding Images
1. Create an `images/` folder
2. Add your lab photos, logos, and other images
3. Update image paths in the HTML files
4. Optimize images for web (compress to reduce file size)

### 5. Creating Additional Pages
Use the same structure as `index.html` for new pages:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Same head content as index.html -->
</head>
<body>
    <!-- Same navigation as index.html -->
    
    <!-- Page-specific content -->
    
    <!-- Same footer as index.html -->
</body>
</html>
```

## Local Development

1. **View the website locally**:
   - Simply open `index.html` in your web browser
   - Or use a local server for better development experience

2. **Using a local server** (recommended):
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (if you have it installed)
   npx serve .
   ```

3. **Testing responsive design**:
   - Use browser developer tools
   - Test on actual mobile devices
   - Check different screen sizes

## Deployment to GitHub Pages

1. **Create a GitHub repository**:
   - Name it `yourusername.github.io` or `your-lab-name.github.io`
   - Make it public

2. **Upload your files**:
   ```bash
   git init
   git add .
   git commit -m "Initial lab website"
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Save

4. **Custom domain setup** (if you have one):
   - Add your domain in GitHub Pages settings
   - Configure DNS records to point to GitHub

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Optimize images**:
   - Use WebP format when possible
   - Compress images to reduce file size
   - Use appropriate image dimensions

2. **Minimize HTTP requests**:
   - Combine CSS files if adding more
   - Combine JavaScript files if adding more
   - Use CSS sprites for small icons

3. **Enable caching**:
   - Set appropriate cache headers
   - Use version numbers for CSS/JS files when updating

## Accessibility

The website includes:
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- Screen reader compatibility
- High contrast ratios

## Future Enhancements

Consider adding:
- Blog/news section with CMS
- Publication database
- Lab calendar integration
- Contact forms with backend
- Analytics tracking
- Multi-language support
- Dark mode toggle

## Support

For questions or issues:
1. Check the browser console for JavaScript errors
2. Validate HTML and CSS using online validators
3. Test on different browsers and devices
4. Check GitHub Pages documentation for deployment issues

## License

This template is free to use and modify for your lab website. Please credit the original design if you share or distribute it.

---

**Happy coding!** 🚀 