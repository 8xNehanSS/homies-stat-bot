var prettySeconds = require('pretty-seconds');
module.exports = {
  name: 'ms',
  description: 'View your Profile.',
  aliases: [],
  public: true,
  async execute(bot, message, args, config) {
    let member = await message.guild.members.fetch(message.mentions.users.first() || message.author)
    if(member.user.bot) return message.reply(`Bots are not humans.. or are they?`)
    let data = await User.findOne({ guildID: message.guild.id, userID: member.user.id })
    const ava = member.user.displayAvatarURL() || "https://www.white-stamp.com/content/images/fo/w-login.png"
    if(!data) return bot.nodb(member.user);
    var neededxp = data.level * 150;
    var neededxp1 = data.vclevel * 200;
    let vc0 = prettySeconds(data.vctotal).replace(/ hours/g, 'h').replace(/ minutes/g, 'm').replace(/ seconds/g, 's').replace(/and/g, '&').replace(/ hour/g, 'h').replace(/ minute/g, 'm').replace(/ days/g, 'd').replace(/ day/g, 'd').replace(/ second/g, 's')
    let vc1 = prettySeconds(data.vcweek).replace(/ hours/g, 'h').replace(/ minutes/g, 'm').replace(/ seconds/g, 's').replace(/and/g, '&').replace(/ hour/g, 'h').replace(/ minute/g, 'm').replace(/ days/g, 'd').replace(/ day/g, 'd').replace(/ second/g, 's')
    let pf = new Discord.MessageEmbed()
    .setTitle(`**Message Statistics**: \`${member.user.username}\``)
    .setColor(config.color).setThumbnail("https://cdn.discordapp.com/attachments/861614593444937739/958954846340382730/output-onlinepngtools.png")
    .setDescription(`Total: **${data.messages.toLocaleString() || 0}**  messages\nThis week: **${data.wmessages.toLocaleString() || 0}**  messages\nGeneral 1: **${data.gen1messages.toLocaleString() || 0}**  messages\nGeneral 2: **${data.gen2messages.toLocaleString() || 0}**  messages`)
   .setFooter("Weekly stats reset at 10PM every Sunday")
    message.channel.send({ embeds: [pf] })
  }
}
