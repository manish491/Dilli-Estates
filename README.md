# Dilli Estates website

A responsive, animated real-estate showcase for Dilli Estates. Built with plain HTML, CSS, and JavaScript so it can be previewed locally without installing packages or running a build step.

## Run locally
1. Extract `dilli-estates-website.zip`.
2. Open `index.html` in a modern browser. For the most reliable local asset loading, you can also serve the folder with VS Code Live Server or Python's built-in server:
   - `python -m http.server 8000`
   - Visit `http://localhost:8000`

## Features
- Supplied Dilli Estates logo and branded homepage hero banner.
- Responsive navigation and animated mobile menu.
- Buy, rent, and commercial search modes, locality/type/budget filtering, sorting, and load-more behaviour.
- Property detail modal, image gallery-style detail view, favourites saved in browser local storage, and WhatsApp enquiry links.
- Sell/contact enquiry form that validates inputs and prepares a WhatsApp message for the user to review.
- Expanded six-image visual gallery with hover zooms and image links.
- Cinematic property video panel with native controls, poster fallback, and pause-when-offscreen behaviour. Video requires an internet connection.
- Animated gold logo treatment, orbiting loader ring, shimmer, animated wordmark, and additional scroll/hover motion.
- Scroll reveals, loader, card hover animations, reduced-motion support, and responsive layouts.
- SEO metadata, favicon, accessible labels, and phone/email/WhatsApp links.

## Important notes
- Property cards and prices are illustrative sample data, not verified live listings or offers. Edit the `properties` array near the top of `script.js` when you have real listings.
- Contact forms do not submit to a server. They open WhatsApp with a prefilled message for the visitor to review and send. A CRM, database, email service, or admin dashboard would require a backend integration.
- The property photography cards use remote Unsplash image URLs and therefore require an internet connection. The supplied logo and hero banner are stored locally in `assets/images/`.
- The brand phone and email are set in `script.js` and `index.html`: +91 8076486391 and manishpandey.user09@gmail.com.
- Before launch, add the final domain to canonical metadata/sitemap if desired, verify listing data, and review legal/privacy copy for your actual business.

## Deployment
Upload the extracted project folder to a GitHub repository. It is a static site and can be deployed directly on Vercel or Netlify without a build command. Set the project root to the folder containing `index.html`; leave build command blank and use `.` as the output directory if the host asks for one.
