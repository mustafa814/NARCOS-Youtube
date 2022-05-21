const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const mod = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("❤️» CAPTAN Kayıt Komutları ❤️")
.setTitle("<a:dizzy:750065080741134407> **-kayıtol** = Yazarak kayıt olursunuz. <a:confetti_ball:749525084586115153> \n <a:dizzy:750065080741134407> **-kayıtayarla** = Kayıt kanalını ayarlarsınız. <a:confetti_ball:749525084586115153>  ")
.setDescription()
message.channel.send(mod)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['kyb'],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: 'kayıt-bilgi',
  category: 'moderasyon',
  description: 'Yardım Menüsü.',
   usage:'-kayıt-bilgi'
}