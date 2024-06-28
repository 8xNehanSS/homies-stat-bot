async function secondaryMessageCreate(message, bot, User, Mutes, Discord) {
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
}

module.exports = { secondaryMessageCreate };
