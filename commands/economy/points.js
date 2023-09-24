module.exports = {
    name: 'points',
    description: 'view ur points.',
    aliases: ["p"],
    public: true,
    async execute(bot, message, args, config) {
      let member = await message.guild.members.fetch(message.mentions.users.first() || message.author)
      if(member.user.bot) return message.channel.send(`Bots are not humans.. or are they?`)
      let data = await User.findOne({ guildID: message.guild.id, userID: member.user.id })
  
      if(!data) return bot.nodb(member.user);
      if(!message.mentions.users.first()) return message.channel.send(`You have **${data.money.toLocaleString() || 0}** points`)
      message.channel.send(`${member} has **${data.money.toLocaleString() || 0}** points`)
    }
  }
  