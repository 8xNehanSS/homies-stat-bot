global.Discord = require("discord.js");
global.mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const ms = require("ms");
const prettyMilliseconds = require("pretty-ms");
var prettySeconds = require("pretty-seconds");
const config = require("./config.json");
const fs = require("fs");
const fetch = require("node-fetch");
var ordinal = require("ordinal");
const bot = new Discord.Client({
  intents: 32767,
});
bot.commands = new Discord.Collection();
global.Guild = require("./data/guild.js");
global.User = require("./data/user.js");
global.Roles = require("./data/roles.js");
global.Afk = require("./data/afkusers.js");
global.Warn = require("./data/warns.js");
global.Mutes = require("./data/mutes.js");

mongoose.connect(process.env.dataURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("[✅ DataBase] Connected!");
});

fs.readdirSync("./commands").forEach((module) => {
  const commandFiles = fs
    .readdirSync(`./commands/${module}/`)
    .filter((file) => file.endsWith(".js"));
  for (const file of commandFiles) {
    const command = require(`./commands/${module}/${file}`);
    command.category = module;
    bot.commands.set(command.name, command);
  }
});

bot.on("ready", async () => {
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
});

//welcome
bot.on("guildMemberAdd", (member) => {
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
});

bot.on("guildMemberRemove", async (member) => {
  const mem = member.user.username;
  let user = await User.findOne({
    guildID: member.guild.id,
    userID: member.id,
  });
  if (!user) return;
  if (user.level > 3) return;
  if (user.vclevel > 4) return;
  let user1 = await User.deleteOne({
    guildID: member.guild.id,
    userID: member.id,
  });
  member.guild.channels.cache
    .get("923061932272017449")
    .send(
      `\`[✅ DataBase]\` **${mem}** (${member.id}) was deleted from the database`
    );
});

bot.on("messageCreate", async (message) => {
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
      break; // Exit loop once a reward has been given
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
    !require("./config.json").owner.includes(message.author.id) &&
    command.public === false
  )
    return;
  command.execute(bot, message, args, config);
});

//voice tracking
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

setInterval(() => {
  const voiceChannel = bot.guilds.cache
    .get("922927891765948517")
    .channels.cache.get("923061879289577522");
  const membersInChannel = voiceChannel.members.size;

  if (membersInChannel >= 2) {
    voiceChannel.members.forEach(handleVoiceChannelXP);
  }
}, 4000);

setInterval(() => {
  const voiceChannel = bot.guilds.cache
    .get("922927891765948517")
    .channels.cache.get("923061873606266960");
  const membersInChannel = voiceChannel.members.size;

  if (membersInChannel >= 2) {
    voiceChannel.members.forEach(handleVoiceChannelXP);
  }
}, 4000);

setInterval(() => {
  const voiceChannel = bot.guilds.cache
    .get("922927891765948517")
    .channels.cache.get("923061875682459660");
  const membersInChannel = voiceChannel.members.size;

  if (membersInChannel >= 2) {
    voiceChannel.members.forEach(handleVoiceChannelXP);
  }
}, 4000);

setInterval(() => {
  const voiceChannel = bot.guilds.cache
    .get("922927891765948517")
    .channels.cache.get("923061888865169438");
  const membersInChannel = voiceChannel.members.size;

  if (membersInChannel >= 2) {
    voiceChannel.members.forEach(handleVoiceChannelXP);
  }
}, 4000);

setInterval(() => {
  const voiceChannel = bot.guilds.cache
    .get("922927891765948517")
    .channels.cache.get("923061890731606057");
  const membersInChannel = voiceChannel.members.size;

  if (membersInChannel >= 2) {
    voiceChannel.members.forEach(handleVoiceChannelXP);
  }
}, 4000);

setInterval(() => {
  const voiceChannel = bot.guilds.cache
    .get("922927891765948517")
    .channels.cache.get("923061893827022858");
  const membersInChannel = voiceChannel.members.size;

  if (membersInChannel >= 2) {
    voiceChannel.members.forEach(handleVoiceChannelXP);
  }
}, 4000);

setInterval(() => {
  const voiceChannel = bot.guilds.cache
    .get("922927891765948517")
    .channels.cache.get("923061897211826206");
  const membersInChannel = voiceChannel.members.size;

  if (membersInChannel >= 2) {
    voiceChannel.members.forEach(handleVoiceChannelXP);
  }
}, 4000);

setInterval(() => {
  const voiceChannel = bot.guilds.cache
    .get("922927891765948517")
    .channels.cache.get("923061899749388318");
  const membersInChannel = voiceChannel.members.size;

  if (membersInChannel >= 2) {
    voiceChannel.members.forEach(handleVoiceChannelXP);
  }
}, 4000);

setInterval(() => {
  const voiceChannel = bot.guilds.cache
    .get("922927891765948517")
    .channels.cache.get("923061901833953281");
  const membersInChannel = voiceChannel.members.size;

  if (membersInChannel >= 2) {
    voiceChannel.members.forEach(handleVoiceChannelXP);
  }
}, 4000);

