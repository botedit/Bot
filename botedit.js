const { Telegraf } = require("telegraf");

const bot = new Telegraf("5964057450:AAG4LYm7CtFsGsP8E8woqr1TIRyWN2pIf1k");


bot.on('edited_message', ctx => {
  let msg_id = ctx.editedMessage.message_id
  ctx.telegram.deleteMessage(ctx.chat.id, msg_id)
  ctx.reply("لا يمكن التعديل ") 
  console.log(msg_id);
})

bot.launch();