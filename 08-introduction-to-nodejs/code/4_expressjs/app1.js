const express = require('express');
const bp = require('body-parser');

const app = express();

app.use(bp.json());

const skillsData = {
  skills: ['Node.js'],
};

app.get('/api/skills', (req, res) => {
  res.json(skillsData);
});

app.post('/api/skills', (req, res) => {
  skillsData
    .skills
    .push(req.body.skill);

  res.json(skillsData);
});

app.delete('/api/skills', (req, res) => {
  skillsData
    .skills
    .pop(req.body.skill);

  res.json(skillsData);
});

app.listen(8080, () => {
  console.log('App started and listening at port 8080');
});