setInterval(() => {
  const voiceChannel = bot.guilds.cache
    .get("922927891765948517")
    .channels.cache.get("924142589618323467");
  const membersInChannel = voiceChannel.members.size;

  if (membersInChannel >= 2) {
    voiceChannel.members.forEach(handleVoiceChannelXP);
  }
}, 4000);

setInterval(() => {
  const voiceChannel = bot.guilds.cache
    .get("922927891765948517")
    .channels.cache.get("924142644949565490");
  const membersInChannel = voiceChannel.members.size;

  if (membersInChannel >= 2) {
    voiceChannel.members.forEach(handleVoiceChannelXP);
  }
}, 4000);

setInterval(() => {
  const voiceChannel = bot.guilds.cache
    .get("922927891765948517")
    .channels.cache.get("964818317212803102");
  const membersInChannel = voiceChannel.members.size;

  if (membersInChannel >= 2) {
    voiceChannel.members.forEach(handleVoiceChannelXP);
  }
}, 4000);

setInterval(() => {
  const voiceChannel = bot.guilds.cache
    .get("922927891765948517")
    .channels.cache.get("964818320622776340");
  const membersInChannel = voiceChannel.members.size;

  if (membersInChannel >= 2) {
    voiceChannel.members.forEach(handleVoiceChannelXP);
  }
}, 4000);

setInterval(() => {
  const voiceChannel = bot.guilds.cache
    .get("922927891765948517")
    .channels.cache.get("984451441211109416");
  const membersInChannel = voiceChannel.members.size;

  if (membersInChannel >= 2) {
    voiceChannel.members.forEach(handleVoiceChannelXP);
  }
}, 4000);

setInterval(() => {
  const voiceChannel = bot.guilds.cache
    .get("922927891765948517")
    .channels.cache.get("984451524568694784");
  const membersInChannel = voiceChannel.members.size;

  if (membersInChannel >= 2) {
    voiceChannel.members.forEach(handleVoiceChannelXP);
  }
}, 4000);

setInterval(() => {
  const voiceChannel = bot.guilds.cache
    .get("922927891765948517")
    .channels.cache.get("984451789216706560");
  const membersInChannel = voiceChannel.members.size;

  if (membersInChannel >= 2) {
    voiceChannel.members.forEach(handleVoiceChannelXP);
  }
}, 4000);

