const ms = require('ms');
module.exports = {
    name: 'dep',
    description: 'Deposit',
    aliases: ['deposit','put'],
    public: true,
    async execute(bot, message, args, config) {

    
    if(args[0] != null) { 
      let getbal = args[0].replace(/k/g, '000').replace(/K/g, '000')
        let author = await User.findOne({ guildID: message.guild.id, userID: message.author.id });
        if(getbal === "all"){
            const depall = author.money;
            author.money -= Math.floor(parseInt(depall));
            author.vmoney += Math.floor(parseInt(depall));
            author.save();
            message.react("✅")


        } else {if(getbal <= author.money) {
          var depmoney = getbal * 1;
            author.money -= Math.floor(parseInt(depmoney));
            author.vmoney += Math.floor(parseInt(depmoney));
            author.save();
            message.react("✅")


        } else { message.channel.send('You cannot deposit points more than what you have.')}
        
        }
       
    
    } else message.channel.send(`Indicate the number of points you want to deposit or all.`)

    
  }
}
