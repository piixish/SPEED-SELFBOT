# Cette version du selfbot Speed ne contient aucun webhook ni injection, 100 % safe.

## Démarrage du Bot

Pour démarrer le bot, suivez ces étapes simples :

### 1. Installation des dépendances

Exécutez la commande suivante pour installer les dépendances nécessaires :

npm i

### 2. Configuration

Dans le fichier `config.json`, assurez-vous de remplir le champ `SpeedUsers` avec votre token.

### 3. Version de Node.js

Le bot nécessite Node.js version 18. Si vous ne l'avez pas déjà installé, vous pouvez le faire en utilisant `nvm` (Node Version Manager). Voici comment procéder :

#### Installation de nvm (sur Windows)

Téléchargez et installez `nvm` depuis ce lien : https://github.com/coreybutler/nvm-windows/releases/download/1.1.12/nvm-setup.exe

#### Installation de Node.js v18

Après avoir installé `nvm`, exécutez les commandes suivantes dans votre terminal :

nvm install v18
nvm use v18

Cela installera Node.js version 18 et l'utilisera pour exécuter le bot.

### 4. Démarrage du Bot

Une fois que vous avez terminé les étapes ci-dessus, vous êtes prêt à démarrer le bot. Utilisez la commande suivante :

node index.js

Le bot devrait démarrer correctement et être prêt à être utilisé.
