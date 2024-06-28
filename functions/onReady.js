async function onReady(bot, Guild) {
  bot.channels
    .fetch("923061932272017449")
    .then((channel) => channel.send("`[✅ Bot] Successfully Restarted!`"));
  console.log(`[✅ Bot] ${bot.user.tag} Online!`);
  let guild = await Guild.findOne({ guildID: "922927891765948517" });
  const type = guild.statustype;
  const text = guild.status;
  const sign = guild.sign;
  if (guild.statustype === "W") {
    bot.user.setActivity(`${text}`, { type: "WATCHING" });
    bot.user.setPresence({ status: `${sign}` });
  }
  if (guild.statustype === "P") {
    bot.user.setActivity(`${text}`, { type: "PLAYING" });
    bot.user.setPresence({ status: `${sign}` });
  }
  if (guild.statustype === "L") {
    bot.user.setActivity(`${text}`, { type: "LISTENING" });
    bot.user.setPresence({ status: `${sign}` });
  }
}
module.exports = { onReady };