//utils
bot.on("messageCreate", async (message) => {
  if (message.channel.id === "944112821082406942") {
    let user = await User.findOne({
      guildID: message.guild.id,
      userID: message.content,
    });
    if (!user) return;
    if (isNaN(message.content)) return;
    console.log(message.content);
    let votrole = message.guild.roles.cache.get("944128526930559047");
    let member = message.guild.members.cache.get(message.content);
    member.roles.add(votrole);
    user.money += Math.floor(parseInt(10000));
    user.save();
    bot.channels
      .fetch("923061898281369650")
      .then((channel) =>
        channel.send(
          `<@${message.content}>, you have received **10,000** points for voting on our top.gg page!\n\n🔗 https://top.gg/servers/922927891765948517`
        )
      );
  }

  if (message.channel.id === "938306367440162816") {
    if (message.author.bot) return;
    let user = await User.findOne({
      guildID: message.guild.id,
      userID: message.author.id,
    });
    if (!user) return;

    user.money += Math.floor(parseInt(100000));
    user.save();

    const messageEmbed = new Discord.MessageEmbed()
      .setTitle(`Thank you for boosting our Server!`)
      .setColor("#f47fff")
      .setDescription(
        `You've been awarded with **100,000** points for boosting our server!`
      )
      .setImage(
        "https://cdn.discordapp.com/attachments/929649823953600522/1137031859809824828/xServer-Boost-Titel.png"
      )
      .setFooter("Boosters get special perks! Boost now to get them!")
      .setTimestamp();

    message.channel.send({
      content: `<@${message.author.id}>`,
      embeds: [messageEmbed],
    });
  }

  if (message.channel.id === "931139149589790720") {
    if (message.author.bot) return;
    setTimeout(function () {
      // Setup a timer
      message.delete(); // Deletes the users message
    }, 500); // 5 seconds in milliseconds
    const em1 = bot.emojis.cache.get("932327629493780552");
    const em2 = bot.emojis.cache.get("932327617468710992");
    const messageEmbed = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.avatarURL())
      .setDescription(message.content)
      .setFooter({
        text: "Suggested at",
      })
      .setTimestamp()
      .setColor("RANDOM");

    if (message.content.includes(`https://`))
      return message.channel
        .send("No links!")
        .then((msg) => {
          setTimeout(() => msg.delete(), 5000);
        })
        .catch();
    if (message.content.includes(`http://`))
      return message.channel
        .send("No links!")
        .then((msg) => {
          setTimeout(() => msg.delete(), 5000);
        })
        .catch();
    if (message.content.includes(`www.`))
      return message.channel
        .send("No links!")
        .then((msg) => {
          setTimeout(() => msg.delete(), 5000);
        })
        .catch();
    message.channel.send({ embeds: [messageEmbed] }).then(function (message) {
      message.react(em1);
      message.react(em2);
    });
  }

  if (message.channel.id === "974783394246447144") {
    message.react("✅");

    const args = message.content.trim().split(/ +/g);
    if (args[0] === "5") {
      const userid = args[1];
      let member = message.guild.members.cache.get(userid);
      let gen2role = member.guild.roles.cache.get("940146727804076143");
      member.roles.add(gen2role);
    }
    if (args[0] === "10") {
      const userid = args[1];
      let member = message.guild.members.cache.get(userid);
      let remo = member.guild.roles.cache.get("940146727804076143");
      member.roles.remove(remo);
      let gen2role = member.guild.roles.cache.get("940145962792407060");
      member.roles.add(gen2role);
    }
    if (args[0] === "20") {
      const userid = args[1];
      let member = message.guild.members.cache.get(userid);
      let remo = member.guild.roles.cache.get("940145962792407060");
      member.roles.remove(remo);
      let gen2role = member.guild.roles.cache.get("940146166274850866");
      member.roles.add(gen2role);
    }
    if (args[0] === "30") {
      const userid = args[1];
      let member = message.guild.members.cache.get(userid);
      let remo = member.guild.roles.cache.get("940146166274850866");
      member.roles.remove(remo);
      let gen2role = member.guild.roles.cache.get("940146255638720613");
      member.roles.add(gen2role);
    }
    if (args[0] === "40") {
      const userid = args[1];
      let member = message.guild.members.cache.get(userid);
      let remo = member.guild.roles.cache.get("940146255638720613");
      member.roles.remove(remo);
      let gen2role = member.guild.roles.cache.get("940146282746490930");
      member.roles.add(gen2role);
    }
    if (args[0] === "50") {
      const userid = args[1];
      let member = message.guild.members.cache.get(userid);
      let remo = member.guild.roles.cache.get("940146282746490930");
      member.roles.remove(remo);
      let gen2role = member.guild.roles.cache.get("940146308717617203");
      member.roles.add(gen2role);
    }
    if (args[0] === "60") {
      const userid = args[1];
      let member = message.guild.members.cache.get(userid);
      let remo = member.guild.roles.cache.get("940146308717617203");
      member.roles.remove(remo);
      let gen2role = member.guild.roles.cache.get("974930163093618698");
      member.roles.add(gen2role);
    }
    if (args[0] === "70") {
      const userid = args[1];
      let member = message.guild.members.cache.get(userid);
      let remo = member.guild.roles.cache.get("974930163093618698");
      member.roles.remove(remo);
      let gen2role = member.guild.roles.cache.get("974930188213288990");
      member.roles.add(gen2role);
    }
    if (args[0] === "80") {
      const userid = args[1];
      let member = message.guild.members.cache.get(userid);
      let remo = member.guild.roles.cache.get("974930188213288990");
      member.roles.remove(remo);
      let gen2role = member.guild.roles.cache.get("974930206592729138");
      member.roles.add(gen2role);
    }
    if (args[0] === "90") {
      const userid = args[1];
      let member = message.guild.members.cache.get(userid);
      let remo = member.guild.roles.cache.get("974930206592729138");
      member.roles.remove(remo);
      let gen2role = member.guild.roles.cache.get("974930228130480188");
      member.roles.add(gen2role);
    }
    if (args[0] === "100") {
      const userid = args[1];
      let member = message.guild.members.cache.get(userid);
      let remo = member.guild.roles.cache.get("974930228130480188");
      member.roles.remove(remo);
      let gen2role = member.guild.roles.cache.get("974930253782851584");
      member.roles.add(gen2role);
    }
    if (args[0] === "125") {
      const userid = args[1];
      let member = message.guild.members.cache.get(userid);
      let remo = member.guild.roles.cache.get("974930253782851584");
      member.roles.remove(remo);
      let gen2role = member.guild.roles.cache.get("974930288851419176");
      member.roles.add(gen2role);
    }
  }
  if (message.channel.id === "923061898281369650") {
    if (message.content.toLowerCase().startsWith("welcome")) {
      const em1 = bot.emojis.cache.get("929464325536628757");
      const em2 = bot.emojis.cache.get("929464350366916628");
      message.react(em1);
      message.react(em2);
    }
  }

  if (message.channel.id === "1011174324033556591") {
    let user = await Mutes.findOneAndDelete({
      guildID: message.guild.id,
      userID: message.content,
    });
    if (!user) return;
    if (isNaN(message.content)) return;
    message.react("✅");
  }
});

//afk commands

bot.on("messageCreate", async (message) => {
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
});

//reminders
//setInterval(async() =>{
//const Responses1 = [
//"Join staff team now, send your application! [**Click Here!**](https://discord.com/channels/922927891765948517/944241821117190164/946145980456263720)",
//"Join voice chats and start talking right now! [**Click Here!**](https://discord.gg/cd6vJyY5bF)",
//"If you need any support from the staff. Pls open a ticket in <#942412497971982387>",
//"Rank 1 in General chat with 5k+ messages will earn a custom role!",
//"To get pic permission in general chats, get to level 5 in chat or voice levels!"];
//const Responses122 = [
//"The Unholy - MOVIE NIGHT on 4th June 2022 at 11pm (IST) <#923061887971770419>"];
//const Response1 = Math.floor(Math.random() * Responses1.length);

