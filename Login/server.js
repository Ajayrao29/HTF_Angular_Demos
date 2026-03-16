const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const VALID_USER = {
  email: 'admin@test.com',
  password: 'admin123'
};

app.get('/api/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body || {};

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: 'Email and password are required.'
    });
  }

  if (email === VALID_USER.email && password === VALID_USER.password) {
    return res.status(200).json({
      success: true,
      message: 'Login successful.',
      token: 'demo-jwt-token-12345'
    });
  }

  return res.status(401).json({
    success: false,
    message: 'Invalid credentials.'
  });
});

app.listen(PORT, () => {
  console.log(`Login API running at http://localhost:${PORT}`);
});
