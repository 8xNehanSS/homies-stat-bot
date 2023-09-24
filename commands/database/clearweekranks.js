module.exports = {
    name: 'clearweekranks',
    description: 'Clear weekly ranks',
    aliases: [],
    public: true,
    async execute(bot, message, args, config) {
      if(message.channel.id != "923061932272017449") return 
        let data5 = await Guild.findOne({ guildID: message.guild.id })
        data5.rankss12 = 0;
        data5.save();
  
      

      const ayy = bot.emojis.cache.get("942977992647401482");
      message.channel.send(`${ayy} **Clearing Weekly Stats** ${ayy}`).then((msg)=> {
        setTimeout(function(){
          msg.edit(`**Weekly Rank Stats Cleared**`);
        }, 3000)
      });
  }
}
