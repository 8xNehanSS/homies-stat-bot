var ordinal = require('ordinal');
module.exports = {
    name: 'net',
    description: 'net worth of server',
    aliases: [],
    public: true,
    async execute(bot, message, args, config) {
    let guild = await Guild.findOne({ guildID: message.guild.id })
    var tot = 0;
    User.find({ guildID: message.guild.id }).sort([['vmoney','descending']]).exec((err,res) => {
        var rankss =  res.length;
        for(i = 0; i < res.length; i++){
            tot += res[i].vmoney;
        }
        
            message.channel.send(`**Net Worth: ${tot.toLocaleString()} Points**`);
        });
    }
}
