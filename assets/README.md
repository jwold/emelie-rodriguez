# Assets Folder

This folder contains assets referenced by the website.

## Required Files

### 1. Emelie-Rodriguez-Resume.pdf
- **Purpose**: Downloadable PDF resume
- **Referenced by**: Download buttons in hero section and navigation
- **Action needed**: Drop your PDF resume into this folder with the exact filename `Emelie-Rodriguez-Resume.pdf`

### 2. og-image.jpg (Important for sharing!)
- **Purpose**: Social media preview image for iMessage, Facebook, Twitter, LinkedIn
- **Referenced by**: Open Graph meta tags in `<head>`
- **Recommended size**: 1200px × 630px (this is the standard OG image size)
- **Action needed**: Create an image with your name, title, and optionally a headshot or professional graphic
- **Tips**:
  - Use Figma, Canva, or any design tool
  - Keep important content in the center (some platforms crop edges)
  - Use readable fonts and good contrast
  - Example content: "Emelie Rodriguez, CPA" + tagline + contact info

### 3. headshot-placeholder.jpg (Optional)
- **Purpose**: Professional headshot image
- **Status**: Currently not used in the site, but you can add one if desired
- **Action needed**: If you want to add a headshot, place it here and add an `<img>` tag to the hero section in index.html

## Notes
- The PDF link will work as soon as you place a file at `assets/Emelie-Rodriguez-Resume.pdf`
- The `download` attribute on the link ensures it downloads rather than opening in browser
- **Without og-image.jpg, link previews will look plain** - this is the most important file for social sharing
- Make sure all filenames match exactly (case-sensitive)
