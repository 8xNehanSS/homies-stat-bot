module.exports = {
    name: 'pic',
    description: 'addpic perms',
    aliases: [],
    public: true,
    async execute(bot, message, args, config) {
    
    let member = await message.guild.members.fetch(message.mentions.users.first() || message.author)
      if(member.user.bot) return message.channel.send(`Bots are not humans.. or are they?`)
      let data = await User.findOne({ guildID: message.guild.id, userID: member.user.id })
  
      if(!data) return bot.nodb(member.user);
        if(data.level<10) return message.react("⛔");

        // Add the role if the mentioned user's level is 10 or higher
        let picrole = message.guild.roles.cache.get("939798434544779315");
        member.roles.add(picrole);
        message.react("📸");
        message.channel.send(`Success`);
    

}
}
