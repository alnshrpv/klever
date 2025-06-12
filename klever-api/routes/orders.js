const express = require('express');
const axios = require('axios');
const Order = require('../models/Order');
const authMiddleware = require('../middleware/auth');
const User = require('../models/User');


const router = express.Router();

router.post('/', authMiddleware, async (req, res) => {
  try {
    const { type, message } = req.body;
    const userId = req.userId;

    const order = new Order({
      user: userId,
      type,
      message,
      createdAt: new Date(),
    });

    await order.save();

const user = await User.findById(userId);

const telegramMessage = `
💬 Новое сообщение с сайта:

👤 Имя: ${user.name}
📧 Email: ${user.email}
📝 Сообщение:
${message}
`;


    const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    await axios.post(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
      chat_id: chatId,
      text: telegramMessage,
    });

    res.status(201).json({ message: 'Заявка создана и отправлена в Telegram', order });
  } catch (e) {
    console.error('Ошибка при создании заявки и отправке в Telegram:', e);
    res.status(500).json({ message: 'Ошибка при создании заявки' });
  }
});

router.get('/user/:id', authMiddleware, async (req, res) => {
  try {
    const userId = req.params.id;

    const orders = await Order.find({ user: userId }).sort({ createdAt: -1 });

    res.json({ orders });
  } catch (e) {
    console.error('Ошибка при получении заявок:', e);
    res.status(500).json({ message: 'Ошибка при получении заявок' });
  }
});

module.exports = router;
