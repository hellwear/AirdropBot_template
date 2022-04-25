const { Telegraf } = require('telegraf');
const PouchDB = require('pouchdb');

const TOKEN = '';

const bot = new Telegraf(TOKEN)

bot.start((ctx) => {
  let tg_id = ctx.reply(`Airdroip от *******\n\nВас пригласил: ${ctx.startPayload}`);
});

bot.help((ctx) => { 
  ctx.reply('');
)};

bot.launch()