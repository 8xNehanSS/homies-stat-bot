module.exports = {
    name: 'clearweekmsg',
    description: 'Clear weekly messages',
    aliases: [],
    public: true,
    async execute(bot, message, args, config) {
      if(message.channel.id != "923061932272017449") return 
      let data = await User.updateMany({ wmessages: { $exists: true} }, { $set: { wmessages: 0 }});
      let data4 = await User.updateMany({ wmessages: { $exists: true} }, { $set: { gen1messages: 0 }});
      let data5 = await User.updateMany({ wmessages: { $exists: true} }, { $set: { gen2messages: 0 }});
      let data1 = await User.updateMany({ test1: { $exists: true} }, { $set: { test1: "no" }});
      let data2 = await User.updateMany({ test2: { $exists: true} }, { $set: { test2: "no" }});
      let data3 = await User.updateMany({ test3: { $exists: true} }, { $set: { test3: "no" }});

      let author = await User.findOne({ guildID: message.guild.id, userID: message.author.id });
      author.wmessages = 0;
      author.test1 = "no";
      author.test2 = "no";
      author.test3 = "no";
      author.gen1messages = 0;
      author.gen2messages = 0;
            author.save();

      
      

      const ayy = bot.emojis.cache.get("942977992647401482");
      message.channel.send(`${ayy} **Clearing Weekly Stats** ${ayy}`).then((msg)=> {
        setTimeout(function(){
          msg.edit(`**Weekly Msg Stats Cleared**`);
        }, 3000)
      });
  }
}
