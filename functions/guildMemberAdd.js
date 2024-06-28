function guildMemberAdd(member, Discord, ordinal) {
  //welcome card
  const user = member.user.tag;
  const memcount = member.guild.memberCount;
  const avatar = member.user.displayAvatarURL();

  const button5 = new Discord.MessageButton()
    .setLabel("JOIN VC")
    .setURL("https://discord.gg/cd6vJyY5bF")
    .setStyle("LINK");

  const ro1w = new Discord.MessageActionRow().addComponents([button5]);

  const exampleEmbed1 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`${user}`, `${avatar}`)
    .setFooter({ text: "Enjoy your stay!" })
    .setDescription(
      `Welcome to **LK Homies**! Feel free to talk in <#923061898281369650>,\n<#940880842761338930> and get roles from <#930905355679051836>\n\nYou are the **${ordinal(
        memcount
      )}** member`
    )
    .setThumbnail(`${avatar}`)
    .setTimestamp();
  member.guild.channels.cache.get("923061898281369650").send({
    content: `**Welcome <@${member.id}>!**`,
    embeds: [exampleEmbed1],
    components: [ro1w],
  });
  member.guild.channels.cache
    .get("930905355679051836")
    .send(`<@${member.id}>`)
    .then((msg) => {
      setTimeout(() => msg.delete(), 1000);
    })
    .catch();
  member.guild.channels.cache
    .get("940194706082639893")
    .send(`<@${member.id}>`)
    .then((msg) => {
      setTimeout(() => msg.delete(), 1000);
    })
    .catch();

  const exampleEmbed2 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Welcome to • LK Homies •")
    .setAuthor(`${user}`, `${avatar}`)
    .setFooter({ text: "Enjoy your stay!" })
    .setDescription(
      `Welcome to one of the best Sri Lankan servers on Discord! To get started, make sure you read the rules and agree to member screening pop up. If you are having trouble, please seek the help of a staff member.`
    )
    .setThumbnail(`${avatar}`)
    .setFooter(`Enjoy your stay!`);
  member.send({ content: `<@${member.id}>`, embeds: [exampleEmbed2] }).catch();
}

module.exports = { guildMemberAdd };
