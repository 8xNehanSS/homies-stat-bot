const ms = require('ms');
const prettyMilliseconds = require('pretty-ms');
module.exports = {
    name: 'gamble',
    description: 'Gamble points',
    aliases: ["roulette"],
    public: true,
    async execute(bot, message, args, config) {

        if(message.channel.id === "923061898281369650" || message.channel.id === "940880842761338930"){
            message.delete();
            return message.channel.send("Use this cmd in bots").then(msg => {
              setTimeout(() => msg.delete(), 5000)
            })
            .catch();}

    
    let author = await User.findOne({ guildID: message.guild.id, userID: message.author.id });
    if(author._time1 == null || author.messages - author._time1 >= "2") {
       
    if(args[0] != null) {
        let gambal = args[0].replace(/k/g, '000').replace(/K/g, '000')
        if(!isNaN(gambal)) { if(gambal < 50 || gambal > 500000) {message.channel.send(`You cannot gamble less than **50** points and max **500k** points`)} else { 
        if(author.money < gambal) { message.channel.send(`You don't have that many points.`)} else {
            const botstrike = Math.floor(Math.random() * 35) + 1;
            const userstrike = Math.floor(Math.random() * 35) + 6;
            if(botstrike > userstrike) {
              var gambmoney = gambal * 1;
                let embed = new Discord.MessageEmbed()
                .setColor(config.color)
                .setDescription(`**${message.author.username}** lost **${gambmoney.toLocaleString()}** points by gambling`).setFooter(`${userstrike} - ${botstrike}`)
                author.money -= Math.floor(parseInt(gambal));
                const msgamt = author.messages;
                author._time1 = msgamt;
                author.save();
                message.channel.send({ embeds: [embed] });

            } else {if(userstrike > botstrike){ 
                const percentage = Math.floor(Math.random() * 35) + 100;
                const gimball = gambal/2;
                var randomoney = gimball * percentage/100;
                var intvalue = Math.round(randomoney);
                let embed = new Discord.MessageEmbed()
                .setColor(config.color)
                .setDescription(`**${message.author.username}** won **${intvalue.toLocaleString()}** points by gambling`).setFooter(`${userstrike} - ${botstrike}`)
                author.money += Math.floor(parseInt(intvalue));
                const msgamt = author.messages;
                author._time1 = msgamt;
                author.save();
                message.channel.send({ embeds: [embed] });


            } else {let embed = new Discord.MessageEmbed()
                .setColor(config.color)
                .setDescription(`**${message.author.username}** thats a **TIE** `).setFooter(`${userstrike} - ${botstrike}`)
                message.channel.send({ embeds: [embed] });}
        
        
        }
        


        }
    }
    } else message.channel.send(`Please enter correct value.`)
    } else message.channel.send(`Indicate the number of points you want to gamble.`)

    
} else {const msgneed = (author._time1 + 2) - author.messages;
    message.channel.send(`Send **${msgneed}** messages in general before gambling again!`)} }
}
