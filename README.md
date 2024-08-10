# AnytimeSnips
Create notes or snippets with or without an internet connection!

## Description
The latest text editor that runs in the browser. The app is a single-page application that meets PWA criteria. It features a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser and the best part, it functions offline! 

The package used is idb, which is a lightweight wrapper around the IndexedDB API. It features a number of methods that are useful for storing and retrieving data, and is used by companies like Google and Mozilla.

This full-stack application is deployed to Render

- Github Repo:
- Github Deployed page:

### Table of Contents:
- [Description](#description)
- [Directory Structure](#directory-structure)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Appearance and Functionality](#appearance-and-funtionality)
- [Technologies Details](#technical-details)
- [Contributions](#contributions)
- [Credits](#credits)
- [License](#license)
- [Author](#author)

## Directory Structure
```  
├── CMSify
    ├── config/ 
        ├── connection.js 
    ├── controllers/
        ├── thoughtCtrlr.js 
        ├── userCtrlr.js     
    ├── models/ 
        ├── index.js 
        ├── reaction.js 
        ├── thought.js 
        ├── user.js
    ├── node_modules/          
        ├── api/ 
            ├── index.js 
            ├── thoughtRoute.js 
            ├── userRoute.js
        ├── index.js                
    ├── utils/
        ├── communityData.js      
        ├── seed.js                 
    ├── .gitignore    
    ├── index.js  
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md  
```

### User Story
```
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

### Acceptance Criteria
```
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Render
THEN I should have proper build scripts for a webpack application
```
[Back to Table of Contents](#table-of-contents)

### Technical Details
- > Nodemon
- > express
- > idb package, which is a lightweight wrapper around the IndexedDB API

### .gitignore 
- > .DS_store 
- > node_modules

## Appearance and Funtionality

The following image demonstrates the application functionality:
[](#)

The following image shows the application's manifest.json file:
[](#)

The following image shows the application's registered service worker:
[](#)

The following image shows the application's IndexedDB storage:
[](#)



[Back to Table of Contents](#table-of-contents)
## Contributions
N/A

## Credits
N/A

[Back to Table of Contents](#table-of-contents)

## License
![alt text](https://img.shields.io/badge/License-_MIT-blue.svg)

## Author
@ Rhianna Wilson
> [rhiannawilson](https://github.com/rhiannawilson)

[Back to Table of Contents](#table-of-contents)
