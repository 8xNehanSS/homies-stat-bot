module.exports = {
    name: 'status',
    description: '',
    aliases: [],
    public: true,
    async execute(bot, message, args, config) {

        let guild = await Guild.findOne({ guildID: message.guild.id });
      let autho = await message.guild.members.fetch(message.author)
      if (!autho.roles.cache.has('923061811782234163')) return message.react("⛔")    

     const type = guild.statustype;
     const text = guild.status;
     const sign = guild.sign;
      if(guild.statustype === "W"){
        bot.user.setActivity(`${text}`, {type: "WATCHING"});
        bot.user.setPresence({status: `${sign}`});
      }
      if(guild.statustype === "P"){
        bot.user.setActivity(`${text}`, {type: "PLAYING"});
        bot.user.setPresence({status: `${sign}`});
    }  
    if(guild.statustype === "L"){
        bot.user.setActivity(`${text}`, {type: "LISTENING"});
        bot.user.setPresence({status: `${sign}`});
    }
     
     message.channel.send("Sucessfully updated.w")
    

}
}
