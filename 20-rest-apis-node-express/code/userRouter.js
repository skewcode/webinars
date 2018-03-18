const express = require('express');

const Users = require('./Users');

const p = new Users();
const userRouter = express.Router();

userRouter.get('/', (req, res) => {
  res.json(p.getUsers());
});

userRouter.post('/', (req, res) => {
  let { firstName, lastName, email, phone } = req.body;

  p.addUser(firstName, lastName, email, phone);

  if (firstName === undefined) {
    res.json({ error: 'firstName is missing!' });
    return;
  }

  res.json({ info: 'User added Successfully!' });
});

userRouter.put('/:id', (req, res) => {
  let id = req.params.id;

  let { firstName, lastName, email, phone } = req.body;

  p.updateUser(id, firstName, lastName, email, phone);

  res.json({ info: 'User modified successfully!' });
});

userRouter.delete('/:id', (req, res) => {
  let id = req.params.id;
  p.deleteUser(id);

  res.json({ info: 'User deleted successfully!' });
});

module.exports = userRouter;
