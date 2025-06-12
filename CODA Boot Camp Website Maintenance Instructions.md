# CODA Boot Camp Website Maintenance Instructions

## Website Overview

The CODA Boot Camp website is a static HTML website that includes:
- A home page (index.html)
- Module 1 with complete content (module1.html)
- Placeholder pages for Modules 2-5 (module2.html, module3.html, module4.html, module5.html)
- CSS styling (static/css/coda-style.css)
- Assets including the CODA logo (assets/coda-logo.jpg)

## Permanent URL

The website is deployed at: [https://uuwlpqmy.manus.space](https://uuwlpqmy.manus.space)

## How to Update the Website

### Updating Existing Content

1. Download the website files from the deployed URL or from the source files provided.
2. Make your changes to the HTML files using a text editor.
3. Test your changes locally by opening the HTML files in a web browser.
4. Once you're satisfied with your changes, you can redeploy the website using the same deployment method.

### Adding New Content to Module 1

1. Open the `module1.html` file in a text editor.
2. Locate the section you want to update within the `<article class="module-body">` tags.
3. Make your changes following the existing HTML structure and formatting.
4. Save the file and test it locally before redeploying.

### Adding Content to Other Modules

1. Open the module file you want to update (e.g., `module2.html`) in a text editor.
2. Replace the placeholder content with your actual module content.
3. Follow the same HTML structure as in `module1.html` to maintain consistency.
4. Save the file and test it locally before redeploying.

### Updating Styles

1. Open the `static/css/coda-style.css` file in a text editor.
2. Make your style changes.
3. Test the changes locally to ensure they look as expected.
4. Save the file and redeploy the website.

### Adding New Pages

1. Create a new HTML file in the root directory.
2. Copy the basic structure from an existing page to maintain consistency.
3. Update the content as needed.
4. Add links to the new page from other pages as appropriate.
5. Test the new page locally before redeploying.

## Best Practices

1. **Backup First**: Always make a backup of the website files before making changes.
2. **Test Locally**: Always test your changes locally before redeploying.
3. **Maintain Consistency**: Follow the existing design patterns and HTML structure.
4. **Optimize Images**: Compress images before adding them to the website to ensure fast loading times.
5. **Check Links**: Ensure all internal and external links work correctly.
6. **Validate HTML**: Use an HTML validator to check your HTML for errors.

## Redeployment Instructions

To redeploy the website after making changes:

1. Prepare your updated files in a directory.
2. Use a static website hosting service like Vercel, Netlify, or GitHub Pages.
3. Follow the service's instructions for deploying a static website.
4. After deployment, thoroughly test the website to ensure all changes are working as expected.

## Contact Information

If you need assistance with maintaining or updating the website, please contact the original developer or your technical support team.

---

*Last updated: June 12, 2025*

