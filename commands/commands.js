const Discord = require('discord.js')

module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('**voici la liste des commandes**')
        .setDescription('*certaines commandes sont disponible uniquement au staff*')
        .setColor('RED')
        .addField()
        .addField('!bonjour', 'pour dire bonjour au bot')
        .addField('!server-info', 'pour voirs les infos du serv')
        .addField()
        .addField()
        .addField()
        .addField('8ball', 'pile ou face avec comme réponse (oui) ou (non)')
        .setAuthor('NapoTwiixe')
        .setTimestamp())
    },
    name: 'commandes'
}

