module.exports = {
    name: 'lbvault',
    description: 'vault leaderboard',
    aliases: ["leadersvault","vlb"],
    public: true,
    async execute(bot, message, args, config) {
    User.find({ guildID: message.guild.id }).sort([['vmoney','descending']]).exec((err,res) => {
        let embed = new Discord.MessageEmbed().setTitle("**Vault Points Leaderboard**").setColor(config.color).setThumbnail("https://cdn.discordapp.com/attachments/861614593444937739/927832635613536276/Untitled1.jpg").setFooter("Richest members of LK Homies").setTimestamp()
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
            embed.setDescription(`**1**. ${name0} - **${res[0].vmoney.toLocaleString()}** points\n**2**. ${name1} - **${res[1].vmoney.toLocaleString()}** points\n**3**. ${name2} - **${res[2].vmoney.toLocaleString()}** points\n**4**. ${name3} - **${res[3].vmoney.toLocaleString()}** points\n**5**. ${name4} - **${res[4].vmoney.toLocaleString()}** points\n**6**. ${name5} - **${res[5].vmoney.toLocaleString()}** points\n**7**. ${name6} - **${res[6].vmoney.toLocaleString()}** points\n**8**. ${name7} - **${res[7].vmoney.toLocaleString()}** points\n**9**. ${name8} - **${res[8].vmoney.toLocaleString()}** points\n**10**. ${name9} - **${res[9].vmoney.toLocaleString()}** points\n`)
        }
            message.channel.send({ embeds: [embed] });
        });
    }
}
