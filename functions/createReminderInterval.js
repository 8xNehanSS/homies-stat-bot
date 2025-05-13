//reminders
async function createReminderInterval(reminders, bot, Discord) {

  setInterval(async () => {
    const Response1 = Math.floor(Math.random() * reminders.length);

    const exampleEmbed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`${reminders[Response1]}`)
      .setFooter({ text: `Reminders - LK Homies` })
      .setTimestamp();
    bot.channels.fetch("923061889766940672").then((channel) =>
      channel.send({ embeds: [exampleEmbed] }).then((msg) => {
        setTimeout(() => msg.delete(), 5000);
      })
    );
  }, 10000);
}

module.exports = createReminderInterval;
