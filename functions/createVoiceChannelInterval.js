function createVoiceChannelInterval(bot, guildId, channelId, intervalDuration) {
  setInterval(() => {
    const guild = bot.guilds.cache.get(guildId);
    if (!guild) {
      console.error("Guild not found!");
      return;
    }
    const voiceChannel = guild.channels.cache.get(channelId);
    const membersInChannel = voiceChannel.members.size;

    if (membersInChannel >= 2) {
      voiceChannel.members.forEach(handleVoiceChannelXP);
    }
  }, intervalDuration);
}

async function handleVoiceChannelXP(member) {
  if (member.user.bot) return;

  const user = await User.findOne({
    guildID: member.guild.id,
    userID: member.user.id,
  });
  if (!user) {
    User.create({ guildID: member.guild.id, userID: member.user.id });
    return bot.channels
      .fetch("923061932272017449")
      .then((channel) =>
        channel.send(
          `\`[✅ DataBase]\` **${member.user.username}** (${member.user.id}) was successfully added to the database`
        )
      );
  }

  if (!member.voice.selfMute) {
    const randomXP = Math.floor(Math.random() * 10) + 3;
    user.money += randomXP;
    user.xpvc += 3;
    user.vcweek += 4;
    user.vctotal += 4;

    const neededxp = user.vclevel * 250;

    if (user.xpvc >= neededxp) {
      const level123 = user.vclevel + 1;

      if (
        [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 125].includes(level123)
      ) {
        bot.channels
          .fetch("974783394246447144")
          .then((channel) => channel.send(`${level123} ${member.user.id}`));
      }

      const ava =
        member.user.displayAvatarURL() ||
        "https://www.white-stamp.com/content/images/fo/w-login.png";
      const level12 = user.vclevel + 1;

      const embed = new Discord.MessageEmbed()
        .setColor(config.color)
        .setTitle(`${member.user.tag}`)
        .setThumbnail(`${ava}`)
        .setFooter({
          text: "You have to be unmuted to gain xp!",
        })
        .setDescription(
          `Congratulations <@${member.user.id}> you just ranked up to **level ${level12}** in Voice!\nType \`.vs\` to check your level`
        );

      bot.channels
        .fetch("954565299850608660")
        .then((channel) =>
          channel.send({ content: `<@${member.user.id}>`, embeds: [embed] })
        );
      user.xpvc -= neededxp;
      user.vclevel += 1;
    }

    user.save();
  }
}

module.exports = { createVoiceChannelInterval };
