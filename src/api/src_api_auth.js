const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./user.model');
const router = express.Router();

// Registro de usuario
router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    const existe = await User.findOne({ email });
    if (existe) return res.status(400).json({ msg: 'El usuario ya existe' });
    const hash = await bcrypt.hash(password, 10);
    const nuevoUsuario = new User({ email, password: hash });
    await nuevoUsuario.save();
    res.status(201).json({ msg: 'Usuario registrado correctamente' });
  } catch (err) {
    res.status(500).json({ msg: 'Error en el servidor' });
  }
});

// Login de usuario
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const usuario = await User.findOne({ email });
    if (!usuario) return res.status(400).json({ msg: 'Credenciales inválidas' });
    const esValido = await bcrypt.compare(password, usuario.password);
    if (!esValido) return res.status(400).json({ msg: 'Credenciales inválidas' });
    // Generar token (ajusta 'secreto' con process.env.JWT_SECRET)
    const token = jwt.sign({ id: usuario._id }, 'secreto', { expiresIn: '1d' });
    res.json({ token, user: { id: usuario._id, email: usuario.email } });
  } catch (err) {
    res.status(500).json({ msg: 'Error en el servidor' });
  }
});

module.exports = router;