const Discord = require("selfbot.js-v14");
const {  language, savedb, nitrocode } = require("../../fonctions")
module.exports = {
  name: "nitro",
  description: "Generate a random nitro",
  run: async (client, message, args, db) => {
    try{
        message.edit(`https://discord.gift/${nitrocode(16, "0aA")}`)
        }
        catch(e){}
    }
}