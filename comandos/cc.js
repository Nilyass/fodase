var Discord = require('discord.js')

exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
    if(!message.member.hasPermission('CREATE_INSTANT_INVITE')) {
        return message.channel.send(`<a:nao:594960419832070162> | ${message.author} Me parece que você não tem permissão de criar convites no servidor.`)
    }
    try {
    const invite = await message.channel.createInvite({maxAge: 0});

    message.reply(`:incoming_envelope: **Convite Criado:** \n ${invite}`)


} catch (err) {
    message.reply('**<a:FBTriste:594960155607695374> | ${message.author} Por algum motivo eu não tenho permissão de criar convites nesse servidor.**')
   }
}

module.exports.config = { 
    name: 'cc',
    aliases: ['criarconvite']
}