var ordinal = require('ordinal');
module.exports = {
    name: 'addweekmsgpoints',
    description: 'add weeklypoints in server',
    aliases: [],
    public: true,
    async execute(bot, message, args, config) {
    if(message.channel.id != "923061932272017449") return
    let guild = await Guild.findOne({ guildID: message.guild.id })
    User.find({ guildID: message.guild.id }).sort([['wmessages','descending']]).exec(async(err,res) => {
        for(i = 0; i < 19; i++){
            if(i === 0){
                var name = res[i].userID
                if (!name) return;
                let data = await User.findOne({ guildID: message.guild.id, userID: name });
                data.money += 100000;
                data.save();
                bot.channels.fetch('974372861454196736').then(channel => channel.send(`<@${name}> | +100000 `))
            }
            if(i === 1){
                var name = res[i].userID
                if (!name) return;
                let data = await User.findOne({ guildID: message.guild.id, userID: name });
                data.money += 50000;
                data.save();
                bot.channels.fetch('974372861454196736').then(channel => channel.send(`<@${name}> | +50000 `))
            
            }
            if(i === 2){
                var name = res[i].userID
                if (!name) return;
                let data = await User.findOne({ guildID: message.guild.id, userID: name });
                data.money += 25000;
                data.save();
                bot.channels.fetch('974372861454196736').then(channel => channel.send(`<@${name}> | +25000 `))
            
            }
            if(i === 3){
                var name = res[i].userID
                if (!name) return;
                let data = await User.findOne({ guildID: message.guild.id, userID: name });
                data.money += 15000;
                data.save();
                bot.channels.fetch('974372861454196736').then(channel => channel.send(`<@${name}> | +15000 `))
            
            } 
            if(i === 4){
                var name = res[i].userID
                if (!name) return;
                let data = await User.findOne({ guildID: message.guild.id, userID: name });
                data.money += 10000;
                data.save();
                bot.channels.fetch('974372861454196736').then(channel => channel.send(`<@${name}> | +10000 `))
            
            }
            if(i >= 5){
                var name = res[i].userID
                if (!name) return;
                let data = await User.findOne({ guildID: message.guild.id, userID: name });
                data.money += 5000;
                data.save();
                bot.channels.fetch('974372861454196736').then(channel => channel.send(`<@${name}> | +5000 `))
            
            }
        }
        
            message.channel.send(`**Weekly Msg Points Added**`)
        });
    }
}
