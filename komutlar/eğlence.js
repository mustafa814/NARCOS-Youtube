const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("» CAPTAN v12 sürümüyle yeniden sizlerle.")
.setTitle("<a:maple_leaf:742698148329291826> » CAPTANEğlence Komutları <a:maple_leaf:742698148329291826>")
 .setTimestamp()
.setDescription("<a:dizzy:750065080741134407> **-zarat** =  zar atmaya ne dersin benim,rekorum 5 gecebilirmisin?. <a:confetti_ball:749525084586115153> \n <a:dizzy:750065080741134407> **-kasaaç** =  CsGo kasası açmaya ne dersin?. <a:confetti_ball:749525084586115153> \n <a:dizzy:750065080741134407> **-emojiyazı** =  Emojili yazı yazmaya ne dersin?. <a:confetti_ball:749525084586115153> \n <a:dizzy:750065080741134407> **-espiri** =  Sana güzel bi espiri yapmama ne dersin?. <a:confetti_ball:749525084586115153> \n <a:dizzy:750065080741134407> **-sor** = bana soru sormaya ne dersin. <a:confetti_ball:749525084586115153> \n <a:dizzy:750065080741134407> **-ara112** = İhtiyacın oldunda kullan ;) <a:confetti_ball:749525084586115153> \n <a:dizzy:750065080741134407> **-vine** = Raskele komik paylaşımları görmeye ne dersin..! <a:confetti_ball:749525084586115153> \n  <a:dizzy:750065080741134407> **-adamasmaca** = Birlikte bir oyun oynamaya ne dersin **adam asmaca**. <a:confetti_ball:749525084586115153> \n  <a:dizzy:750065080741134407> **-balıktut** = birlikte balık tutmaya ne dersin :D?. <a:confetti_ball:749525084586115153> \n <a:dizzy:750065080741134407> **-tersyazı** = Bir Yazıyı Bot Ters Yazar. <a:confetti_ball:749525084586115153> \n <a:dizzy:750065080741134407> **-mcskin** = Yazdığınız ismin minecraft görünüşünü atar. <a:confetti_ball:749525084586115153> \n <a:dizzy:750065080741134407> **-fbi** = Bot FBi Gif Atar. <a:confetti_ball:749525084586115153> \n <a:dizzy:750065080741134407> **-token** = Tokenimi Öğrenmek İstemezmisin? <a:confetti_ball:749525084586115153> \n <a:dizzy:750065080741134407> **-düello** = Düello Atarsın. <a:confetti_ball:749525084586115153> \n <a:dizzy:750065080741134407> **-wasted** = Polis tarafından yakalanırsın. <a:confetti_ball:749525084586115153> \n <a:dizzy:750065080741134407> **-atatürk** = Dene ve gör... (1881-1938) <a:confetti_ball:749525084586115153>  \n <a:dizzy:750065080741134407> **-yumruk-at** = istediğin kişinin gafasına yumruk atar <a:confetti_ball:749525084586115153>")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'eğlence',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'-eğlence'
}