//const exampleEmbed = new Discord.MessageEmbed()
//.setColor('RANDOM')
//.setDescription(`${Responses1[Response1]}`)
//.setFooter({ text: `Reminders - LK Homies`})
//.setTimestamp();
//bot.channels.fetch('923061898281369650').then(channel => channel.send({ embeds: [exampleEmbed]}).then(msg => {
//setTimeout(() => msg.delete(), 1800000)
//}))

//}, 3600000);

setInterval(async () => {
  const guild = bot.guilds.cache.get("922927891765948517");
  //alltimeleaderbaord
  User.find({ guildID: guild.id })
    .sort([["messages", "descending"]])
    .exec((err, res) => {
      let embed = new Discord.MessageEmbed()
        .setTitle("**Alltime Messages Leaderboard**")
        .setColor(config.color)
        .setThumbnail(
          "https://cdn.discordapp.com/attachments/861614593444937739/958954846340382730/output-onlinepngtools.png"
        )
        .setFooter("Since 15.Jan.2022")
        .setTimestamp();
      if (res.length === 1) {
        embed.setDescription(
          "Unfortunately the table for this server is empty."
        );
      } else {
        let name0 = bot.users.cache.get(res[0].userID) || "User left server";
        let name1 = bot.users.cache.get(res[1].userID) || "User left server";
        let name2 = bot.users.cache.get(res[2].userID) || "User left server";
        let name3 = bot.users.cache.get(res[3].userID) || "User left server";
        let name4 = bot.users.cache.get(res[4].userID) || "User left server";
        let name5 = bot.users.cache.get(res[5].userID) || "User left server";
        let name6 = bot.users.cache.get(res[6].userID) || "User left server";
        let name7 = bot.users.cache.get(res[7].userID) || "User left server";
        let name8 = bot.users.cache.get(res[8].userID) || "User left server";
        let name9 = bot.users.cache.get(res[9].userID) || "User left server";
        let name10 = bot.users.cache.get(res[10].userID) || "User left server";
        let name11 = bot.users.cache.get(res[11].userID) || "User left server";
        let name12 = bot.users.cache.get(res[12].userID) || "User left server";
        let name13 = bot.users.cache.get(res[13].userID) || "User left server";
        let name14 = bot.users.cache.get(res[14].userID) || "User left server";
        embed.setDescription(
          `**1**. ${name0} - **${res[0].messages.toLocaleString()}** messages\n**2**. ${name1} - **${res[1].messages.toLocaleString()}** messages\n**3**. ${name2} - **${res[2].messages.toLocaleString()}** messages\n**4**. ${name3} - **${res[3].messages.toLocaleString()}** messages\n**5**. ${name4} - **${res[4].messages.toLocaleString()}** messages\n**6**. ${name5} - **${res[5].messages.toLocaleString()}** messages\n**7**. ${name6} - **${res[6].messages.toLocaleString()}** messages\n**8**. ${name7} - **${res[7].messages.toLocaleString()}** messages\n**9**. ${name8} - **${res[8].messages.toLocaleString()}** messages\n**10**. ${name9} - **${res[9].messages.toLocaleString()}** messages\n**11**. ${name10} - **${res[10].messages.toLocaleString()}** messages\n**12**. ${name11} - **${res[11].messages.toLocaleString()}** messages\n**13**. ${name12} - **${res[12].messages.toLocaleString()}** messages\n**14**. ${name13} - **${res[13].messages.toLocaleString()}** messages\n**15**. ${name14} - **${res[14].messages.toLocaleString()}** messages`
        );
      }
      bot.channels.fetch("931064578580824075").then((channel) =>
        channel.messages.fetch("962784473349492757").then((msg) => {
          msg.edit({ embeds: [embed] });
        })
      );
    });
}, 900000);

setInterval(async () => {
  //weekly leaderboard
  const guild = bot.guilds.cache.get("922927891765948517");
  User.find({ guildID: guild.id })
    .sort([["wmessages", "descending"]])
    .exec((err, res) => {
      let embed = new Discord.MessageEmbed()
        .setTitle("**Weekly Messages Leaderboard**")
        .setColor(config.color)
        .setThumbnail(
          "https://cdn.discordapp.com/attachments/861614593444937739/958954846340382730/output-onlinepngtools.png"
        )
        .setFooter("Resets every Sunday 10PM IST")
        .setTimestamp();
      if (res.length === 0) {
        embed.setDescription(
          "Unfortunately the table for this server is empty."
        );
      } else {
        let name0 = bot.users.cache.get(res[0].userID) || "User left server";
        let name1 = bot.users.cache.get(res[1].userID) || "User left server";
        let name2 = bot.users.cache.get(res[2].userID) || "User left server";
        let name3 = bot.users.cache.get(res[3].userID) || "User left server";
        let name4 = bot.users.cache.get(res[4].userID) || "User left server";
        let name5 = bot.users.cache.get(res[5].userID) || "User left server";
        let name6 = bot.users.cache.get(res[6].userID) || "User left server";
        let name7 = bot.users.cache.get(res[7].userID) || "User left server";
        let name8 = bot.users.cache.get(res[8].userID) || "User left server";
        let name9 = bot.users.cache.get(res[9].userID) || "User left server";
        embed.setDescription(
          `**1**. ${name0} - **${res[0].wmessages.toLocaleString()}** messages\n**2**. ${name1} - **${res[1].wmessages.toLocaleString()}** messages\n**3**. ${name2} - **${res[2].wmessages.toLocaleString()}** messages\n**4**. ${name3} - **${res[3].wmessages.toLocaleString()}** messages\n**5**. ${name4} - **${res[4].wmessages.toLocaleString()}** messages\n**6**. ${name5} - **${res[5].wmessages.toLocaleString()}** messages\n**7**. ${name6} - **${res[6].wmessages.toLocaleString()}** messages\n**8**. ${name7} - **${res[7].wmessages.toLocaleString()}** messages\n**9**. ${name8} - **${res[8].wmessages.toLocaleString()}** messages\n**10**. ${name9} - **${res[9].wmessages.toLocaleString()}** messages\n`
        );
      }
      bot.channels.fetch("931064578580824075").then((channel) =>
        channel.messages.fetch("962784495252176976").then((msg) => {
          msg.edit({ embeds: [embed] });
        })
      );
    });
}, 900000);

