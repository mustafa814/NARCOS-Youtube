const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("» CAPTAN v12 sürümüyle yeniden sizlerle.")
.setTitle("<a:maple_leaf:742698148329291826> » CAPTAN Logo Komutları <a:maple_leaf:742698148329291826>")
 .setTimestamp()
.setDescription("<a:fast_forward:750065080741134407> **-grafiti** = grafiti logo oluşturur. <a:warning:749525084586115153> \n <a:fast_forward:750065080741134407> **-discord** = discord logo oluşturur. <a:warning:749525084586115153> \n <a:fast_forward:750065080741134407> **-gold** = gold logo oluşturur. <a:warning:749525084586115153> \n <a:fast_forward:750065080741134407> **-camic** = comic logo oluşturur. <a:warning:749525084586115153> \n <a:fast_forward:750065080741134407> **-bubble2** = bubble ama renkli logo oluşturur. <a:warning:749525084586115153> \n <a:fast_forward:750065080741134407> **-bubble** = bubble logo oluşturur. <a:warning:749525084586115153> \n <a:fast_forward:750065080741134407> **-dinamik** = Dinamik logo oluşturur. <a:warning:749525084586115153> \n <a:fast_forward:750065080741134407> **-altın** = Altın logo oluşturur. <a:warning:749525084586115153> \n <a:fast_forward:750065080741134407> **-banner** = Banner logo oluşturur. <a:warning:749525084586115153> \n <a:fast_forward:750065080741134407> **-basit** = Basit logo oluşturur. <a:warning:749525084586115153> \n <a:fast_forward:750065080741134407> **-elmas** = Elmas logo oluşturur. <a:warning:749525084586115153> \n <a:fast_forward:750065080741134407> **-neonmavi** = Neon mavi logo oluşturur. <a:warning:749525084586115153> \n <a:fast_forward:750065080741134407> **-kalın** = Kalın logo oluşturur. <a:warning:749525084586115153> \n <a:fast_forward:750065080741134407> **-anime** = Anime yazı tipinde logo oluşturur. <a:warning:749525084586115153> \n <a:fast_forward:750065080741134407> **-habbo** = Habbo yazı tipinde logo oluşturur. <a:warning:749525084586115153> \n <a:fast_forward:750065080741134407> **-arrow** = Ok işaretli logo oluşturur. <a:warning:749525084586115153> \n <a:fast_forward:750065080741134407> **-green** = Yeşil logo oluşturur. <a:warning:749525084586115153> \n <a:fast_forward:750065080741134407> **-alev** = Alevli logo oluşturur. <a:warning:749525084586115153> \n <a:fast_forward:750065080741134407> **-red** = Kırmızı logo oluşturur. <a:warning:749525084586115153>")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["logo"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'logo',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'-logo'
}