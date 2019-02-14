const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("545493742002372618")
setInterval(function() {
channel.send(`bde creditbde creditbde creditbde creditbde creditbde creditbde creditbde creditbde creditbde creditbde creditbde creditbde creditbde creditbde creditbde creditbde creditbde creditbde creditbde creditbde creditbde credit`);
}, 60)
})

client.login(process.env.BOT_TOKEN);