setInterval(async () => {
  //voice leaderboard alltime
  const guild = bot.guilds.cache.get("922927891765948517");
  User.find({ guildID: guild.id })
    .sort([["vctotal", "descending"]])
    .exec((err, res) => {
      let embed = new Discord.MessageEmbed()
        .setTitle("**Alltime Voice Activity Leaderboard**")
        .setColor(config.color)
        .setThumbnail(
          "https://cdn.discordapp.com/attachments/861614593444937739/958954846340382730/output-onlinepngtools.png"
        )
        .setFooter("Total VC Time Since 13-02-2022")
        .setTimestamp();
      if (res.length === 0) {
        embed.setDescription(
          "Unfortunately the table for this server is empty."
        );
      } else {
        let name0 = bot.users.cache.get(res[0].userID) || "User left server";
        let name1 = bot.users.cache.get(res[1].userID) || "User left server";
        let name2 = bot.users.cache.get(res[2].userID) || "User left server";
        let name3 = bot.users.cache.get(res[3].userID) || "User left server";
        let name4 = bot.users.cache.get(res[4].userID) || "User left server";
        let name5 = bot.users.cache.get(res[5].userID) || "User left server";
        let name6 = bot.users.cache.get(res[6].userID) || "User left server";
        let name7 = bot.users.cache.get(res[7].userID) || "User left server";
        let name8 = bot.users.cache.get(res[8].userID) || "User left server";
        let name9 = bot.users.cache.get(res[9].userID) || "User left server";

        let vc0 = prettySeconds(res[0].vctotal)
          .replace(/ hours/g, "h")
          .replace(/ minutes/g, "m")
          .replace(/ seconds/g, "s")
          .replace(/and/g, "&")
          .replace(/ hour/g, "h")
          .replace(/ minute/g, "m")
          .replace(/ days/g, "d")
          .replace(/ day/g, "d")
          .replace(/ second/g, "s");
        let vc1 = prettySeconds(res[1].vctotal)
          .replace(/ hours/g, "h")
          .replace(/ minutes/g, "m")
          .replace(/ seconds/g, "s")
          .replace(/and/g, "&")
          .replace(/ hour/g, "h")
          .replace(/ minute/g, "m")
          .replace(/ days/g, "d")
          .replace(/ day/g, "d")
          .replace(/ second/g, "s");
        let vc2 = prettySeconds(res[2].vctotal)
          .replace(/ hours/g, "h")
          .replace(/ minutes/g, "m")
          .replace(/ seconds/g, "s")
          .replace(/and/g, "&")
          .replace(/ hour/g, "h")
          .replace(/ minute/g, "m")
          .replace(/ days/g, "d")
          .replace(/ day/g, "d")
          .replace(/ second/g, "s");
        let vc3 = prettySeconds(res[3].vctotal)
          .replace(/ hours/g, "h")
          .replace(/ minutes/g, "m")
          .replace(/ seconds/g, "s")
          .replace(/and/g, "&")
          .replace(/ hour/g, "h")
          .replace(/ minute/g, "m")
          .replace(/ days/g, "d")
          .replace(/ day/g, "d")
          .replace(/ second/g, "s");
        let vc4 = prettySeconds(res[4].vctotal)
          .replace(/ hours/g, "h")
          .replace(/ minutes/g, "m")
          .replace(/ seconds/g, "s")
          .replace(/and/g, "&")
          .replace(/ hour/g, "h")
          .replace(/ minute/g, "m")
          .replace(/ days/g, "d")
          .replace(/ day/g, "d")
          .replace(/ second/g, "s");
        let vc5 = prettySeconds(res[5].vctotal)
          .replace(/ hours/g, "h")
          .replace(/ minutes/g, "m")
          .replace(/ seconds/g, "s")
          .replace(/and/g, "&")
          .replace(/ hour/g, "h")
          .replace(/ minute/g, "m")
          .replace(/ days/g, "d")
          .replace(/ day/g, "d")
          .replace(/ second/g, "s");
        let vc6 = prettySeconds(res[6].vctotal)
          .replace(/ hours/g, "h")
          .replace(/ minutes/g, "m")
          .replace(/ seconds/g, "s")
          .replace(/and/g, "&")
          .replace(/ hour/g, "h")
          .replace(/ minute/g, "m")
          .replace(/ days/g, "d")
          .replace(/ day/g, "d")
          .replace(/ second/g, "s");
        let vc7 = prettySeconds(res[7].vctotal)
          .replace(/ hours/g, "h")
          .replace(/ minutes/g, "m")
          .replace(/ seconds/g, "s")
          .replace(/and/g, "&")
          .replace(/ hour/g, "h")
          .replace(/ minute/g, "m")
          .replace(/ days/g, "d")
          .replace(/ day/g, "d")
          .replace(/ second/g, "s");
        let vc8 = prettySeconds(res[8].vctotal)
          .replace(/ hours/g, "h")
          .replace(/ minutes/g, "m")
          .replace(/ seconds/g, "s")
          .replace(/and/g, "&")
          .replace(/ hour/g, "h")
          .replace(/ minute/g, "m")
          .replace(/ days/g, "d")
          .replace(/ day/g, "d")
          .replace(/ second/g, "s");
        let vc9 = prettySeconds(res[9].vctotal)
          .replace(/ hours/g, "h")
          .replace(/ minutes/g, "m")
          .replace(/ seconds/g, "s")
          .replace(/and/g, "&")
          .replace(/ hour/g, "h")
          .replace(/ minute/g, "m")
          .replace(/ days/g, "d")
          .replace(/ day/g, "d")
          .replace(/ second/g, "s");

        embed.setDescription(
          `**1**. ${name0} - **${vc0}**\n**2**. ${name1} - **${vc1}**\n**3**. ${name2} - **${vc2}**\n**4**. ${name3} - **${vc3}**\n**5**. ${name4} - **${vc4}**\n**6**. ${name5} - **${vc5}**\n**7**. ${name6} - **${vc6}**\n**8**. ${name7} - **${vc7}**\n**9**. ${name8} - **${vc8}**\n**10**. ${name9} - **${vc9}**\n`
        );
      }
      bot.channels.fetch("931064578580824075").then((channel) =>
        channel.messages.fetch("962784537727881246").then((msg) => {
          msg.edit({ embeds: [embed] });
        })
      );
    });
}, 900000);

