const ms = require('ms');
module.exports = {
    name: 'unmute',
    description: '',
    aliases: [],
    public: false,
    async execute(bot, message, args, config) {
    
    let autho = await message.guild.members.fetch(message.author)
    if (!autho.roles.cache.has('923061813006975056')) return message.channel.send("Permission Denied")  
    if(!args[0]) return message.channel.send("Use the format **.unmute @user**")
    let member1 = await message.guild.members.fetch(message.mentions.users.first())
    if (member1.roles.cache.has('923061813006975056')) return message.channel.send("Permission Denied") 
    
    if(!member1) return message.channel.send(`User was not found.`)
     
    if(member1.user.bot) return message.channel.send(`Bots are not humans.`)
    
    if(!member1.roles.cache.has('923066918779363359')) return message.channel.send(`${member1} is not **muted**`)
        let role1 = message.guild.roles.cache.get("923066918779363359");
        member1.roles.remove(role1);    
        bot.channels.fetch('923061929164025856').then(channel => channel.send(`**${autho.user.username}** unmuted **${member1.user.username}**`))
        message.channel.send(`${member1} is now **unmuted**`)
    
   
}}
    