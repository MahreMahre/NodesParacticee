const express = require('express');
const cookieparser = require('cookie-parser');
const app = express();
const authRoutes = require('./routes/auth.routes');

app.use(cookieparser());
app.use(express.json());
app.use('/api/auth', authRoutes);





module.exports = app;