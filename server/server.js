let express = require('express');
let parser = require('body-parser');
let app = express();

app.use(parser.json());

const profile = require('./profile/profile');
app.post('/api/profile/get', profile.profileGet);

const friends = require('./friends/friends');
app.post('/api/friends/get', friends.getFriends);

const projects = require('./projects/projects');
app.post('/api/projects/filter/get', projects.projectsFilterGet);
app.post('/api/get/projects', projects.projectsGet);

const auth = require('./auth/auth');
app.post('/api/auth', auth.auth);

const skills = require('./skills/skills');

app.post('/api/skill/delete', (req, res) => {
  console.log(req.body);
  res.send({ ok: 'ok' });
});

app.post('/api/skill/add', (req, res) => {
  console.log(req.body);
  res.send({ ok: 'ok' });
});

app.post('/api/skill/voice/add', (req, res) => {
  console.log(req.body, req.params, req.query);
  res.send({ ok: 'ok' });
});

app.post('/api/skill/voice/delete', (req, res) => {
  console.log(req.body, req.params, req.query);
  res.send({ ok: 'ok' });
});

app.post('/api/skills/get', skills.skillsGet);

const homework = require('./homework/homework');
app.post('/api/homework/get', homework.homeworkGet);

app.all(/^\/(?!file$).*/, express.static('src'));

app.listen(process.env.PORT || 3000, () => {
  console.log(`App started on port ${process.env.PORT || 3000}`);
});
