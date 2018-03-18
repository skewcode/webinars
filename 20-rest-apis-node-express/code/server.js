const express = require('express');
const bodyParser = require('body-parser');

const userRouter = require('./userRouter');

const app = express();

app.use(bodyParser.json());

app.use('*', (req, res, next) => {
  console.log(`${req.method}: ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.json({ info: 'The USERS api is avilable at /users' });
});

app.use('/users', userRouter);

app.all('*', (req, res) => {
  res.json({ error: 'Access Denied' });
});

app.listen(8080, () => {
  console.log('Server started at port: 8080');
});
