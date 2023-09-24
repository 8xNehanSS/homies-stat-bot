const prettyMilliseconds = require('pretty-ms');
var prettySeconds = require('pretty-seconds');
module.exports = {
    name: 'vcs',
    description: 'voice leaderboard',
    aliases: [],
    public: true,
    async execute(bot, message, args, config) {
    User.find({ guildID: message.guild.id }).sort([['vctotal','descending']]).exec((err,res) => {
        let embed = new Discord.MessageEmbed().setTitle("**Alltime Voice Activity Leaderboard**").setColor(config.color).setThumbnail("https://cdn.discordapp.com/attachments/861614593444937739/958954846340382730/output-onlinepngtools.png").setFooter("Total VC Time Since 13-02-2022").setTimestamp()
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

            let vc0 = prettySeconds(res[0].vctotal).replace(/ hours/g, 'h').replace(/ minutes/g, 'm').replace(/ seconds/g, 's').replace(/and/g, '&').replace(/ hour/g, 'h').replace(/ minute/g, 'm').replace(/ days/g, 'd').replace(/ day/g, 'd').replace(/ second/g, 's')
            let vc1 = prettySeconds(res[1].vctotal).replace(/ hours/g, 'h').replace(/ minutes/g, 'm').replace(/ seconds/g, 's').replace(/and/g, '&').replace(/ hour/g, 'h').replace(/ minute/g, 'm').replace(/ days/g, 'd').replace(/ day/g, 'd').replace(/ second/g, 's')
            let vc2 = prettySeconds(res[2].vctotal).replace(/ hours/g, 'h').replace(/ minutes/g, 'm').replace(/ seconds/g, 's').replace(/and/g, '&').replace(/ hour/g, 'h').replace(/ minute/g, 'm').replace(/ days/g, 'd').replace(/ day/g, 'd').replace(/ second/g, 's')
            let vc3 = prettySeconds(res[3].vctotal).replace(/ hours/g, 'h').replace(/ minutes/g, 'm').replace(/ seconds/g, 's').replace(/and/g, '&').replace(/ hour/g, 'h').replace(/ minute/g, 'm').replace(/ days/g, 'd').replace(/ day/g, 'd').replace(/ second/g, 's')
            let vc4 = prettySeconds(res[4].vctotal).replace(/ hours/g, 'h').replace(/ minutes/g, 'm').replace(/ seconds/g, 's').replace(/and/g, '&').replace(/ hour/g, 'h').replace(/ minute/g, 'm').replace(/ days/g, 'd').replace(/ day/g, 'd').replace(/ second/g, 's')
            let vc5 = prettySeconds(res[5].vctotal).replace(/ hours/g, 'h').replace(/ minutes/g, 'm').replace(/ seconds/g, 's').replace(/and/g, '&').replace(/ hour/g, 'h').replace(/ minute/g, 'm').replace(/ days/g, 'd').replace(/ day/g, 'd').replace(/ second/g, 's')
            let vc6 = prettySeconds(res[6].vctotal).replace(/ hours/g, 'h').replace(/ minutes/g, 'm').replace(/ seconds/g, 's').replace(/and/g, '&').replace(/ hour/g, 'h').replace(/ minute/g, 'm').replace(/ days/g, 'd').replace(/ day/g, 'd').replace(/ second/g, 's')
            let vc7 = prettySeconds(res[7].vctotal).replace(/ hours/g, 'h').replace(/ minutes/g, 'm').replace(/ seconds/g, 's').replace(/and/g, '&').replace(/ hour/g, 'h').replace(/ minute/g, 'm').replace(/ days/g, 'd').replace(/ day/g, 'd').replace(/ second/g, 's')
            let vc8 = prettySeconds(res[8].vctotal).replace(/ hours/g, 'h').replace(/ minutes/g, 'm').replace(/ seconds/g, 's').replace(/and/g, '&').replace(/ hour/g, 'h').replace(/ minute/g, 'm').replace(/ days/g, 'd').replace(/ day/g, 'd').replace(/ second/g, 's')
            let vc9 = prettySeconds(res[9].vctotal).replace(/ hours/g, 'h').replace(/ minutes/g, 'm').replace(/ seconds/g, 's').replace(/and/g, '&').replace(/ hour/g, 'h').replace(/ minute/g, 'm').replace(/ days/g, 'd').replace(/ day/g, 'd').replace(/ second/g, 's')


            embed.setDescription(`**1**. ${name0} - **${vc0}**\n**2**. ${name1} - **${vc1}**\n**3**. ${name2} - **${vc2}**\n**4**. ${name3} - **${vc3}**\n**5**. ${name4} - **${vc4}**\n**6**. ${name5} - **${vc5}**\n**7**. ${name6} - **${vc6}**\n**8**. ${name7} - **${vc7}**\n**9**. ${name8} - **${vc8}**\n**10**. ${name9} - **${vc9}**\n`)
        }
            message.channel.send({ embeds: [embed] })
        });
    }
}
