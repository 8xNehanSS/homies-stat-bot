module.exports = {
    name: 'afk',
    description: '',
    aliases: [],
    public: true,
    async execute(bot, message, args, config) {
        
     let member = await message.guild.members.fetch(message.author)
     let afkuser = await Afk.findOne({ guildID: message.guild.id, userID: message.author.id });
     if(afkuser){ let afkuser = await Afk.findOne({ guildID: message.guild.id, userID: message.author.id });
     if(afkuser){let afkuser1 = await Afk.deleteOne({ guildID: message.guild.id, userID: message.author.id }); message.channel.send(`\`${message.author.username}\` Welcome back - AFK Removed`).then(msg => {
       setTimeout(() => msg.delete(), 10000)
     })} return;}

     let context = args.slice(0).join(` `)
    
    if(!context){ if(!afkuser) { Afk.create({ guildID: message.guild.id, userID: message.author.id, time: Date.now() }); } message.channel.send(`\`${message.author.username}\` AFK Set - Do not ping!`); return; } else {
    if(!afkuser) { Afk.create({ guildID: message.guild.id, userID: message.author.id, messageafk: `${context}`, time: Date.now() }); } message.channel.send(`\`${message.author.username}\` AFK Set - ${context}`); return; }
      
    }
  }
  