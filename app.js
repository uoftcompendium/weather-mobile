const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    console.log('Weather is sunny!');
});
client.login(process.env.WEATHER_NETWORK);
