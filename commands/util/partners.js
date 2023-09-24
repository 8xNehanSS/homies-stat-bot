module.exports = {
    name: 'partner',
    description: 'partners list',
    aliases: [],
    public: true,
    async execute(bot, message, args, config) {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Partner Team 🤝`)
        .setColor(config.color)
        .setFooter(`Partner Team - LK Homies`)
        .setDescription(`**Partner Managers**\n> <@564436985071271956>\n> <@855732905141600298>\n\n**Partner Team**\n> None\nContact staff to register as a partner team member!`)
     message.channel.send({ embeds: [embed] })
      
      
    }
  }
  