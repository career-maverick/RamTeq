# RamTeq Landing Site

This repository contains the source code for the RamTeq gaming company landing page.

## Features

*   **Home Page:** Welcomes visitors and displays a "Coming Soon" banner.
*   **About Page:** Information about the founder (Chiranjeevi Ramamurthy) with placeholder links for social media.
*   **Contact Page:** A functional contact form that submits data to a Google Sheet and sends an email notification via Google Apps Script.
*   **Responsive Design:** Basic styling for usability on different screen sizes.
*   **Deployment Ready:** Configured for easy deployment to GitHub Pages.

## Tech Stack

*   **Frontend:** React, Vite, JavaScript, CSS
*   **Routing:** React Router DOM
*   **Contact Form Backend:** Google Apps Script (integrates with Google Sheets and Gmail)
*   **Deployment:** GitHub Pages

## Setup and Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd RamTeq-LandingSite
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```

## Running Locally

To start the development server:

```bash
npm run dev
```

This will usually open the site automatically in your browser at `http://localhost:5173` (the port might vary).

## Building for Production

To create a production-ready build in the `dist` folder:

```bash
npm run build
```

## Deployment

This project is configured for deployment to GitHub Pages.

1.  **Google Apps Script Setup:**
    *   You **must** create and deploy the Google Apps Script as described in the setup guide (or comments within the code).
    *   Copy the **Web app URL** generated after deploying the script.
    *   Paste this URL into `src/pages/ContactPage.jsx`, replacing the `YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL` placeholder.
    *   Commit and push this change.

2.  **GitHub Repository Setup:**
    *   Ensure your code is pushed to a GitHub repository.
    *   In your repository settings (`Settings` > `Pages`), configure the deployment source to be `Deploy from a branch` and select the `gh-pages` branch with the `/ (root)` folder.

3.  **Run the Deploy Script:**
    ```bash
    npm run deploy
    ```
    This command first runs `npm run build` and then pushes the contents of the `dist` folder to the `gh-pages` branch on GitHub.

4.  **Accessing the Site:**
    *   Your site should become available shortly at `https://<your-github-username>.github.io/RamTeq-LandingSite/`.

5.  **Custom Domain (`ramteq.biz`):**
    *   Once the GitHub Pages site is live, go back to the GitHub Pages settings.
    *   Enter `ramteq.biz` in the custom domain section.
    *   Follow the instructions provided by GitHub to configure the necessary DNS records (usually `A` and `CNAME` records) with your domain registrar.

## Customization

*   **About Page:** Update `src/pages/AboutPage.jsx` with your personal details and replace the `#` placeholders with your actual social media URLs (GitHub, LinkedIn, etc.).
*   **Assets:** Replace or add images in the `src/assets` folder as needed.
*   **Styling:** Modify CSS files (`src/App.css`, `src/components/Navbar.css`, `src/pages/*.css`) to change the appearance.
*   **Google Apps Script:** Modify `Code.gs` (via Google Sheets > Extensions > Apps Script) if you need to change the target sheet name, notification email, or form handling logic.
