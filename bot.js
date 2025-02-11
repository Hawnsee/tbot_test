const TelegramBot = require('node-telegram-bot-api');

const token = '7526382715:AAGnru5cfReKivOgD5CELQ_OHptCi9Hpl4A'; // Replace with your own bot token
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  if (messageText === '/start') {
    bot.sendMessage(chatId, 'Welcome to the bot! @juanxin');
  }
});