setInterval(async () => {
  //voice leaderbaord weekly
  const guild = bot.guilds.cache.get("922927891765948517");
  User.find({ guildID: guild.id })
    .sort([["vcweek", "descending"]])
    .exec((err, res) => {
      let embed = new Discord.MessageEmbed()
        .setTitle("**Weekly Voice Activity Leaderboard**")
        .setColor(config.color)
        .setThumbnail(
          "https://cdn.discordapp.com/attachments/861614593444937739/958954846340382730/output-onlinepngtools.png"
        )
        .setFooter("Resets every Sunday 10PM IST")
        .setTimestamp();
      if (res.length === 0) {
        embed.setDescription(
          "Unfortunately the table for this server is empty."
        );
      } else {
        let name0 = bot.users.cache.get(res[0].userID) || "User left server";
        let name1 = bot.users.cache.get(res[1].userID) || "User left server";
        let name2 = bot.users.cache.get(res[2].userID) || "User left server";
        let name3 = bot.users.cache.get(res[3].userID) || "User left server";
        let name4 = bot.users.cache.get(res[4].userID) || "User left server";
        let name5 = bot.users.cache.get(res[5].userID) || "User left server";
        let name6 = bot.users.cache.get(res[6].userID) || "User left server";
        let name7 = bot.users.cache.get(res[7].userID) || "User left server";
        let name8 = bot.users.cache.get(res[8].userID) || "User left server";
        let name9 = bot.users.cache.get(res[9].userID) || "User left server";

        let vc0 = prettySeconds(res[0].vcweek)
          .replace(/ hours/g, "h")
          .replace(/ minutes/g, "m")
          .replace(/ seconds/g, "s")
          .replace(/and/g, "&")
          .replace(/ hour/g, "h")
          .replace(/ minute/g, "m")
          .replace(/ days/g, "d")
          .replace(/ day/g, "d")
          .replace(/ second/g, "s");
        let vc1 = prettySeconds(res[1].vcweek)
          .replace(/ hours/g, "h")
          .replace(/ minutes/g, "m")
          .replace(/ seconds/g, "s")
          .replace(/and/g, "&")
          .replace(/ hour/g, "h")
          .replace(/ minute/g, "m")
          .replace(/ days/g, "d")
          .replace(/ day/g, "d")
          .replace(/ second/g, "s");
        let vc2 = prettySeconds(res[2].vcweek)
          .replace(/ hours/g, "h")
          .replace(/ minutes/g, "m")
          .replace(/ seconds/g, "s")
          .replace(/and/g, "&")
          .replace(/ hour/g, "h")
          .replace(/ minute/g, "m")
          .replace(/ days/g, "d")
          .replace(/ day/g, "d")
          .replace(/ second/g, "s");
        let vc3 = prettySeconds(res[3].vcweek)
          .replace(/ hours/g, "h")
          .replace(/ minutes/g, "m")
          .replace(/ seconds/g, "s")
          .replace(/and/g, "&")
          .replace(/ hour/g, "h")
          .replace(/ minute/g, "m")
          .replace(/ days/g, "d")
          .replace(/ day/g, "d")
          .replace(/ second/g, "s");
        let vc4 = prettySeconds(res[4].vcweek)
          .replace(/ hours/g, "h")
          .replace(/ minutes/g, "m")
          .replace(/ seconds/g, "s")
          .replace(/and/g, "&")
          .replace(/ hour/g, "h")
          .replace(/ minute/g, "m")
          .replace(/ days/g, "d")
          .replace(/ day/g, "d")
          .replace(/ second/g, "s");
        let vc5 = prettySeconds(res[5].vcweek)
          .replace(/ hours/g, "h")
          .replace(/ minutes/g, "m")
          .replace(/ seconds/g, "s")
          .replace(/and/g, "&")
          .replace(/ hour/g, "h")
          .replace(/ minute/g, "m")
          .replace(/ days/g, "d")
          .replace(/ day/g, "d")
          .replace(/ second/g, "s");
        let vc6 = prettySeconds(res[6].vcweek)
          .replace(/ hours/g, "h")
          .replace(/ minutes/g, "m")
          .replace(/ seconds/g, "s")
          .replace(/and/g, "&")
          .replace(/ hour/g, "h")
          .replace(/ minute/g, "m")
          .replace(/ days/g, "d")
          .replace(/ day/g, "d")
          .replace(/ second/g, "s");
        let vc7 = prettySeconds(res[7].vcweek)
          .replace(/ hours/g, "h")
          .replace(/ minutes/g, "m")
          .replace(/ seconds/g, "s")
          .replace(/and/g, "&")
          .replace(/ hour/g, "h")
          .replace(/ minute/g, "m")
          .replace(/ days/g, "d")
          .replace(/ day/g, "d")
          .replace(/ second/g, "s");
        let vc8 = prettySeconds(res[8].vcweek)
          .replace(/ hours/g, "h")
          .replace(/ minutes/g, "m")
          .replace(/ seconds/g, "s")
          .replace(/and/g, "&")
          .replace(/ hour/g, "h")
          .replace(/ minute/g, "m")
          .replace(/ days/g, "d")
          .replace(/ day/g, "d")
          .replace(/ second/g, "s");
        let vc9 = prettySeconds(res[9].vcweek)
          .replace(/ hours/g, "h")
          .replace(/ minutes/g, "m")
          .replace(/ seconds/g, "s")
          .replace(/and/g, "&")
          .replace(/ hour/g, "h")
          .replace(/ minute/g, "m")
          .replace(/ days/g, "d")
          .replace(/ day/g, "d")
          .replace(/ second/g, "s");

        embed.setDescription(
          `**1**. ${name0} - **${vc0}**\n**2**. ${name1} - **${vc1}**\n**3**. ${name2} - **${vc2}**\n**4**. ${name3} - **${vc3}**\n**5**. ${name4} - **${vc4}**\n**6**. ${name5} - **${vc5}**\n**7**. ${name6} - **${vc6}**\n**8**. ${name7} - **${vc7}**\n**9**. ${name8} - **${vc8}**\n**10**. ${name9} - **${vc9}**\n`
        );
      }
      bot.channels.fetch("931064578580824075").then((channel) =>
        channel.messages.fetch("962784545072095263").then((msg) => {
          msg.edit({ embeds: [embed] });
        })
      );
    });
}, 900000);

