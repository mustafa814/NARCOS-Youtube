const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const kullanıcı = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("» CAPTAN v12 sürümüyle yeniden sizlerle.")
.setTitle("<a:maple_leaf:742698148329291826> » CAPTAN Kullanıcı Komutları <a:maple_leaf:742698148329291826>")
 .setTimestamp()
.setDescription("<a:dizzy:750065080741134407> **-medya** = Sosyal medyalarım. <a:confetti_ball:749525084586115153> \n <a:dizzy:750065080741134407> **-toplamkomut** = Botta ne kadar komut oldunu gösterir. <a:confetti_ball:749525084586115153> \n <a:dizzy:750065080741134407> **-aile** = Ne kadar büyük bi aile oldumuzu öğrenmek istermisin?. <a:confetti_ball:749525084586115153> \n <a:dizzy:750065080741134407> **-say** = Sunucu bilgilerini gösterir. <a:confetti_ball:749525084586115153> \n <a:dizzy:750065080741134407> **-avatar** = Avatarınıza bakarsınız. <a:confetti_ball:749525084586115153> \n <a:dizzy:750065080741134407> **-yetkilerim** = Yetkilerini görürsün. <a:confetti_ball:749525084586115153> \n <a:dizzy:750065080741134407> **-profil** = Profilini görürsün. <a:confetti_ball:749525084586115153> \n <a:dizzy:750065080741134407> **-sunucuresmi** = Sunucu resmini gösterir. <a:confetti_ball:749525084586115153> \n <a:dizzy:750065080741134407> **-ping** = Botun Pingine Bakarsın. <a:confetti_ball:749525084586115153> \n <a:dizzy:750065080741134407> **-id** = Birisinin id'sine Bakarsın. <a:confetti_ball:749525084586115153> \n <a:dizzy:750065080741134407> **-davet** = Beni Sunucuna Ekle. <a:confetti_ball:749525084586115153> \n <a:dizzy:750065080741134407> **-botbilgi** = Bot istatistiklerini görürsünüz. <a:confetti_ball:749525084586115153> \n <a:dizzy:750065080741134407> **-bug-bildir** = Yazdığınız bug'u yapımcılarıma bildirir. <a:confetti_ball:749525084586115153>  \n <a:dizzy:750065080741134407> **-istek-kod** = Yazdığınız istek kodu yapımcılarıma bildirir. <a:confetti_ball:749525084586115153>  ")
message.channel.send(kullanıcı)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'kullanıcı',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'-kullanıcı'
}