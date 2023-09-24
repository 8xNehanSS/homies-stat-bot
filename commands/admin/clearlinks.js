module.exports = {
  name: 'cl',
  description: 'clearlinks',
  aliases: [],
  public: true,
  async execute(bot, message, args, config) {
    let autho = await message.guild.members.fetch(message.author)
    if (!autho.roles.cache.has('923061813006975056')) return  
    message.delete();
      const channel1 = bot.channels.cache.get(message.channel)
      const messages1 = await message.channel.messages.fetch({ limit: 30 });
      messages1.forEach(msg => { 
          const links = [`https://`,`http://`] 
          if (msg.content.includes(`https://`)) {msg.delete();}
          if (msg.content.includes(`http://`)) {msg.delete();}
          if (msg.content.includes(`www.`)) {msg.delete();}
         });
    const ayy = bot.emojis.cache.get("942977992647401482");
    message.channel.send(`${ayy} **Clearing links** ${ayy}`).then(msg => {
      setTimeout(() => msg.delete(), 5000)
    })
    
  }
}