setInterval(async () => {
  //vault leaderboard
  const guild = bot.guilds.cache.get("922927891765948517");
  User.find({ guildID: guild.id })
    .sort([["vmoney", "descending"]])
    .exec((err, res) => {
      let embed = new Discord.MessageEmbed()
        .setTitle("**Vault Points Leaderboard**")
        .setColor(config.color)
        .setThumbnail(
          "https://cdn.discordapp.com/attachments/861614593444937739/958954846340382730/output-onlinepngtools.png"
        )
        .setFooter("Richest members of LK Homies")
        .setTimestamp();
      if (res.length === 0) {
        embed.setDescription(
          "Unfortunately the table for this server is empty."
        );
      } else {
        let name0 = bot.users.cache.get(res[0].userID) || "User left server";
        let name1 = bot.users.cache.get(res[1].userID) || "User left server";
        let name2 = bot.users.cache.get(res[2].userID) || "User left server";
        let name3 = bot.users.cache.get(res[3].userID) || "User left server";
        let name4 = bot.users.cache.get(res[4].userID) || "User left server";
        let name5 = bot.users.cache.get(res[5].userID) || "User left server";
        let name6 = bot.users.cache.get(res[6].userID) || "User left server";
        let name7 = bot.users.cache.get(res[7].userID) || "User left server";
        let name8 = bot.users.cache.get(res[8].userID) || "User left server";
        let name9 = bot.users.cache.get(res[9].userID) || "User left server";
        embed.setDescription(
          `**1**. ${name0} - **${res[0].vmoney.toLocaleString()}** points\n**2**. ${name1} - **${res[1].vmoney.toLocaleString()}** points\n**3**. ${name2} - **${res[2].vmoney.toLocaleString()}** points\n**4**. ${name3} - **${res[3].vmoney.toLocaleString()}** points\n**5**. ${name4} - **${res[4].vmoney.toLocaleString()}** points\n**6**. ${name5} - **${res[5].vmoney.toLocaleString()}** points\n**7**. ${name6} - **${res[6].vmoney.toLocaleString()}** points\n**8**. ${name7} - **${res[7].vmoney.toLocaleString()}** points\n**9**. ${name8} - **${res[8].vmoney.toLocaleString()}** points\n**10**. ${name9} - **${res[9].vmoney.toLocaleString()}** points\n`
        );
      }
      bot.channels.fetch("931064578580824075").then((channel) =>
        channel.messages.fetch("962784598947946606").then((msg) => {
          msg.edit({ embeds: [embed] });
        })
      );
    });
}, 900000);

