const express = require('express');

let app = express();

let users = [
  {name: 'Anderson', age: 26},
  {name: 'Ilaha', age: 24},
  {name: 'Melissa', age: 10}
];

app.get('/', (req, res) => {
  res.status(404).send({
      error: 'Page not found.',
      name: 'Todo app v1.0'
  });
});

app.get('/users', (req, res) => {
  res.status(200).send(users);
});

app.listen(3000, () => {
  console.log('App running on port 3000');
});
module.exports.app = app;
