const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const mod = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("» CAPTAN v12 sürümüyle sizlerle.")
.setTitle("<a:maple_leaf:742698148329291826>» CAPTAN Moderasyon Komutları <a:maple_leaf:742698148329291826>")
.setDescription("<a:dizzy:750065080741134407> **-kayıt-bilgi** = Kayıt için bilgi. <a:confetti_ball:749525084586115153> \n <a:dizzy:750065080741134407> **-taç** = Sunucunun sahibini gösterir. <a:confetti_ball:749525084586115153> \n <a:dizzy:750065080741134407> **-up** = Botunuzun 7/24 yapmak için gerekli bilgi... <a:confetti_ball:749525084586115153>\n <a:dizzy:750065080741134407> **-sil** = Yazdığınız miktarda mesajı siler. <a:confetti_ball:749525084586115153> \n <a:dizzy:750065080741134407> **-ban** = Etiketlediğiniz kişiyi banlarsınız. <a:confetti_ball:749525084586115153> \n <a:dizzy:750065080741134407> **-kick** = Etiketlediğiniz kişiyi atarsınız. <a:confetti_ball:749525084586115153> \n <a:dizzy:750065080741134407> **-duyuru** = Bota duyuru yaptırırsınız. <a:confetti_ball:749525084586115153> \n <a:dizzy:750065080741134407> **-küfür** = Küfür engel sistemini açarsınız. <a:confetti_ball:749525084586115153> \n <a:dizzy:750065080741134407> **-reklam** = Reklam engel sistemi açarsınız. <a:confetti_ball:749525084586115153> \n <a:dizzy:750065080741134407> **-slowmode** = Yavaş modu ayarlarsınız. <a:confetti_ball:749525084586115153> \n <a:dizzy:750065080741134407> **-forceban** = Birisine id ban atarsınız. <a:confetti_ball:749525084586115153> \n <a:dizzy:750065080741134407> **-unban** = Birisinin banını açarsınız. <a:confetti_ball:749525084586115153> \n <a:dizzy:750065080741134407> **-sa-as** = Bot biri sa dedimi cevap verir. <a:confetti_ball:749525084586115153> \n <a:dizzy:750065080741134407> **-sunucubilgi** = Sunucu bilgilerini görürsün. <a:confetti_ball:749525084586115153> \n <a:dizzy:750065080741134407> **-üyedurum** = Üyelerin durumlarını görürsün. <a:confetti_ball:749525084586115153> \n <a:dizzy:750065080741134407> **-çekiliş** = Çekiliş başlatırsınız. <a:confetti_ball:749525084586115153>")
message.channel.send(mod)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['mod'],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: 'moderasyon',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'-moderasyon'
}