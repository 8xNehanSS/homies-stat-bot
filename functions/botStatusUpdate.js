async function botStatusUpdate(bot, Guild) {
  setInterval(async () => {
    const guildz = bot.guilds.cache.get("922927891765948517");
    let guild = await Guild.findOne({ guildID: guildz.id });
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
  }, 60000);
}

module.exports = botStatusUpdate;
