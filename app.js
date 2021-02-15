require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const commandHandler = require('./commandHandler');

client.login(process.env.DISCORD_TOKEN);

client.on('ready', onBotReady);
function onBotReady() {
  console.log("Beep bop");
}

client.on('message', commandHandler);