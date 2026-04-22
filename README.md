# Portfolio Replica

<<<<<<< HEAD
A responsive personal portfolio webpage built with HTML, CSS, and JavaScript. The project presents a developer profile with a hero section, technology experience, project cards, work experience, contact information, and simple interactive animations.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [How to Use](#how-to-use)
- [Customization Guide](#customization-guide)
- [Responsive Design](#responsive-design)
- [JavaScript Behavior](#javascript-behavior)
- [Assets](#assets)
- [Deployment](#deployment)
- [Credits](#credits)

## Overview

This project is a static portfolio website designed to showcase a software developer's profile, skills, projects, work history, and contact details. It uses a clean dark theme, highlighted accent colors, responsive layouts, and scroll-based reveal animations to create a modern portfolio experience.

The site includes:

- A sticky navigation bar with smooth section links.
- A hero introduction with avatar, headline, summary, and action buttons.
- A technology section showing skill logos.
- A projects section with clickable project cards.
- An experience section listing previous roles.
- A contact footer with email and social media links.

## Features

- Responsive layout for desktop, tablet, and mobile screens.
- Smooth scrolling navigation between page sections.
- Scroll reveal animations using the `IntersectionObserver` API.
- Click animation on the avatar image.
- Project cards with hover effects and external links.
- Download button for the CV image.
- Accessible HTML structure with semantic sections and alt text.
- Organized asset folder for images and SVG logos.

## Project Structure

```text
.
|-- index.html
|-- style.css
|-- script.js
|-- README.md
`-- public
    |-- 1st Project.png
    |-- 2nd Project.png
    |-- Logos.svg
    |-- apple-logo.svg
    |-- avatar.svg
    |-- cv.png
    |-- google-logo.svg
    |-- meta-logo.svg
    |-- profile.png
    `-- signature.svg
```

## Technologies Used

- HTML5 for the page structure.
- CSS3 for styling, layout, responsiveness, and animations.
- JavaScript for scroll reveal effects and avatar interaction.
- SVG and PNG assets for logos, images, avatar, CV, and branding.

## Getting Started

This is a static website, so it does not require Node.js, npm, or a backend server.

### Requirements

- A modern web browser such as Chrome, Edge, Firefox, or Safari.
- A code editor such as Visual Studio Code.

### Run Locally

1. Download or clone this project.
2. Open the project folder.
3. Open `index.html` directly in your browser.

You can also use the Live Server extension in Visual Studio Code for a smoother development experience:

1. Install the "Live Server" extension in VS Code.
2. Right-click `index.html`.
3. Select "Open with Live Server".

## How to Use

The main content is managed inside `index.html`.

- Update the hero title and description in the `#home` section.
- Replace project images and links in the `#projects` section.
- Edit job titles, dates, logos, and descriptions in the `#experience` section.
- Change the email and social links in the `#contact` footer.
- Update colors, spacing, layout, and responsiveness in `style.css`.
- Modify animations and interactive behavior in `script.js`.

## Customization Guide

### Change Personal Information

Open `index.html` and edit the text inside the hero section:

```html
<h1>
  I do code and<br />
  make content <span>about it!</span>
</h1>
```

You can also update the description paragraph, contact email, and social media links in the same file.

### Replace Images

All images are stored in the `public` folder. To replace an image:

1. Add the new image to the `public` folder.
2. Update the matching `src` value in `index.html`.

Example:

```html
<img class="avatar" src="public/avatar.svg" alt="Developer avatar" />
```

### Update Theme Colors

The main color variables are defined at the top of `style.css`:

```css
:root {
  --page: #0f0f0f;
  --card: #2b2b2b;
  --text: #f4f4f4;
  --orange: #ff6b4a;
  --blue: #2d9cff;
}
```

Changing these values will update the overall visual theme of the website.

### Add More Projects

To add another project, copy one of the existing `.project-card` blocks in `index.html` and update:

- The image path.
- The image alt text.
- The project link.
- The project title.

### Add More Experience Entries

To add another job entry, copy an existing `.job` article in the `#experience` section and update:

- Company logo.
- Job title.
- Date range.
- Job description.

## Responsive Design

The website includes responsive breakpoints in `style.css` for different screen sizes:

- `1024px` and below: Adjusts section widths and padding.
- `820px` and below: Changes project cards from two columns to one column.
- `640px` and below: Stacks the navigation layout for smaller screens.
- `520px` and below: Makes buttons full-width and reduces text sizes.
- `380px` and below: Further adjusts typography for very small screens.

These media queries help the portfolio remain readable and usable on phones, tablets, laptops, and desktop monitors.

## JavaScript Behavior

The `script.js` file handles two main interactions.

### Scroll Reveal Animation

Selected page elements are given a `reveal` class. The browser watches them using `IntersectionObserver`, and when an element enters the viewport, the `is-visible` class is added.

This creates a smooth fade-and-slide effect as users scroll through the page.

### Avatar Click Animation

When the avatar is clicked, JavaScript restarts the `avatar-pop` animation by removing and re-adding the animation class.

This gives the avatar a playful pop effect without requiring any external library.

## Assets

The `public` folder contains all visual files used by the website:

- `signature.svg`: Signature logo in the navigation bar.
- `profile.png`: Favicon image.
- `avatar.svg`: Hero avatar image.
- `Logos.svg`: Technology logos.
- `1st Project.png`: First project preview image.
- `2nd Project.png`: Second project preview image.
- `cv.png`: Downloadable CV image.
- `google-logo.svg`: Google logo for the experience section.
- `apple-logo.svg`: Apple logo for the experience section.
- `meta-logo.svg`: Meta logo for the experience section.

Keep asset paths consistent when replacing or renaming files, because `index.html` references these exact filenames.

## Deployment

Because this is a static website, it can be hosted on many free platforms.

### GitHub Pages

1. Push the project to a GitHub repository.
2. Open the repository settings.
3. Go to "Pages".
4. Select the main branch and root folder.
5. Save the settings and wait for GitHub to publish the site.

### Netlify

1. Sign in to Netlify.
2. Choose "Add new site".
3. Import the project repository.
4. Leave the build command empty.
5. Set the publish directory to the project root.
6. Deploy the site.

### Vercel

1. Sign in to Vercel.
2. Import the project repository.
3. Keep the default static project settings.
4. Deploy the site.

## Credits

This portfolio was created as a front-end web project using plain HTML, CSS, and JavaScript. It is suitable for learning responsive design, page structure, styling, and basic browser-based interactivity.
=======
This is a replica of a developer portfolio website, built using HTML, CSS, and basic JavaScript.

## Features
- Fully responsive design using CSS Grid and Flexbox
- Semantic HTML5 structure
- Smooth scrolling navigation
- Dark themed modern UI
- Project and Experience sections

## Getting Started

To view the project locally, simply open `index.html` in your web browser. No complex build tools or servers are required.

## Technologies Used
- HTML5
- CSS3
- JavaScript


>>>>>>> 8c47fcb5d13bb2f83b17b71fc8ec385e4ae931db
