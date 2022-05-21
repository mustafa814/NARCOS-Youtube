const Discord = require('discord.js')
const db = require('quick.db');

exports.run = async (client, message, args) => {
  
  if (!args[0]) return message.reply(`Matket şuan kapalı malesef :name_badge: `)
  
  if (args[0] === 'sa') {
    let Captanpara = await db.get(`para_${message.author.id}`) 
    let Captanfiyat = 100 
    
    if (Captanpara < Captanfiyat) return message.reply('Yetersiz Bakiye')
    
    db.set(`ìştebişiler_${message.author.id}`, "Aktif")
    db.add(`para_${message.author.id}`, -Captanfiyat)
    
    return message.reply(`Ürün başarıyla satın alındı!`)
  }


  
}
exports.conf = {
  
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'market'
}