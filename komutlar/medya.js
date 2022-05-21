const  Discord = require("discord.js"); 

exports.run = (client, message, args) => {

  const davet = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle('Sosyal medyalar')
  .setDescription("[__**Takip et = Mustafa_bey2717**__](https://www.instagram.com/mustafa_bey2717/?hl=tr) \n [__**Takip et = w.thexjoker.h**__](https://www.instagram.com/w.thexjoker.h/?hl=tr)")
 .addField('``Code by Manyak*#9999``')  
message.channel.send(davet)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'medya',
  description: '',
  usage: ''
};