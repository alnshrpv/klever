require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// Безопасный список источников
const allowedOrigins = [
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'https://klever.onrender.com'
];

// Упрощённая CORS политика для разработки
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200
}));

// Парсинг JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Проверка маршрутов
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

// Подключение маршрутов (убедитесь в правильности экспорта)
const authRoutes = require('./routes/auth');
const ordersRoutes = require('./routes/orders');

// Явное определение базовых путей
app.use('/api/auth', authRoutes);
app.use('/api/orders', ordersRoutes);

// Обработка ошибок
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Подключение к MongoDB
const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000
    });
    
    console.log('Connected to MongoDB');


    app.listen(5000, () => console.log('Server running on port 5000'));
  } catch (e) {
    console.error(e);
  }
};

start();
