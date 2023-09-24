const ms = require('ms');
module.exports = {
    name: 'mute',
    description: '',
    aliases: [],
    public: false,
    async execute(bot, message, args, config) {
    
    let autho = await message.guild.members.fetch(message.author)
    if (!autho.roles.cache.has('923061813006975056')) return message.channel.send("Permission Denied")  
    if(!args[0]) return message.channel.send("Use the format **.mute @user [time]**")
    let member1 = await message.guild.members.fetch(message.mentions.users.first())
    if (member1.roles.cache.has('923061813006975056')) return message.channel.send("Permission Denied") 
    
    if(!member1) return message.channel.send(`User was not found.`)
     
    if(member1.user.bot) return message.channel.send(`Bots are not humans.`)
    
    if(!args[1]){
        let role1 = message.guild.roles.cache.get("923066918779363359");
        member1.roles.add(role1);    
        return bot.channels.fetch('923061929164025856').then(channel => channel.send(`**${autho.user.username}** muted **${member1.user.username}** for **${args[1]}**`))
    }
    
    const mms = ms(args.slice(1).join(` `));
    const muutestime = Date.now() + mms;
    const tyme = ms(mms, { long: true })
    if(isNaN(mms)) return message.channel.send("Input a valid time")
    
     Mutes.create({ guildID: message.guild.id, userID: member1.user.id, time: muutestime });
     let role1 = message.guild.roles.cache.get("923066918779363359");
     member1.roles.add(role1);
    message.channel.send(`**${member1.user.username}** muted for **${tyme}**`)
    bot.channels.fetch('923061929164025856').then(channel => channel.send(`**${autho.user.username}** muted **${member1.user.username}** for **${tyme}**`))
}}
    