const ms = require('ms');
module.exports = {
    name: 'with',
    description: 'Withdraw',
    aliases: ['withdraw','get'],
    public: true,
    async execute(bot, message, args, config) {

      let getbal1 = args[0]
    if(getbal1 != null) { 
      let getbal = args[0].replace(/k/g, '000').replace(/K/g, '000')
        let author = await User.findOne({ guildID: message.guild.id, userID: message.author.id });
        if(getbal === "all"){
            const withall = author.vmoney;
            author.money += Math.floor(parseInt(withall));
            author.vmoney -= Math.floor(parseInt(withall));
            author.save();
            message.channel.send(`You withdrawed **${withall.toLocaleString()}** points`)


        } else {if(getbal <= author.vmoney) {
          var withmoney = getbal * 1;

            author.money += Math.floor(parseInt(getbal));
            author.vmoney -= Math.floor(parseInt(getbal));
            author.save();
            message.channel.send(`You withdrawed **${withmoney.toLocaleString()}** points`)


        } else { message.channel.send('You cannot withdraw points more than what you have in vault')}
        
        }
       
    
    } else message.channel.send(`Indicate the number of points you want to withdraw or all.`)

    
  }
}
