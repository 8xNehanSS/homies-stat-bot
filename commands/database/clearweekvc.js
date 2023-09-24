module.exports = {
    name: 'clearweekvc',
    description: 'Clear weekly voice stat',
    aliases: [],
    public: true,
    async execute(bot, message, args, config) {
      if(message.channel.id != "923061932272017449") return 
      let data = await User.updateMany({ vcweek: { $exists: true} }, { $set: { vcweek: 0 }});
      

      let author = await User.findOne({ guildID: message.guild.id, userID: message.author.id });
      author.vcweek = 0;
            author.save();

      
      

      const ayy = bot.emojis.cache.get("942977992647401482");
      message.channel.send(`${ayy} **Clearing Weekly Stats** ${ayy}`).then((msg)=> {
        setTimeout(function(){
          msg.edit(`**Weekly VC Stats Cleared**`);
        }, 3000)
      });
  }
}
