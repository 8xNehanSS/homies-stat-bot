async function createReminderInterval(reminders, bot, Discord) {
  if (!reminders || reminders.length === 0) return;

  setInterval(async () => {
    try {
      const Response1 = Math.floor(Math.random() * reminders.length);

      const exampleEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`${reminders[Response1]}`)
        .setFooter({ text: `Reminders - LK Homies` })
        .setTimestamp();

      const channel = await bot.channels.fetch("923061889766940672");
      const msg = await channel.send({ embeds: [exampleEmbed] });

      setTimeout(() => msg.delete().catch(console.error), 1800000);
    } catch (err) {
      console.error("Error sending reminder:", err);
    }
  }, 3600000); // every 10 seconds
}

module.exports = createReminderInterval;
