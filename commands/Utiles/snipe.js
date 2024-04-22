const Discord = require("selfbot.js-v14");
const {language} = require('../../fonctions')
module.exports = {
  name: "snipe",
  description: "Snipe the last message",
  run: async (client, message, args) => {
    
    const msg = client.snipes.get(message.channel.id)
    if(!msg) return message.edit("Aucun message enregistré.")

    message.edit(await language(client, 
      `ღ__**samira-Snipe**__ღ 
    > Auteur: ${msg.author}
    > Message: ${msg.content}
    > Image: ${msg.image}
    > Date: <t:${parseInt(msg.date / 1000, 10)}:R>`,
      `ღ__**samira-Snipe**__ღ
    > Author: ${msg.author}
    > Content: ${msg.content}
    > Image: ${msg.image}
    > Date: <t:${parseInt(msg.date / 1000, 10)}:R>`))    
  }
}