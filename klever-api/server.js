require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');

const app = express();

const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:8080',
  'https://klever.onrender.com/' 
];


app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

app.use(express.json());

// Роуты
app.use('/api/auth', authRoutes);
const ordersRoutes = require('./routes/orders')
app.use('/api/orders', ordersRoutes)

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    app.listen(5000, () => console.log('Server running on port 5000'));
  } catch (e) {
    console.error(e);
  }
};

start();
