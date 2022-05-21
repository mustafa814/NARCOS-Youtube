const Discord = require("discord.js");
exports.run = async (client, message, args) => {

  
let istek = args.slice(0).join(' ')
if(!istek) return message.channel.send('**Bug Bildirmek için Bir Bug Yazınız.** :x:')

const embed = new Discord.MessageEmbed()
.setTitle("Captan Bug Sistemi")
.setColor('BLUE')
.setDescription(`**Bug Kanalı** ${message.channel.name} \n **Bug Bildirilen Sunucu** \`${message.guild.name}\` \n **Bugu Bildiren Kullanıcı** <@${message.author.id}> \n **Bildirilen Bug :** \`${istek}\``)
client.channels.cache.get('776732448817676319').send(embed)
  
message.channel.send("Bug bildiriminiz gönderildi. :confetti_ball:").then(message => message.delete({ timeout: 5000 }));
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0  
};

exports.help = {
  name: 'bug-bildir',
  description: 'bug belirtmeye yarar',
  usage: 'bug-bildir <bug>'
}