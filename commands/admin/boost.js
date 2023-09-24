module.exports = {
    name: 'boost',
    description: 'boosters description',
    aliases: [],
    public: false,
    async execute(bot, message, args, config) {
      let member = await message.guild.members.fetch(message.mentions.users.first() || message.author)
      if(member.user.bot) return message.reply(`Bots are not humans.. or are they?`)
      let data = await User.findOne({ guildID: message.guild.id, userID: member.user.id })
  
      if(!data) return bot.nodb(member.user);
      data.vmoney += Math.floor(parseInt(100000)); data.save();
      let embed = new Discord.MessageEmbed()
      .setTitle(`Thank you for boosting our Server!`).setColor("#f47fff")
      .setDescription(`You've been awarded with **100,000** points for boosting our server!`)
      .setImage("https://cdn.discordapp.com/attachments/943167636127252512/1010941434058244227/discord-nitro.gif")
      .setFooter('Boosters get special perks! Boost now to get them!')
      .setTimestamp()
  
      bot.channels.fetch('938306367440162816').then(channel => channel.send({ content: `<@${member.user.id}>`, embeds: [embed] }))
    }
  }
  