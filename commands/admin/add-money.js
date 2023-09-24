module.exports = {
  name: 'addmoney',
  description: 'Add points to user',
  aliases: ["add"],
  public: false,
  async execute(bot, message, args, config) {
    let member = await message.guild.members.fetch(message.mentions.users.first() || message.author)
    let data = await User.findOne({ guildID: message.guild.id, userID: member.user.id });

    if(!data) return bot.nodb(member.user);
    let getbal = args[0].replace(/k/g, '000').replace(/K/g, '000')
    if(!getbal) return message.reply(`Indicate the number of points you want to add`);
    if(isNaN(getbal)) return message.reply(`This is not a number.`);
    if(member.user.bot) return message.reply(`Bots are not humans.`);
    var addmoney = getbal * 1;
    message.channel.send(`You have successfully added **${member.user}** , **${addmoney.toLocaleString()}**`)
    data.money += Math.floor(parseInt(getbal)); data.save();
  }
}
