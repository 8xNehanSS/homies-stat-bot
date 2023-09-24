const ms = require('ms');
const prettySeconds = require('pretty-seconds');

module.exports = {
    name: 'clearweek',
    description: 'Clear weekly stats and perform various actions',
    aliases: [],
    public: true,
    async execute(bot, message, args, config) {
        if (message.channel.id != '923061932272017449') return;

        const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

        // Function to update winners
        const updateWinners = async () => {
            User.find({ guildID: message.guild.id }).sort([['wmessages','descending']]).exec((err,res) => {
        let embed = new Discord.MessageEmbed().setTitle("**Weekly Messages Leaderboard**").setColor(config.color).setThumbnail("https://cdn.discordapp.com/attachments/861614593444937739/958954846340382730/output-onlinepngtools.png").setFooter("Resets every Sunday 10PM IST").setTimestamp()
        if(res.length === 0){ embed.setDescription('Unfortunately the table for this server is empty.') }
        else {
            let name0 = bot.users.cache.get(res[0].userID) || "User left server"
            let name1 = bot.users.cache.get(res[1].userID) || "User left server"
            let name2 = bot.users.cache.get(res[2].userID) || "User left server"
            let name3 = bot.users.cache.get(res[3].userID) || "User left server"
            let name4 = bot.users.cache.get(res[4].userID) || "User left server"
            let name5 = bot.users.cache.get(res[5].userID) || "User left server"
            let name6 = bot.users.cache.get(res[6].userID) || "User left server"
            let name7 = bot.users.cache.get(res[7].userID) || "User left server"
            let name8 = bot.users.cache.get(res[8].userID) || "User left server"
            let name9 = bot.users.cache.get(res[9].userID) || "User left server"
            embed.setDescription(`**1**. ${name0} - **${res[0].wmessages.toLocaleString()}** messages\n**2**. ${name1} - **${res[1].wmessages.toLocaleString()}** messages\n**3**. ${name2} - **${res[2].wmessages.toLocaleString()}** messages\n**4**. ${name3} - **${res[3].wmessages.toLocaleString()}** messages\n**5**. ${name4} - **${res[4].wmessages.toLocaleString()}** messages\n**6**. ${name5} - **${res[5].wmessages.toLocaleString()}** messages\n**7**. ${name6} - **${res[6].wmessages.toLocaleString()}** messages\n**8**. ${name7} - **${res[7].wmessages.toLocaleString()}** messages\n**9**. ${name8} - **${res[8].wmessages.toLocaleString()}** messages\n**10**. ${name9} - **${res[9].wmessages.toLocaleString()}** messages\n`)
        }
        bot.channels.fetch('973925149516640266').then(channel => channel.send({ embeds: [embed] }));
        });

        User.find({ guildID: message.guild.id }).sort([['vcweek','descending']]).exec((err,res) => {
            let embed = new Discord.MessageEmbed().setTitle("**Weekly Voice Activity Leaderboard**").setColor(config.color).setThumbnail("https://cdn.discordapp.com/attachments/861614593444937739/958954846340382730/output-onlinepngtools.png").setFooter("Resets every Sunday 10PM IST").setTimestamp()
            if(res.length === 0){ embed.setDescription('Unfortunately the table for this server is empty.') }
            else {
                let name0 = bot.users.cache.get(res[0].userID) || "User left server"
                let name1 = bot.users.cache.get(res[1].userID) || "User left server"
                let name2 = bot.users.cache.get(res[2].userID) || "User left server"
                let name3 = bot.users.cache.get(res[3].userID) || "User left server"
                let name4 = bot.users.cache.get(res[4].userID) || "User left server"
                let name5 = bot.users.cache.get(res[5].userID) || "User left server"
                let name6 = bot.users.cache.get(res[6].userID) || "User left server"
                let name7 = bot.users.cache.get(res[7].userID) || "User left server"
                let name8 = bot.users.cache.get(res[8].userID) || "User left server"
                let name9 = bot.users.cache.get(res[9].userID) || "User left server"
    
                let vc0 = prettySeconds(res[0].vcweek).replace(/ hours/g, 'h').replace(/ minutes/g, 'm').replace(/ seconds/g, 's').replace(/and/g, '&').replace(/ hour/g, 'h').replace(/ minute/g, 'm').replace(/ days/g, 'd').replace(/ day/g, 'd').replace(/ second/g, 's')
                let vc1 = prettySeconds(res[1].vcweek).replace(/ hours/g, 'h').replace(/ minutes/g, 'm').replace(/ seconds/g, 's').replace(/and/g, '&').replace(/ hour/g, 'h').replace(/ minute/g, 'm').replace(/ days/g, 'd').replace(/ day/g, 'd').replace(/ second/g, 's')
                let vc2 = prettySeconds(res[2].vcweek).replace(/ hours/g, 'h').replace(/ minutes/g, 'm').replace(/ seconds/g, 's').replace(/and/g, '&').replace(/ hour/g, 'h').replace(/ minute/g, 'm').replace(/ days/g, 'd').replace(/ day/g, 'd').replace(/ second/g, 's')
                let vc3 = prettySeconds(res[3].vcweek).replace(/ hours/g, 'h').replace(/ minutes/g, 'm').replace(/ seconds/g, 's').replace(/and/g, '&').replace(/ hour/g, 'h').replace(/ minute/g, 'm').replace(/ days/g, 'd').replace(/ day/g, 'd').replace(/ second/g, 's')
                let vc4 = prettySeconds(res[4].vcweek).replace(/ hours/g, 'h').replace(/ minutes/g, 'm').replace(/ seconds/g, 's').replace(/and/g, '&').replace(/ hour/g, 'h').replace(/ minute/g, 'm').replace(/ days/g, 'd').replace(/ day/g, 'd').replace(/ second/g, 's')
                let vc5 = prettySeconds(res[5].vcweek).replace(/ hours/g, 'h').replace(/ minutes/g, 'm').replace(/ seconds/g, 's').replace(/and/g, '&').replace(/ hour/g, 'h').replace(/ minute/g, 'm').replace(/ days/g, 'd').replace(/ day/g, 'd').replace(/ second/g, 's')
                let vc6 = prettySeconds(res[6].vcweek).replace(/ hours/g, 'h').replace(/ minutes/g, 'm').replace(/ seconds/g, 's').replace(/and/g, '&').replace(/ hour/g, 'h').replace(/ minute/g, 'm').replace(/ days/g, 'd').replace(/ day/g, 'd').replace(/ second/g, 's')
                let vc7 = prettySeconds(res[7].vcweek).replace(/ hours/g, 'h').replace(/ minutes/g, 'm').replace(/ seconds/g, 's').replace(/and/g, '&').replace(/ hour/g, 'h').replace(/ minute/g, 'm').replace(/ days/g, 'd').replace(/ day/g, 'd').replace(/ second/g, 's')
                let vc8 = prettySeconds(res[8].vcweek).replace(/ hours/g, 'h').replace(/ minutes/g, 'm').replace(/ seconds/g, 's').replace(/and/g, '&').replace(/ hour/g, 'h').replace(/ minute/g, 'm').replace(/ days/g, 'd').replace(/ day/g, 'd').replace(/ second/g, 's')
                let vc9 = prettySeconds(res[9].vcweek).replace(/ hours/g, 'h').replace(/ minutes/g, 'm').replace(/ seconds/g, 's').replace(/and/g, '&').replace(/ hour/g, 'h').replace(/ minute/g, 'm').replace(/ days/g, 'd').replace(/ day/g, 'd').replace(/ second/g, 's')
            
                embed.setDescription(`**1**. ${name0} - **${vc0}**\n**2**. ${name1} - **${vc1}**\n**3**. ${name2} - **${vc2}**\n**4**. ${name3} - **${vc3}**\n**5**. ${name4} - **${vc4}**\n**6**. ${name5} - **${vc5}**\n**7**. ${name6} - **${vc6}**\n**8**. ${name7} - **${vc7}**\n**9**. ${name8} - **${vc8}**\n**10**. ${name9} - **${vc9}**\n`)
            }
            bot.channels.fetch('973925149516640266').then(channel => channel.send({ embeds: [embed] }));
            }); 

            message.channel.send('Winners Updated');
            await sleep(5000);
        };

        // Function to add week points
        const addWeekPoints = async () => {
            bot.channels.fetch('974372861454196736').then(channel => channel.send(`MSG POINTS`))
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
            } else if(i === 1){
                var name = res[i].userID
                if (!name) return;
                let data = await User.findOne({ guildID: message.guild.id, userID: name });
                data.money += 50000;
                data.save();
                bot.channels.fetch('974372861454196736').then(channel => channel.send(`<@${name}> | +50000 `))
            
            } else if(i === 2){
                var name = res[i].userID
                if (!name) return;
                let data = await User.findOne({ guildID: message.guild.id, userID: name });
                data.money += 25000;
                data.save();
                bot.channels.fetch('974372861454196736').then(channel => channel.send(`<@${name}> | +25000 `))
            
            } else if(i === 3){
                var name = res[i].userID
                if (!name) return;
                let data = await User.findOne({ guildID: message.guild.id, userID: name });
                data.money += 15000;
                data.save();
                bot.channels.fetch('974372861454196736').then(channel => channel.send(`<@${name}> | +15000 `))
            
            } else if(i === 4){
                var name = res[i].userID
                if (!name) return;
                let data = await User.findOne({ guildID: message.guild.id, userID: name });
                data.money += 10000;
                data.save();
                bot.channels.fetch('974372861454196736').then(channel => channel.send(`<@${name}> | +10000 `))
            
            } else {
                var name = res[i].userID
                if (!name) return;
                let data = await User.findOne({ guildID: message.guild.id, userID: name });
                data.money += 5000;
                data.save();
                bot.channels.fetch('974372861454196736').then(channel => channel.send(`<@${name}> | +5000 `))
            
            }
        }
        });

            message.channel.send('Weekly Msg Points Added');
            await sleep(5000);
        };

        const addweekVCPoints = async () => {
            bot.channels.fetch('974372861454196736').then(channel => channel.send(`VC POINTS`))

      User.find({ guildID: message.guild.id }).sort([['vcweek','descending']]).exec(async(err,res) => {
        for(i = 0; i < 19; i++){
            if(i === 0){
                var name = res[i].userID
                if (!name) return;
                let data = await User.findOne({ guildID: message.guild.id, userID: name });
                data.money += 100000;
                data.save();
                bot.channels.fetch('974372861454196736').then(channel => channel.send(`<@${name}> | +100000 `))
            
            } else if(i === 1){
                var name = res[i].userID
                if (!name) return;
                let data = await User.findOne({ guildID: message.guild.id, userID: name });
                data.money += 50000;
                data.save();
                bot.channels.fetch('974372861454196736').then(channel => channel.send(`<@${name}> | +50000 `))
            
            } else if(i === 2){
                var name = res[i].userID
                if (!name) return;
                let data = await User.findOne({ guildID: message.guild.id, userID: name });
                data.money += 25000;
                data.save();
                bot.channels.fetch('974372861454196736').then(channel => channel.send(`<@${name}> | +25000 `))
            
            } else if(i === 3){
                var name = res[i].userID
                if (!name) return;
                let data = await User.findOne({ guildID: message.guild.id, userID: name });
                data.money += 15000;
                data.save();
                bot.channels.fetch('974372861454196736').then(channel => channel.send(`<@${name}> | +15000 `))
            
            } else if(i === 4){
                var name = res[i].userID
                if (!name) return;
                let data = await User.findOne({ guildID: message.guild.id, userID: name });
                data.money += 10000;
                data.save();
                bot.channels.fetch('974372861454196736').then(channel => channel.send(`<@${name}> | +10000 `))
            
            } else {
                var name = res[i].userID
                if (!name) return;
                let data = await User.findOne({ guildID: message.guild.id, userID: name });
                data.money += 5000;
                data.save();
                bot.channels.fetch('974372861454196736').then(channel => channel.send(`<@${name}> | +5000 `))
            
            }
        }
        });
            message.channel.send('Weekly VC Points Added');
            await sleep(5000);
        };

        // Function to clear roles
        const clearRoles = async () => {
            let Role1 = message.guild.roles.cache.get("933679395200204800");
                Role1.members.forEach(member => { // Looping through the members of Role.
                    setTimeout(() => {
                            member.roles.remove(Role1); // Removing the Role.
                         }, 3000);
                     });  
            
            let Role2 = message.guild.roles.cache.get("933688895143563284");
                Role2.members.forEach(member => { // Looping through the members of Role.
                             setTimeout(() => {
                                     member.roles.remove(Role2); // Removing the Role.
                                  }, 3000);
                              }); 
                              
            let Role3 = message.guild.roles.cache.get("933688976697622558");
                Role3.members.forEach(member => { // Looping through the members of Role.
                    setTimeout(() => {
                            member.roles.remove(Role3); // Removing the Role.
                         }, 3000);
                     });
            let Role4 = message.guild.roles.cache.get("944128526930559047");
                     Role4.members.forEach(member => { // Looping through the members of Role.
                         setTimeout(() => {
                                 member.roles.remove(Role4); // Removing the Role.
                              }, 3000);
                          });

            message.channel.send('Roles cleared');
            await sleep(5000);
        };

        // Function to clear weekly messages and ranks
        const clearWeeklyData = async () => {
            let datax = await User.updateMany({ wmessages: { $exists: true} }, { $set: { wmessages: 0 }});
      let datax4 = await User.updateMany({ wmessages: { $exists: true} }, { $set: { gen1messages: 0 }});
      let datax5 = await User.updateMany({ wmessages: { $exists: true} }, { $set: { gen2messages: 0 }});
      let datax1 = await User.updateMany({ test1: { $exists: true} }, { $set: { test1: "no" }});
      let datax2 = await User.updateMany({ test2: { $exists: true} }, { $set: { test2: "no" }});
      let datax3 = await User.updateMany({ test3: { $exists: true} }, { $set: { test3: "no" }});

      let authorx = await User.findOne({ guildID: message.guild.id, userID: message.author.id });
      authorx.wmessages = 0;
      authorx.test1 = "no";
      authorx.test2 = "no";
      authorx.test3 = "no";
      authorx.gen1messages = 0;
      authorx.gen2messages = 0;
            authorx.save();

            let datay5 = await Guild.findOne({ guildID: message.guild.id })
        datay5.rankss12 = 0;
        datay5.save();

            message.channel.send('Weekly data cleared');
            await sleep(5000);
        };

        // Function to clear weekly voice activity
        const clearWeeklyVC = async () => {
            let dataz = await User.updateMany({ vcweek: { $exists: true} }, { $set: { vcweek: 0 }});

      

        let authorz = await User.findOne({ guildID: message.guild.id, userID: message.author.id });
        authorz.vcweek = 0;
        authorz.save();

            message.channel.send('Weekly VC cleared');
        };

        // Run functions sequentially with 5-second intervals
        await updateWinners();
        await sleep(5000);
        await addWeekPoints();
        await addweekVCPoints();
        await sleep(5000);
        await clearRoles();
        await sleep(5000);
        await clearWeeklyData();
        await sleep(5000);
        await clearWeeklyVC();
        message.channel.send("Completed!")
    }
};
