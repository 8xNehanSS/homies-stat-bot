module.exports = {
    name: 'wlb',
    description: 'weekly message leaderboard',
    aliases: [],
    public: true,
    async execute(bot, message, args, config) {
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
            message.channel.send({ embeds: [embed] })
        });
    }
}
