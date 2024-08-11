const path = require('path');

const express = require('express');
const htmlRoutes = require('./htmlRoutes'); // adjust the path as necessary

// const app = express();

// app.use(express.static(path.join(__dirname, '../client/dist')));

// const PORT = process.env.PORT || 8081;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// // Use the HTML routes
// htmlRoutes(app);

module.exports = (app) =>
  app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../client/index.html'))
  );
