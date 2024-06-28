async function messageCreate(message, bot, config, Discord, User, Guild) {
  if (message.author.bot) return;
  if (message.channel.type == "dm") return;

  bot.nodb = (user) =>
    message.channel.send(
      new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(
          `Unfortunately **${user.tag}** not present in the database.`
        )
    );

  let user = await User.findOne({
    guildID: message.guild.id,
    userID: message.author.id,
  });
  let guild = await Guild.findOne({ guildID: message.guild.id });
  if (!user) {
    User.create({ guildID: message.guild.id, userID: message.author.id });
    return message.guild.channels.cache
      .get("923061932272017449")
      .send(
        `\`[✅ DataBase]\` **${message.author.username}** (${message.author.id}) was successfully added to the database`
      );
  }
  if (!guild) {
    Guild.create({ guildID: message.guild.id });
    message.channel.send(
      `\`[✅ DataBase]\` **${message.guild.name}** was successfully added to the database`
    );
  }

  if (!message.content.startsWith(guild.prefix)) {
    if (user.wmessages === 0) {
      guild.rankss12++;
    }
  }
  guild.save();

  const rewards = [
    { threshold: 15, points: 500 },
    { threshold: 30, points: 1000 },
    { threshold: 60, points: 2000 },
    { threshold: 100, points: 3000 },
    { threshold: 150, points: 4000 },
    { threshold: 200, points: 5000 },
    { threshold: 250, points: 6000 },
    { threshold: 300, points: 7000 },
    { threshold: 400, points: 8000 },
    { threshold: 750, points: 15000 },
    { threshold: 2000, points: 30000 },
    { threshold: 2500, points: 35000 },
  ];

  for (const reward of rewards) {
    if (user.wmessages === reward.threshold) {
      const embed = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setColor(config.color)
        .setTitle(`Activity Rewards`)
        .setDescription(
          `**${message.author}** you just earned **${reward.points}** points for sending ${reward.threshold} messages this week!`
        )
        .setFooter({
          text: "Weekly Messages",
        });

      message.channel.send({ embeds: [embed] }).then((msg) => {
        setTimeout(() => msg.delete(), 10000);
      });

      user.money += Math.floor(reward.points);
      break;
    }
  }

  if (!message.content.startsWith(guild.prefix)) {
    if (message.channel.id != "981046193889112064") {
      let random = Math.floor(Math.random() * 4);
      let random12 = Math.floor(Math.random() * 8);
      user.money += random;
      user.xp += random12;
      user.messages++;
      user.wmessages++;
      if (message.channel.id === "923061898281369650") {
        user.gen1messages++;
      }
      if (message.channel.id === "940880842761338930") {
        user.gen2messages++;
      }
    }
  }
  var neededxp = user.level * 150;
  if (user.xp >= neededxp) {
    var level12 = user.level + 1;
    message.channel.send(
      `<@${message.author.id}> Congratulations! You just advanced to **Level ${level12}**!`
    );
    user.xp = 0;
    user.level += 1;
  }
  if (user.wmessages >= "500" && user.test1 === "no") {
    let gen1role = message.guild.roles.cache.get("933679395200204800");
    let embed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL())
      .setColor(config.color)
      .setDescription(
        `Congratulations **${message.author}** on sending 500 messages this week\nYou have been given **30,000** points and **Rank III** role.`
      )
      .setFooter({
        text: "Weekly Messages",
      });
    message.channel.send({ embeds: [embed] });
    const member12 = await message.guild.members.fetch(message.author);
    member12.roles.add(gen1role);
    user.money += Math.floor(parseInt(30000));
    user.test1 = "yes";
  }

  if (user.wmessages < "500" || user.wmessages >= "1000") {
    let gen1role = message.guild.roles.cache.get("933679395200204800");
    const member12 = await message.guild.members.fetch(message.author);
    member12.roles.remove(gen1role);
  }

  if (user.wmessages >= "1000" && user.test2 === "no") {
    let gen2role = message.guild.roles.cache.get("933688895143563284");
    let embed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL())
      .setColor(config.color)
      .setDescription(
        `Congratulations **${message.author}** on sending 1000 messages this week\nYou have been given **50,000** points and **Rank II** role.`
      )
      .setFooter({
        text: "Weekly Messages",
      });
    message.channel.send({ embeds: [embed] });
    const member12 = await message.guild.members.fetch(message.author);
    member12.roles.add(gen2role);
    user.money += Math.floor(parseInt(50000));
    user.test2 = "yes";
  }
  if (user.wmessages < "1000" || user.wmessages >= "1500") {
    let gen2role = message.guild.roles.cache.get("933688895143563284");
    const member12 = await message.guild.members.fetch(message.author);
    member12.roles.remove(gen2role);
  }

  if (user.wmessages >= "1500" && user.test3 === "no") {
    let gen3role = message.guild.roles.cache.get("933688976697622558");
    let embed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL())
      .setColor(config.color)
      .setDescription(
        `Congratulations **${message.author}** on sending 1500 messages this week\nYou have been given **100,000** points and **Rank I** role.`
      )
      .setFooter({
        text: "Weekly Messages",
      });
    message.channel.send({ embeds: [embed] });
    const member12 = await message.guild.members.fetch(message.author);
    member12.roles.add(gen3role);
    user.money += Math.floor(parseInt(100000));
    user.test3 = "yes";
  }

  if (user.wmessages < "1500") {
    let gen3role = message.guild.roles.cache.get("933688976697622558");
    const member12 = await message.guild.members.fetch(message.author);
    member12.roles.remove(gen3role);
  }

  user.save();

  if (!message.content.startsWith(guild.prefix)) return;
  const args = message.content.slice(guild.prefix.length).trim().split(/ +/g);
  const cmdName = args.shift().toLowerCase();
  const command =
    bot.commands.get(cmdName) ||
    bot.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(cmdName));
  if (!command) return;
  if (
    config.owner.includes(message.author.id) &&
    command.public === false
  )
    return;
  command.execute(bot, message, args, config);
}

module.exports = { messageCreate };
