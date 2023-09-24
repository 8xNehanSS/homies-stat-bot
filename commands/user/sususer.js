module.exports = {
    name: 'vsus',
    description: 'view ur votes.',
    aliases: [],
    public: true,
    async execute(bot, message, args, config) {
      let member = await message.guild.members.fetch(message.mentions.users.first() || message.author)
      if(member.user.bot) return message.channel.send(`Bots are not humans.. or are they?`)
      let data = await User.findOne({ guildID: message.guild.id, userID: member.user.id })
  
      if(!data) return bot.nodb(member.user);
      if(!message.mentions.users.first()) return message.channel.send(`You have **${data.susvote.toLocaleString() || 0}** Votes and **${data.impact}** Impact`)
      message.channel.send(`${member} has **${data.susvote.toLocaleString() || 0}** Votes and **${data.impact}** Impact`)
    }
  }
  