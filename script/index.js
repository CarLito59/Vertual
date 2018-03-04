const Discord = require('discord.js');
const util = require('util');
const client = new Discord.Client();
client.on("guildMemberAdd", member => {
/*Ton code*/
})

client.login(process.env.TOKEN);
