const Discord = require("selfbot.js-v14");
const { language } = require("../../fonctions")

module.exports = {
    name: "banner",
    description: "Get a user's banner",
    run: async (client, message, args) => {
        let user;
        if (args.length > 0) {
            const mention = args[0];
            const userID = mention.replace(/[^0-9]/g, '');

            user = client.users.cache.get(userID);

            if (!user) {
                return message.edit(await language(client, `ღ **__samira__** ღ\n> Utilisateur introuvable. Veuillez spécifier un utilisateur valide.`, `ღ **__samira__** ღ\n> User not found. Please specfy a valid user.`));
            }

        } else {
            user = message.author;
        }

        await user.fetch();

        if (!user.banner) {
            return message.edit(await language(client, `ღ **__samira__** ღ\n> L'utilisateur ${user} ne possède pas de bannière.`, `ღ **__samira__** ღ\n> User ${user} has no banner.`));
        }

        const bannerURL = user.bannerURL({ dynamic: true, format: 'png', size: 1024 });

        message.edit(await language(client, `ღ **__samira__** ღ\n> **Bannière de ${user} :** ${bannerURL}`, `ღ **__samira__** ღ\n> **Banner of ${user} :** ${bannerURL}`));
    }
}