module.exports = {
    name: 'test',
    description: '',
    aliases: [],
    public: false,
    async execute(bot, message, args, config) {
      let member = message.guild.members.cache.get(message.author.id);
      const user = member.user.tag;
const memcount = member.guild.memberCount;
const avatar = member.user.displayAvatarURL();

const button5 = new Discord.MessageButton()
        .setLabel('JOIN VC')
        .setURL("https://discord.gg/cd6vJyY5bF")
        .setStyle('LINK')

const ro1w = new Discord.MessageActionRow()
        .addComponents([button5])

 const exampleEmbed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setAuthor(`${user}`, `${avatar}`)
  .setFooter({text: "Enjoy your stay!"})
	.setDescription(`Welcome to **LK Homies**! Feel free to talk in <#923061898281369650>,\n<#940880842761338930> and get roles from <#930905355679051836>\n\nYou are the **332th** member`)
	.setThumbnail(`${avatar}`)
	.setTimestamp();
  message.channel.send({ content: `**Welcome <@${member.id}>!**`, embeds: [exampleEmbed1], components : [ro1w] })
    }
  }
  