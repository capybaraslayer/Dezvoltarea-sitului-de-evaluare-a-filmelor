const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Middleware pentru a parsa corpul cererilor
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Servește fișiere statice (HTML, CSS)
app.use(express.static('public'));

// Conectare la MongoDB
mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true });

// Definirea unui model pentru utilizator
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  phone: String,
  password: String,
});
const User = mongoose.model('User', userSchema);

// Ruta de înregistrare (POST)
app.post('/register', async (req, res) => {
  const { username, email, phone, password } = req.body;

  // Validarea datelor
  if (!username || !email || !phone || !password) {
    return res.status(400).send('Toate câmpurile sunt obligatorii!');
  }

  // Crearea unui nou utilizator
  const user = new User({ username, email, phone, password });
  await user.save();

  // Redirecționare către pagina de login
  res.redirect('/login.html');
});

// Lansează serverul
app.listen(port, () => {
  console.log(`Serverul rulează pe http://localhost:${port}`);
});
