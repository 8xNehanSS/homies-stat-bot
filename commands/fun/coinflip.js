module.exports = {
    name: 'coinflip',
    description: 'flips head or tails',
    aliases: ["flip"],
    public: true,
    async execute(bot, message, args, config) {
        const choices= ["heads", "tails"];
        const choice = choices[Math.floor(Math.random() * choices.length)];
       
        message.channel.send(`You flipped a **${choice}**!`)
    }
}
