//reminders
async function createReminderInterval(reminders, bot, Discord) {
  setInterval(async () => {
    const Response1 = Math.floor(Math.random() * reminders.length);

    const exampleEmbed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`${Responses1[Response1]}`)
      .setFooter({ text: `Reminders - LK Homies` })
      .setTimestamp();
    bot.channels.fetch("923061898281369650").then((channel) =>
      channel.send({ embeds: [exampleEmbed] }).then((msg) => {
        setTimeout(() => msg.delete(), 1800000);
      })
    );
  }, 3600000);
}

module.exports = createReminderInterval;
