const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping recebido");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const fs = require("fs");
console.log("♨️ Ligando bot...")
const Discord = require('discord.js');
const client = new Discord.Client({
    autoReconnect: true,
    messageCacheMaxSize: 2024,
    fetchAllMembers: true,
    disabledEvents: ['typingStart', 'typingStop', 'guildMemberSpeaking'],
    messageCacheLifetime: 1680,
    messageSweepInterval: 1680
});
const config = require("./config.json")
const { Client, Util } = require('discord.js');
const active = new Map();
const ownerID = '290363866586546176';
const bot = new Discord.Client();
var token = config.token
var prefix = config.prefix
var dono = config.dono

client.login(token)

client.on("message", (message) => {
  let msg = message.content.toLowerCase();
  if (message.author.bot) return undefined;
  let user = message.author;
  bot.uptime = Date.now();

 

  if (message.content.indexOf(bot.prefix) !== 0) return;
    let args = message.content.slice(prefix.length).trim().split(' ');
    let cmd = args.shift().toLowerCase();

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(prefix)) return;
  
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
  
  try {

        let ops = {
            ownerID: ownerID,
            active: active,
            aspasT: "```"
        }

        let commandFile = require (`./comandos/${command}.js`);
       commandFile.run(client, message, args, ops);

    } catch (e) {
        console.log(e.stack); 
         message.reply(errado);
    } 

  
const errado = new Discord.RichEmbed()
.setTitle(`Erro!`, client.user.avatarURL)
.setDescription(`🛑 | Comando inexistente ou utilizado de maneira incorreta!`)
.setFooter(`${message.author.username}`, message.author.displayAvatarURL);

});

client.on("ready", () => {
    console.log(`Bot foi iniciado, com ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores.`); 
    client.user.setPresence({ game: { name: config.Status, type: 'STREAMING', url: 'https://www.twitch.tv/fumante1533'}});
  });

let status = [
  { name: `Sexo pra você`, type: 'STREAMING', url: 'https://www.twitch.tv/fumante1533'},
  { name: `Prazer na cama`, type: 'STREAMING', url: 'https://www.twitch.tv/fumante1533'},
  { name: `Meu prefixo é: c!`, type: 'STREAMING', url: 'https://www.twitch.tv/fumante1533'},
  { name: `Toda molhadinha pra você`, type: 'STREAMING', url: 'https://www.twitch.tv/fumante1533'},
  { name: `Amor para você`, type: 'STREAMING', url: 'https://www.twitch.tv/fumante1533'},
]



setInterval(function() {
let randomStatus = status[Math.floor(Math.random() * status.length)];
client.user.setPresence({ game: randomStatus });
}, 7000)

   
fs.readdir("./eventos/", (err, files) => {
    if (err) return console.error("[ERRO] " + err);
    files.forEach(file => {
        let eventFunction = require(`./eventos/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, (...args) => eventFunction.run(client, ...args));
    });
})