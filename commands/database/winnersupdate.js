var ordinal = require('ordinal');
var prettySeconds = require('pretty-seconds');
module.exports = {
    name: 'winnersup',
    description: '',
    aliases: [],
    public: true,
    async execute(bot, message, args, config) {
    if(message.channel.id != "923061932272017449") return 
    
    User.find({ guildID: message.guild.id }).sort([['wmessages','descending']]).exec((err,res) => {
        let embed = new Discord.MessageEmbed().setTitle("**Weekly Messages Leaderboard**").setColor(config.color).setThumbnail("https://cdn.discordapp.com/attachments/861614593444937739/958954846340382730/output-onlinepngtools.png").setFooter("Resets every Sunday 10PM IST").setTimestamp()
        if(res.length === 0){ embed.setDescription('Unfortunately the table for this server is empty.') }
        else {
            let name0 = bot.users.cache.get(res[0].userID) || "User left server"
            let name1 = bot.users.cache.get(res[1].userID) || "User left server"
            let name2 = bot.users.cache.get(res[2].userID) || "User left server"
            let name3 = bot.users.cache.get(res[3].userID) || "User left server"
            let name4 = bot.users.cache.get(res[4].userID) || "User left server"
            let name5 = bot.users.cache.get(res[5].userID) || "User left server"
            let name6 = bot.users.cache.get(res[6].userID) || "User left server"
            let name7 = bot.users.cache.get(res[7].userID) || "User left server"
            let name8 = bot.users.cache.get(res[8].userID) || "User left server"
            let name9 = bot.users.cache.get(res[9].userID) || "User left server"
            embed.setDescription(`**1**. ${name0} - **${res[0].wmessages.toLocaleString()}** messages\n**2**. ${name1} - **${res[1].wmessages.toLocaleString()}** messages\n**3**. ${name2} - **${res[2].wmessages.toLocaleString()}** messages\n**4**. ${name3} - **${res[3].wmessages.toLocaleString()}** messages\n**5**. ${name4} - **${res[4].wmessages.toLocaleString()}** messages\n**6**. ${name5} - **${res[5].wmessages.toLocaleString()}** messages\n**7**. ${name6} - **${res[6].wmessages.toLocaleString()}** messages\n**8**. ${name7} - **${res[7].wmessages.toLocaleString()}** messages\n**9**. ${name8} - **${res[8].wmessages.toLocaleString()}** messages\n**10**. ${name9} - **${res[9].wmessages.toLocaleString()}** messages\n`)
        }
        bot.channels.fetch('973925149516640266').then(channel => channel.send({ embeds: [embed] }));
        });

        User.find({ guildID: message.guild.id }).sort([['vcweek','descending']]).exec((err,res) => {
            let embed = new Discord.MessageEmbed().setTitle("**Weekly Voice Activity Leaderboard**").setColor(config.color).setThumbnail("https://cdn.discordapp.com/attachments/861614593444937739/958954846340382730/output-onlinepngtools.png").setFooter("Resets every Sunday 10PM IST").setTimestamp()
            if(res.length === 0){ embed.setDescription('Unfortunately the table for this server is empty.') }
            else {
                let name0 = bot.users.cache.get(res[0].userID) || "User left server"
                let name1 = bot.users.cache.get(res[1].userID) || "User left server"
                let name2 = bot.users.cache.get(res[2].userID) || "User left server"
                let name3 = bot.users.cache.get(res[3].userID) || "User left server"
                let name4 = bot.users.cache.get(res[4].userID) || "User left server"
                let name5 = bot.users.cache.get(res[5].userID) || "User left server"
                let name6 = bot.users.cache.get(res[6].userID) || "User left server"
                let name7 = bot.users.cache.get(res[7].userID) || "User left server"
                let name8 = bot.users.cache.get(res[8].userID) || "User left server"
                let name9 = bot.users.cache.get(res[9].userID) || "User left server"
    
                let vc0 = prettySeconds(res[0].vcweek).replace(/ hours/g, 'h').replace(/ minutes/g, 'm').replace(/ seconds/g, 's').replace(/and/g, '&').replace(/ hour/g, 'h').replace(/ minute/g, 'm').replace(/ days/g, 'd').replace(/ day/g, 'd').replace(/ second/g, 's')
                let vc1 = prettySeconds(res[1].vcweek).replace(/ hours/g, 'h').replace(/ minutes/g, 'm').replace(/ seconds/g, 's').replace(/and/g, '&').replace(/ hour/g, 'h').replace(/ minute/g, 'm').replace(/ days/g, 'd').replace(/ day/g, 'd').replace(/ second/g, 's')
                let vc2 = prettySeconds(res[2].vcweek).replace(/ hours/g, 'h').replace(/ minutes/g, 'm').replace(/ seconds/g, 's').replace(/and/g, '&').replace(/ hour/g, 'h').replace(/ minute/g, 'm').replace(/ days/g, 'd').replace(/ day/g, 'd').replace(/ second/g, 's')
                let vc3 = prettySeconds(res[3].vcweek).replace(/ hours/g, 'h').replace(/ minutes/g, 'm').replace(/ seconds/g, 's').replace(/and/g, '&').replace(/ hour/g, 'h').replace(/ minute/g, 'm').replace(/ days/g, 'd').replace(/ day/g, 'd').replace(/ second/g, 's')
                let vc4 = prettySeconds(res[4].vcweek).replace(/ hours/g, 'h').replace(/ minutes/g, 'm').replace(/ seconds/g, 's').replace(/and/g, '&').replace(/ hour/g, 'h').replace(/ minute/g, 'm').replace(/ days/g, 'd').replace(/ day/g, 'd').replace(/ second/g, 's')
                let vc5 = prettySeconds(res[5].vcweek).replace(/ hours/g, 'h').replace(/ minutes/g, 'm').replace(/ seconds/g, 's').replace(/and/g, '&').replace(/ hour/g, 'h').replace(/ minute/g, 'm').replace(/ days/g, 'd').replace(/ day/g, 'd').replace(/ second/g, 's')
                let vc6 = prettySeconds(res[6].vcweek).replace(/ hours/g, 'h').replace(/ minutes/g, 'm').replace(/ seconds/g, 's').replace(/and/g, '&').replace(/ hour/g, 'h').replace(/ minute/g, 'm').replace(/ days/g, 'd').replace(/ day/g, 'd').replace(/ second/g, 's')
                let vc7 = prettySeconds(res[7].vcweek).replace(/ hours/g, 'h').replace(/ minutes/g, 'm').replace(/ seconds/g, 's').replace(/and/g, '&').replace(/ hour/g, 'h').replace(/ minute/g, 'm').replace(/ days/g, 'd').replace(/ day/g, 'd').replace(/ second/g, 's')
                let vc8 = prettySeconds(res[8].vcweek).replace(/ hours/g, 'h').replace(/ minutes/g, 'm').replace(/ seconds/g, 's').replace(/and/g, '&').replace(/ hour/g, 'h').replace(/ minute/g, 'm').replace(/ days/g, 'd').replace(/ day/g, 'd').replace(/ second/g, 's')
                let vc9 = prettySeconds(res[9].vcweek).replace(/ hours/g, 'h').replace(/ minutes/g, 'm').replace(/ seconds/g, 's').replace(/and/g, '&').replace(/ hour/g, 'h').replace(/ minute/g, 'm').replace(/ days/g, 'd').replace(/ day/g, 'd').replace(/ second/g, 's')
            
                embed.setDescription(`**1**. ${name0} - **${vc0}**\n**2**. ${name1} - **${vc1}**\n**3**. ${name2} - **${vc2}**\n**4**. ${name3} - **${vc3}**\n**5**. ${name4} - **${vc4}**\n**6**. ${name5} - **${vc5}**\n**7**. ${name6} - **${vc6}**\n**8**. ${name7} - **${vc7}**\n**9**. ${name8} - **${vc8}**\n**10**. ${name9} - **${vc9}**\n`)
            }
            bot.channels.fetch('973925149516640266').then(channel => channel.send({ embeds: [embed] }));
            });    
      message.channel.send("**Winners Updated**")
    }
}
