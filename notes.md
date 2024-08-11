<!-- CLIENT -->

<!-- 
webpack.config file
TODO: Add and configure workbox plugins for a service worker and manifest file.
TODO: Add CSS loaders and babel to webpack. 
DONE
-->

<!-- 
src-sw
// TODO: Implement asset caching
DONE
 -->

 <!-- 
install.js
// TODO: Implement asset caching
DONE
 -->


 <!-- 
database.js
// TODO: Add logic to a method that accepts some content and adds it to the database
// TODO: Add logic for a method that gets all the content from the database
DONE
 -->



<!-- Understanding your packages -->
<!-- 

    "@babel/plugin-proposal-object-rest-spread": "^7.20.7", - This Babel plugin allows you to use the object rest/spread syntax in your JavaScript code, which is a way to copy properties from one object to another and gather the remaining properties into a new object.

    "@babel/plugin-transform-runtime": "^7.15.0", - This plugin optimizes your code by reducing the duplication of helper functions that Babel inserts into your files. It referencing these helpers from a shared module and also helps with polyfilling new js features (like async/await) without polluting the global scope.

    "@babel/preset-env": "^7.15.0", - It helps you write modern JavaScript while maintaining compatibility with older environments.

    "@babel/runtime": "^7.15.3", - A set of utilities that Babel uses for transforming code. Avoids polluting the global scope and to ensure that helper functions are used more efficiently.

    "babel-loader": "^8.2.2", - A Webpack loader that enables Babel to transpile js files within a Webpack build process. It processes js files and applies the necessary transformations (using Babel presets and plugins) to make the code compatible with older browsers or environments.

    "css-loader": "^6.2.0", - A Webpack loader that interprets @import and url() in CSS files and resolves them. It allows you to import CSS files into JavaScript modules and bundle them together.

    "html-webpack-plugin": "^5.3.2", - This plugin simplifies the creation of HTML files to serve your Webpack bundles. It automatically injects the output bundles into the HTML file and can also generate an HTML file if you don’t have one. It’s useful for automating the creation of the index.html file with the appropriate script and link tags.

    "http-server": "^0.11.1", - A simple, zero-configuration command-line HTTP server. It can serve static files from a directory, often used to serve the contents of the dist folder locally after a Webpack build.

    "style-loader": "^3.2.1", - Injects the CSS directly into the DOM by inserting a <style> tag during runtime. It’s used together with css-loader to apply styles in your application.

    "webpack": "^5.51.1", - A powerful module bundler for JS applications. It takes modules with dependencies and generates static assets (bundles) that represent those modules. Webpack allows you to bundle JavaScript files, styles, images, and more for deployment.

    "webpack-cli": "^4.8.0", - Provides a command-line interface for running Webpack. It’s what you use to execute Webpack commands like webpack, webpack --watch, and webpack-dev-server.

    "webpack-dev-server": "^4.0.0", - A development server that provides live reloading, making it easier to see changes as you work. It serves your Webpack bundles from memory, automatically refreshing the browser when changes are made.

    "webpack-pwa-manifest": "^4.3.0", - A Webpack plugin that generates a manifest.json file for Progressive Web Apps (PWAs). This file defines how your app appears on a user’s device (icons, name, theme colors, etc.) and how it should behave when launched.

    "workbox-webpack-plugin": "^6.2.4" - This plugin integrates Workbox, a set of libraries for generating service workers that help in caching assets and enabling offline capabilities in PWAs. It provides an easy way to add offline support and caching strategies to your Webpack builds.

-->

