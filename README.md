# Restaurant Page

This project is a simple restaurant page built using JavaScript and webpack, featuring a tabbed interface to switch between different pages: Home, Menu, and Contact.

## Features

- **Tabbed Navigation:** Easily switch between Home, Menu, and Contact pages.
- **Dynamic Content Loading:** Each tab loads its content dynamically using JavaScript.
- **Webpack Integration:** Bundles and optimizes JavaScript and CSS files using webpack for efficient loading.

Project Structure

restaurant-page/
│
├── dist/                  # Compiled files (Webpack output)
├── src/                   # Source files
│   ├── index.html         # Main HTML file
│   ├── index.js           # Main JavaScript entry point
│   ├── styles.css         # CSS styles
│   ├── home.js            # Home page JavaScript logic
│   ├── menu.js            # Menu page JavaScript logic
│   └── contact.js         # Contact page JavaScript logic
│
├── webpack.config.js      # Webpack configuration file
├── package.json           # Project metadata and scripts
└── README.md              # This README file
