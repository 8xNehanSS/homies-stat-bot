async function updateLeaderboards(bot, Discord, User, prettySeconds, config) {
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
          let name10 =
            bot.users.cache.get(res[10].userID) || "User left server";
          let name11 =
            bot.users.cache.get(res[11].userID) || "User left server";
          let name12 =
            bot.users.cache.get(res[12].userID) || "User left server";
          let name13 =
            bot.users.cache.get(res[13].userID) || "User left server";
          let name14 =
            bot.users.cache.get(res[14].userID) || "User left server";
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
}

module.exports = updateLeaderboards;
