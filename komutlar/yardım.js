const Discord = require("discord.js");

exports.run = (client, message) => {
  const EmbedNarcosCode = new Discord.MessageEmbed()

    .setColor("RANDOM")
    .setTitle(
      "**▬▬▬▬▬▬[** ©️ **» Narcos Bot** ©️ **]▬▬▬▬▬▬**  **  **Prefixim: `-`"
    )
    .setThumbnail(
      "https://cdn.discordapp.com/emojis/770265448892858368.gif?v=1"
    )
    .setDescription(
      `

**▬▬▬▬▬▬▬[** :closed_lock_with_key:  **Komut Listesi**   :closed_lock_with_key: **]▬▬▬▬▬▬**

> **» -moderasyon :** Moderasyon komudları görüntüler.
> **» -kullanıcı :** Userler için açık komudlar...
> **» -eğlence :** Sizi biraz eğlendirir.
> **» -eğlence2 :** size güzel komudlarımı göstereyim sizi eğlendirecek...
> **» -logo :** İstediniz şekillerde bi logo oluşturabilirsiniz...
> **» -logo2 :**logo2 kamutlarıyla sizlerle...

**▬▬▬▬▬▬▬[** :gear:  **Bilgilendirme**  :gear: **]▬▬▬▬▬▬**

> :dizzy: **Fikirleriniz** **değerlidir, Belirtmekten asla çekinmeyin!**
> :open_file_folder: **Botun Destek Sunucusuna Gelmek İçin [Tıkla!]()**
> :round_pushpin: **Komut hakkında detaylı bilgi için: -yardım**
> :bulb: **Discord Js Sürümü: 12.4.0**

**» Bağlantılar** 
**[Destek Sunucusu]()** **•** **[Botun Davet Linki]()** **•** **[Web-Site]( )**
`
    )

    .setFooter(client.user.username + "", client.user.avatarURL)
    .setTimestamp();

  return message.channel.send(EmbedNarcosCode).then;
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "Botun Komut Listesini Gösterir!",
  usage: "-yardım"
};
