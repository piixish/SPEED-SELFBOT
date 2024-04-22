// command to get profile picture
const Discord = require("selfbot.js-v14");
const {  language } = require("../../fonctions")

module.exports = {
  name: "help",
  description: "Menu Help",
  run: async (client, message, args, db, prefix) => {

    message.edit(await language(client, `
                                          ღ __**samira**__ ღ

** mizuki by samira **
> \`${prefix}help\` ➜ **Menu d'aide (ce menu)**
> \`${prefix}status\` ➜ **Commande de statuts**
> \`${prefix}utility\` ➜ **Commandes d'utilitaire**
> \`${prefix}mod\` ➜ **Commandes de modération**
> \`${prefix}fun\` ➜ **Commandes de fun**
> \`${prefix}settings\` ➜ **Commandes de paramètres**`
,`                                               ღ __**samira**__ ღ
** mizuki by samira **
> \`${prefix}help\` ➜ **Help menu (this menu)**
> \`${prefix}status\` ➜ **Status commands**
> \`${prefix}utility\` ➜ **Utility commands**
> \`${prefix}mod\` ➜ **Moderation commands**
> \`${prefix}fun\` ➜ **Fun commands**
> \`${prefix}settings\` ➜ **Parameter commands**`))
  }
}; 