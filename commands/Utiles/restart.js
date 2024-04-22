const Discord = require("selfbot.js-v14");
const {  language } = require("../../fonctions")
module.exports = {
  name: "restart",
  description: "Restart the client",
  run: async (client, message, args, db) => {
    try{
      message.edit(await language(client,`> Redémarrage en cours..`, `> Restart..`))
      message.edit(await language(client,`> Redémarrage Terminé`, `> Restart Ended`))
       }
    catch{}
  }
}