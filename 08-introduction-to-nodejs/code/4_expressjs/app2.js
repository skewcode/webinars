const express = require('express');
const ejs = require('ejs');
const bp = require('body-parser');

const urlencoded = bp.urlencoded({ extended: false });

const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('Home&nbsp;&nbsp;<a href="aboutus">About Us</a>&nbsp;&nbsp;<a href="contactus">Co' +
      'ntact Us</a><h1>Hello World!</h1>');
});

app.get('/aboutus', (req, res) => {
  res.sendFile(`${__dirname}/aboutus.html`);
});

app.get('/input/:name/:location', (req, res) => {
  inputData = {
    rp: req.params,
    qs: req.query,
    skills: [
      'Node.js', 'React.js', 'JavaScript',
    ],
    nav: ['Home', 'About Us', 'Contact Us'],
  };

  res.render('details', inputData);
});

app.get('/contactus', (req, res) => {
  res.sendFile(`${__dirname}/contactus.html`);
});

app.post('/postdata', urlencoded, (req, res) => {
  res.json(req.body);
});

app.get('*', (req, res) => {
  res.send('<h2>404 - Page Not Found</h2>');
});

app.listen(8080, () => {
  console.log('App started and listening at port 8080');
});
