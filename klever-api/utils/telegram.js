const axios = require('axios');
require('dotenv').config();

const sendTelegramMessage = async (text) => {
  try {
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    await axios.post(url, {
      chat_id: chatId,
      text: text,
      parse_mode: 'HTML'
    });
  } catch (err) {
    console.error('Ошибка при отправке в Telegram:', err.response?.data || err.message);
  }
};

module.exports = sendTelegramMessage;