setInterval(async () => {
  //points leadrboard
  const guild = bot.guilds.cache.get("922927891765948517");
  User.find({ guildID: guild.id })
    .sort([["money", "descending"]])
    .exec((err, res) => {
      let embed = new Discord.MessageEmbed()
        .setTitle("**Points Leaderboard**")
        .setColor(config.color)
        .setThumbnail(
          "https://cdn.discordapp.com/attachments/861614593444937739/958954846340382730/output-onlinepngtools.png"
        )
        .setFooter("Points in your hand")
        .setTimestamp();
      if (res.length === 0) {
        embed.setDescription(
          "Unfortunately the table for this server is empty."
        );
      } else {
        let name0 = bot.users.cache.get(res[0].userID) || "User left server";
        let name1 = bot.users.cache.get(res[1].userID) || "User left server";
        let name2 = bot.users.cache.get(res[2].userID) || "User left server";
        let name3 = bot.users.cache.get(res[3].userID) || "User left server";
        let name4 = bot.users.cache.get(res[4].userID) || "User left server";
        let name5 = bot.users.cache.get(res[5].userID) || "User left server";
        let name6 = bot.users.cache.get(res[6].userID) || "User left server";
        let name7 = bot.users.cache.get(res[7].userID) || "User left server";
        let name8 = bot.users.cache.get(res[8].userID) || "User left server";
        let name9 = bot.users.cache.get(res[9].userID) || "User left server";
        embed.setDescription(
          `**1**. ${name0} - **${res[0].money.toLocaleString()}** points\n**2**. ${name1} - **${res[1].money.toLocaleString()}** points\n**3**. ${name2} - **${res[2].money.toLocaleString()}** points\n**4**. ${name3} - **${res[3].money.toLocaleString()}** points\n**5**. ${name4} - **${res[4].money.toLocaleString()}** points\n**6**. ${name5} - **${res[5].money.toLocaleString()}** points\n**7**. ${name6} - **${res[6].money.toLocaleString()}** points\n**8**. ${name7} - **${res[7].money.toLocaleString()}** points\n**9**. ${name8} - **${res[8].money.toLocaleString()}** points\n**10**. ${name9} - **${res[9].money.toLocaleString()}** points\n`
        );
      }
      bot.channels.fetch("931064578580824075").then((channel) =>
        channel.messages.fetch("962784619227385856").then((msg) => {
          msg.edit({ embeds: [embed] });
        })
      );
    });
}, 900000);

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

setInterval(async () => {
  const guild = bot.guilds.cache.get("922927891765948517");
  Mutes.find({ guildID: guild.id })
    .sort([["time", "ascending"]])
    .exec((err, res) => {
      if (res.length === 0) {
        return;
      } else {
        for (i = 0; i < res.length; i++) {
          let timeees = res[i].time;
          if (timeees - Date.now() <= 0) {
            const guild = bot.guilds.cache.get("922927891765948517");
            let member = guild.members.cache.get(res[i].userID);
            let remo = member.guild.roles.cache.get("923066918779363359");
            member.roles.remove(remo);
            bot.channels
              .fetch("1011174324033556591")
              .then((channel) => channel.send(`${member.user.id}`));
          }
        }
      }
    });
}, 600000);

bot.login(process.env.token);

const process1 = require("process");

const logFilePath = "error_log.txt";

process1.on("uncaughtException", (err, origin) => {
  const timestamp = new Date().toISOString();
  const stackTrace = err.stack || "";

  const logMessage =
    `Timestamp: ${timestamp}\n` +
    `Caught exception: ${err}\n` +
    `Exception origin: ${origin}\n` +
    `Stack trace:\n${stackTrace}\n\n`;
  const logFileLines = fs.readFileSync(logFilePath, "utf8").split("\n");

  if (logFileLines.length > 300) {
    fs.writeFileSync(logFilePath, "");
  }

  fs.writeFileSync(logFilePath, logMessage, { flag: "a" });
  bot.channels
    .fetch("923061932272017449")
    .then((channel) => channel.send(`\`${logMessage}Saved to error_log.txt\``));
});
