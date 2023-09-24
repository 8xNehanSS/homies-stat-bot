module.exports = {
    name: 'npic',
    description: 'removepic perms',
    aliases: [],
    public: true,
    async execute(bot, message, args, config) {

      let autho = await message.guild.members.fetch(message.author)
      if (!autho.roles.cache.has('923061813006975056')) return message.react("⛔")   
      let member1 = await message.guild.members.fetch(message.mentions.users.first())
    if(!member1) return message.reply(`User was not found.`)
     
    if(member1.user.bot) return message.reply(`Bots are not humans.`)
    let picrole = message.guild.roles.cache.get("939798434544779315");
      member1.roles.remove(picrole)
    let npicrole = message.guild.roles.cache.get("939834272251011124");
      member1.roles.add(npicrole)  
    message.react("❌")
    }
}
