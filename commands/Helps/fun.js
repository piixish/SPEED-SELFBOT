const Discord = require("selfbot.js-v14");
const { language } = require("../../fonctions");

module.exports = {
  name: "fun",
  description: "Menu fun",
  run: async (client, message, db, args, prefix) => {
    try{

        message.edit(await language(client, `
ღ __**samira - Fun**__ ღ
> \`${prefix}say <@user> [message]\` ➜ **Dire une chose sous l'identité d'autrui (webhook)**
> \`${prefix}saloperie <@user>\` ➜ **Note le pourçentage de saloperie d'autrui**
> \`${prefix}love <@user>\` ➜ **Message animé**
> \`${prefix}nitro\` ➜ **Drop de faux nitro**
> \`${prefix}noadd [delete]\` ➜ **Empêche les gens d'ajouter des personnes au groupe**
> \`${prefix}noleave [delete]\` ➜ **Ré-ajoute les gens qui quittent le groupe (vos amis seulement)**`,
        
        `ღ __**samira - Fun**__ ღ
> \`${prefix}say <@user> [message]\` ➜ **Saying something under someone else's identity (webhook)**
> \`${prefix}saloperie <@user>\` ➜ **Note the percentage of other people's filth**
> \`${prefix}love <@user>\` ➜ **Animated message**
> \`${prefix}nitro\` ➜ **Send fakes nitros**
> \`${prefix}noadd [delete]\` ➜ **Prevents people from adding people to the group**
> \`${prefix}noleave [delete]\` ➜ **Re-add people who leave the group (your friends only)**`))

      }
        catch(e){}
    }
}