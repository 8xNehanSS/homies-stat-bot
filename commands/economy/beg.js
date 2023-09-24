module.exports = {
    name: 'beg',
    description: 'beg for points',
    aliases: [],
    public: true,
    async execute(bot, message, args, config) {
      if(message.channel.id === "923061898281369650" || message.channel.id === "940880842761338930"){
        message.delete();
        return message.channel.send("Use this cmd in bots").then(msg => {
          setTimeout(() => msg.delete(), 5000)
        })
        .catch();}
      const botstrike = Math.floor(Math.random() * 1000) + 1; 
      if(botstrike >= 500) return message.channel.send(`**${message.author}** begged and got nothing..`);
      let data = await User.findOne({ guildID: message.guild.id, userID: message.author.id });
      const worked = Math.floor(Math.random() * 30) + 1;
      message.channel.send(`You begged and got **${worked.toLocaleString()}** points`);
      data.money += parseInt(worked); data.save()
  }
}
