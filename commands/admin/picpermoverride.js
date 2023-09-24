module.exports = {
    name: 'opic',
    description: 'pic perms override',
    aliases: [],
    public: true,
    async execute(bot, message, args, config) {


      let autho = await message.guild.members.fetch(message.author)
      if (!autho.roles.cache.has('923061811782234163')) return message.react("⛔")    
    let member1 = await message.guild.members.fetch(message.mentions.users.first())
    if(!member1) return message.reply(`User was not found.`)
     
    if(member1.user.bot) return message.reply(`Bots are not humans.`)
    let npicrole = message.guild.roles.cache.get("939834272251011124");
    if (member1.roles.cache.has('939834272251011124')){
    member1.roles.remove(npicrole)
    let picrole = message.guild.roles.cache.get("939798434544779315");
      member1.roles.add(picrole)
    message.react("📸")} else { message.react("⚠")}
    

}
}
