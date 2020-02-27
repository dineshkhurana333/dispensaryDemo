const express = require('express');
const bodyparser = require('body-parser');
const glob = require('glob');
const path = require('path');



require('../config/envConfig');

const app = express();


app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

glob('**/app/routes/*.routes.js', (err, files) => {

  if (err) {
    throw err;
  }

  files.forEach((route) => {
    app.use(require(`../${route}`)).routes;
  })
  console.log('routes created')

})


let port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Server is listening on port:: ' + port)
})

module.exports = app



