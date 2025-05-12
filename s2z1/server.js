// server.js
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const USERS_FILE = './users.json';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: true
}));
app.use(express.static('public'));

function loadUsers() {
  if (!fs.existsSync(USERS_FILE)) fs.writeFileSync(USERS_FILE, '[]');
  return JSON.parse(fs.readFileSync(USERS_FILE));
}

function saveUsers(users) {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

app.post('/register', (req, res) => {
  const { username, email, phone, password } = req.body;
  const users = loadUsers();

  if (users.find(u => u.username === username)) {
    return res.send('Utilizatorul există deja. <a href="register.html">Înapoi</a>');
  }

  users.push({ username, email, phone, password });
  saveUsers(users);
  res.redirect('/login.html');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const users = loadUsers();
  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    return res.send('Date greșite. <a href="login.html">Încearcă din nou</a>');
  }

  req.session.user = user;
  res.redirect('/dashboard');
});

app.get('/dashboard', (req, res) => {
  if (!req.session.user) return res.redirect('/login.html');

  const user = req.session.user;

  res.send(`
    <h2>Bine ai venit, ${user.username}!</h2>
    <p>Email: ${user.email}</p>
    <p>Telefon: ${user.phone}</p>
    <a href="/logout">Logout</a>
  `);
});

app.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/login.html');
  });
});

app.listen(PORT, () => {
  console.log(`Serverul rulează la http://localhost:${PORT}`);
});
