var prettySeconds = require('pretty-seconds');
module.exports = {
  name: 'vs',
  description: '',
  aliases: [],
  public: true,
  async execute(bot, message, args, config) {
    let member = await message.guild.members.fetch(message.mentions.users.first() || message.author)
    let data = await User.findOne({ guildID: message.guild.id, userID: member.user.id })
    const ava = member.user.displayAvatarURL() || "https://www.white-stamp.com/content/images/fo/w-login.png"
    if(!data) return bot.nodb(member.user);
    let vc0 = prettySeconds(data.vctotal).replace(/ hours/g, 'h').replace(/ minutes/g, 'm').replace(/ seconds/g, 's').replace(/and/g, '&').replace(/ hour/g, 'h').replace(/ minute/g, 'm').replace(/ days/g, 'd').replace(/ day/g, 'd').replace(/ second/g, 's')
    let vc1 = prettySeconds(data.vcweek).replace(/ hours/g, 'h').replace(/ minutes/g, 'm').replace(/ seconds/g, 's').replace(/and/g, '&').replace(/ hour/g, 'h').replace(/ minute/g, 'm').replace(/ days/g, 'd').replace(/ day/g, 'd').replace(/ second/g, 's')
    let pf = new Discord.MessageEmbed()
    .setTitle(`**Voice Statistics**: \`${member.user.username}\``).setColor(config.color).setThumbnail("https://cdn.discordapp.com/attachments/861614593444937739/958954846340382730/output-onlinepngtools.png")
    .setDescription(`Voice time: **${vc0}**\nThis week: **${vc1}**`)
   .setFooter({
    text: "Weekly stats reset at 10PM every Sunday"
    })
    message.channel.send({ embeds: [pf]});
  }
}
