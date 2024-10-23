const TelegramBot = require('node-telegram-bot-api');
const token = '12123:test';
const bot = new TelegramBot(token, {
  polling: true,
  request: {
    agentOptions: {
      keepAlive: true,
      family: 4
    }
  }
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  console.log('msg:', msg);
  // 仅处理群组消息
  if (msg.chat.type === 'group' || msg.chat.type === 'supergroup') {
    console.log(`Received a message in the group: ${msg.text}`);
    // 你可以在这里处理消息
  }
});
