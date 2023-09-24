module.exports = {
    name: "customhelp",
    description: "custom cmd help",
    aliases: [],
    public: true,
    async execute(bot, message, args, config) {
        let guild = await Guild.findOne({ guildID: message.guild.id });
        let autho = await message.guild.members.fetch(message.author)
        if (!autho.roles.cache.has('923061813006975056')) return
        let embed = new Discord.MessageEmbed()
         .setColor(config.color)
         .setTitle(`Custom Commands`)
         guild.usedcmd.forEach((w, i) => {
        embed.addField(`**${i + 1}**`, `**${guild.usedcmd[i]}**`, true);
    });
    message.channel.send({ embeds: [embed] }).then(msg => {
        setTimeout(() => msg.delete(), 10000)
      })
    }
};
