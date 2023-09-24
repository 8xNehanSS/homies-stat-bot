module.exports = {
    name: 'shutdown',
    description: 'shutdown the bot',
    aliases: [],
    public: false,
    async execute(bot, message, args, config) {
        
     let member = message.author.id
     if(member != "564436985071271956") return;
     message.channel.send(`\`[SHUTDOWN]\` Manual shutdown engaged.`)
     bot.channels.fetch('923061932272017449').then(channel => channel.send(`\`[SHUTDOWN]\` Manual shutdown engaged.`)

)
await bot.destroy();
   
    }
  }
  