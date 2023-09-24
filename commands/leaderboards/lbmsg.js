module.exports = {
    name: 'alb',
    description: 'alltime message leaderboard',
    aliases: [],
    public: true,
    async execute(bot, message, args, config) {
    User.find({ guildID: message.guild.id }).sort([['messages','descending']]).exec((err,res) => {
        let embed = new Discord.MessageEmbed().setTitle("**Alltime Messages Leaderboard**").setColor(config.color).setThumbnail("https://cdn.discordapp.com/attachments/861614593444937739/958954846340382730/output-onlinepngtools.png").setFooter("Since 15.Jan.2022").setTimestamp()
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
            let name10 = bot.users.cache.get(res[10].userID) || "User left server"
            let name11 = bot.users.cache.get(res[11].userID) || "User left server"
            let name12 = bot.users.cache.get(res[12].userID) || "User left server"
            let name13 = bot.users.cache.get(res[13].userID) || "User left server"
            let name14 = bot.users.cache.get(res[14].userID) || "User left server"
            embed.setDescription(`**1**. ${name0} - **${res[0].messages.toLocaleString()}** messages\n**2**. ${name1} - **${res[1].messages.toLocaleString()}** messages\n**3**. ${name2} - **${res[2].messages.toLocaleString()}** messages\n**4**. ${name3} - **${res[3].messages.toLocaleString()}** messages\n**5**. ${name4} - **${res[4].messages.toLocaleString()}** messages\n**6**. ${name5} - **${res[5].messages.toLocaleString()}** messages\n**7**. ${name6} - **${res[6].messages.toLocaleString()}** messages\n**8**. ${name7} - **${res[7].messages.toLocaleString()}** messages\n**9**. ${name8} - **${res[8].messages.toLocaleString()}** messages\n**10**. ${name9} - **${res[9].messages.toLocaleString()}** messages\n**11**. ${name10} - **${res[10].messages.toLocaleString()}** messages\n**12**. ${name11} - **${res[11].messages.toLocaleString()}** messages\n**13**. ${name12} - **${res[12].messages.toLocaleString()}** messages\n**14**. ${name13} - **${res[13].messages.toLocaleString()}** messages\n**15**. ${name14} - **${res[14].messages.toLocaleString()}** messages`)
        }
            message.channel.send({ embeds: [embed] })
        });
    }
}
