async function topRoleReset(bot, User) {
  setInterval(async () => {
    const guild = bot.guilds.cache.get("922927891765948517");
    let Role1 = bot.guilds.cache
      .get("922927891765948517")
      .roles.cache.get("984689388195835914");
    Role1.members.forEach((member) => {
      // Looping through the members of Role.
      member.roles.remove(Role1); // Removing the Role.
    });

    //alltimeleaderbaord
    User.find({ guildID: guild.id })
      .sort([["messages", "descending"]])
      .exec((err, res) => {
        let monarchtext = guild.members.cache.get(res[0].userID);
        let role = guild.roles.cache.get("984689388195835914");
        monarchtext.roles.add(role);
      });
  }, 7200000);

  setInterval(async () => {
    const guild = bot.guilds.cache.get("922927891765948517");
    let Role1 = bot.guilds.cache
      .get("922927891765948517")
      .roles.cache.get("984689496228524042");
    Role1.members.forEach((member) => {
      // Looping through the members of Role.
      member.roles.remove(Role1); // Removing the Role.
    });

    //alltimeleaderbaord
    User.find({ guildID: guild.id })
      .sort([["vctotal", "descending"]])
      .exec((err, res) => {
        let monarchtext = guild.members.cache.get(res[0].userID);
        let role = guild.roles.cache.get("984689496228524042");
        monarchtext.roles.add(role).catch();
      });
  }, 7200000);
}

module.exports = topRoleReset;
