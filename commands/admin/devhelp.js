module.exports = {
    name: "devhelp",
    description: "developer help",
    aliases: [],
    public: false,
    async execute(bot, message, args, config) {

        let embed = new Discord.MessageEmbed()
        .setColor(config.color)
        .setTitle("Developer Help")
        .setDescription(`${bot.commands.map(cmd => `\`${cmd.name}\``).join(", ")}`)
        .setFooter(`Total commands: ${bot.commands.size}`)
        .addField(`Bot Admins:`,`${config.owner.map(x => `\`${bot.users.cache.get(x).tag}\``).join(', ')}`)
        message.channel.send({ embeds: [embed] })
    }
};
