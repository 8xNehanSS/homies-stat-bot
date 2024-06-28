async function afkCommands(message, Afk, ms) {
  if (message.author.bot) return;
  if (!message.content.startsWith(".")) {
    let afkuser = await Afk.findOne({
      guildID: message.guild.id,
      userID: message.author.id,
    });
    if (afkuser) {
      let afkuser1 = await Afk.deleteOne({
        guildID: message.guild.id,
        userID: message.author.id,
      });
      message.channel
        .send(`\`${message.author.username}\` Welcome back - AFK Removed`)
        .then((msg) => {
          setTimeout(() => msg.delete(), 10000);
        });
    }
  }
  let member = await message.guild.members.fetch(
    message.mentions.users.first()
  );
  if (!message.mentions.users.first()) {
    return;
  } else {
    let afkuser1 = await Afk.findOne({
      guildID: message.guild.id,
      userID: member.user.id,
    });
    if (!afkuser1) {
      return;
    } else {
      const afktimeeee = Date.now() - afkuser1.time;
      message.channel.send(
        `\`${member.user.username}\` ${afkuser1.messageafk} - AFK for ${ms(
          afktimeeee
        )}`
      );
    }
  }
}

module.exports = afkCommands;
