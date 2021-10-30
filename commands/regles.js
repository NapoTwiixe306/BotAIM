const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('voici la liste des regles disponibles')
            .setDescription('Les regles sont mise pour avoir une meilleur ambiance sur le server ')
            .setColor('RANDOM')
            .addField()
            .addField()
            .setAuthor('NapoTwiixe')
            .setTimestamp()
            .setURL('https://google.fr'))
    },
    name: 'regles',
    guildOnly: true
}