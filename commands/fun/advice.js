const fetch = require('node-fetch')

module.exports = {
    name: 'advice',
    description: "Gives an Advice <3",
    usage: "[prefix]advice",
    aliases: ["adv"],
    async execute(bot, message, args, config) {
        const data = await fetch("https://api.adviceslip.com/advice").then((res) => res.json())

        const embed = new Discord.MessageEmbed()
        .setTitle(`Advice`)
        .setDescription(data.slip.advice)
        .setColor("RANDOM")

        message.channel.send({ embeds: [embed] })
    }
}