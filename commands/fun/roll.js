module.exports = {
    name: 'roll',
    description: 'rolls a dice',
    aliases: [],
    public: true,
    async execute(bot, message, args, config) {
      const loveper =  Math.floor(Math.random() * 6) + 1;
      message.channel.send(`You rolled \`${loveper}\``)
    }
  }
  