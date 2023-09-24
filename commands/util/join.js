module.exports = {
    name: 'join',
    description: 'date joined',
    aliases: [],
    public: true,
    async execute(bot, message, args, config) {
        
     let member = await message.guild.members.fetch(message.mentions.users.first() || message.author)
     const joindat = member.joinedAt;
     const days = (Date.now() - joindat) / 1000 / 60 / 60 / 24;
     const daysr = Math.round(days);   
     let embed = new Discord.MessageEmbed()
        .setTitle(`Join Time ⌚`)
        .setColor(config.color)
        .setDescription(`<@${member.id}> joined **${daysr}** days ago`)
     message.channel.send({ embeds: [embed] })
      
    }
  }
  