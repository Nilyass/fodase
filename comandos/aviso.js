const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR") && message.author.id !== '290363866586546176' && message.author.id !== '283482289911103489') return message.reply("<:7775:593645935280783431> | você não possui permissão para usar esse comando.")
    message.delete()
let mensagem = args.join(" ")
    /* try{

    messsage.channel.send(Embed);

}catch(err){

    return message.reply("**Ocorreu um erro. Por favor, tente novamente.**")

    }
    */
   const membros = message.guild.memberCount;
   try{
    message.guild.members.map(membro => {
         membro.send(mensagem).catch(() => {});
    })
}catch(err){

    return message.reply("**:chegay: *\`Ocorreu um erro ao enviar a mensagem. Tente novamente.\`\*").then(msg => msg.delete(8000))

   }
    message.channel.send("*\`Mensagem enviada para\`\* ***`" + membros + "`*** *\`membros\`\*").then(msg => msg.delete(8000))
    message.channel.send("**`Mensagem a ser enviada:`\n**" + mensagem).then(msg => msg.delete(8000))
}
module.exports.help = {
name: "aviso"
}