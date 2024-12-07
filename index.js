require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

// Lesen Sie das Token aus der .env-Datei
const TOKEN = process.env.BOT_TOKEN;

// Event wird aufgerufen, wenn der Bot bereit ist
client.on('ready', () => {
    console.log(`Bot ist online als ${client.user.tag}`);
    client.user.setStatus('online'); // Setzt den Status auf 'online'
    client.user.setActivity('Your specific status here', { type: 'PLAYING' }); // examples: 'PLAYING', 'WATCHING', 'LISTENING', 'STREAMING'
});

// Loggt den Bot mit dem Token ein
client.login(TOKEN);
