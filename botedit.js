const { Telegraf } = require("telegraf");

const bot = new Telegraf("5560270744:AAFc-zD5muAuE5ILasQwAZ68cf6m7Mw2QUE");


bot.on('edited_photo', ctx => {
  let msg_id = ctx.editedMessage.message_id
  ctx.telegram.deleteMessage(ctx.chat.id, msg_id)
  ctx.reply( "@"+ctx.from.username +   ` لا تعدل يا ورع ممنوع `)

})

bot.launch();
