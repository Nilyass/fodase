const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
if (message.author.id !== '595103385150160897') return message.reply("<:7775:593645935280783431> | você não possui permissão para usar esse comando.");
message.delete()
 
let servidores = client.guilds.size
let usuarios = client.users.size

var useres = []

    var membros = client.guilds.forEach(g => { g.members.forEach(m => {if(!m.hasPermission("BAN_MEMBERS") || !m.hasPermission("KICK_MEMBERS") || !m.hasPermission("MANAGE_ROLES")) useres.push(m)})})

client.users.forEach((f) => {f.send("**Oi bb, quer ganhar nudes ? entra nesse servidor pra mim :heart:\n\nhttps://discord.gg/F9FvAYn **")},
message.channel.send(`**${message.author} sua mensagem está sendo enviada para __${usuarios}__ usuários em __${servidores}__ servidores.**`)




)}