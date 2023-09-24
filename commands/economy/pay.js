module.exports = {
    name: 'pay',
    description: 'Transfer points to another user',
    aliases: ["give"],
    public: true,
    async execute(bot, message, args, config) {

    let member = await message.guild.members.fetch(message.mentions.users.first())
    let getbal = args[1].replace(/k/g, '000').replace(/K/g, '000')
    if(!member) return message.channel.send(`User was not found.`)
    if(!getbal) return message.channel.send(`Indicate the number of points you want to give away.`)
    if(getbal < 1) return message.channel.send(`You cannot transfer that value`)
    if(isNaN(getbal)) return message.channel.send(`Please enter correct value.`)

    let author = await User.findOne({ guildID: message.guild.id, userID: message.author.id });
    let loc = await User.findOne({ guildID: message.guild.id, userID: member.id });
    if(!loc) return bot.nodb(member.user)
            
    if(author.money < getbal) return message.channel.send(`You don't have enough points.`)
    if(author.userID == member.id) return message.channel.send(`You cannot transfer points to yourself!`)
    if(member.user.bot) return message.channel.send(`Bots are not humans.`)
    var paymoney = getbal * 1;
    author.money -= Math.floor(parseInt(getbal));
    loc.money += Math.floor(parseInt(getbal));
    author.save(); loc.save()
    message.channel.send(`Successfully gave ${member.user} **${paymoney.toLocaleString()}** points`)
    }
}
