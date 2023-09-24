module.exports = {
    name: 'buy',
    description: 'Buy items from store',
    aliases: [],
    public: true,
    async execute(bot, message, args, config) {

        if(message.channel.id === "923061898281369650" || message.channel.id === "940880842761338930"){
            message.delete();
            return message.channel.send("Use this cmd in bots").then(msg => {
              setTimeout(() => msg.delete(), 5000)
            })
            .catch();}

    let author = await User.findOne({ guildID: message.guild.id, userID: message.author.id });
    let guild = await Guild.findOne({ guildID: message.guild.id });
    let member1222 = await message.guild.members.fetch(message.author);
            
    if(args[0] != null){

    if(args[0] === "1") {if(author.money < "100") return message.channel.send(`You don't have enough points.`)
    let role = message.guild.roles.cache.get("930738576910585866");
    author.money -= Math.floor(parseInt("100"));
    author.inven1 = "Peasants";
    author.save();
    member1222.roles.add(role);
    message.channel.send(`Successfully bought **Peasants** Role`)}

    if(args[0] === "2"){
        if(author.inven1 != "Peasants") return message.channel.send("You need to own **Peasants** to buy **Lower Class Role**")
    if(author.money < "1000") return message.channel.send(`You don't have that many points.`)
    let role = message.guild.roles.cache.get("930738608946696212");
    let role1 = message.guild.roles.cache.get("930738576910585866");
    author.money -= Math.floor(parseInt("1000"));
    author.inven1 = "Lower Class"
    author.save();
    member1222.roles.remove(role1);
    member1222.roles.add(role);
    message.channel.send(`Successfully bought **Lower Class** Role`)
    } 
    
    if(args[0] === "3"){
        if(author.inven1 != "Lower Class") return message.channel.send("You need to own **Lower Class** to buy **Middle Class Role**")
    if(author.money < "10000") return message.channel.send(`You don't have that many points.`)
    let role = message.guild.roles.cache.get("930738630408962108");
    let role1 = message.guild.roles.cache.get("930738608946696212");
    author.money -= Math.floor(parseInt("10000"));
    author.inven1 = "Middle Class"
    author.save();
    member1222.roles.remove(role1);
    member1222.roles.add(role);
    message.channel.send(`Successfully bought **Middle Class** Role`)
    }

    if(args[0] === "4"){
        if(author.inven1 != "Middle Class") return message.channel.send("You need to own **Middle Class** to buy **Upper Class Role**")
        if(author.money < "15000") return message.channel.send(`You don't have that many points.`)
        let role = message.guild.roles.cache.get("930738660133961768");
        let role1 = message.guild.roles.cache.get("930738630408962108");
        author.money -= Math.floor(parseInt("15000"));
        author.inven1 = "Upper Class"
        author.save();
        member1222.roles.remove(role1);
        member1222.roles.add(role);
        message.channel.send(`Successfully bought **Upper Class** Role`)
    }

    if(args[0] === "5"){
        if(author.inven1 != "Upper Class") return message.channel.send("You need to own **Upper Class** to buy **Wealthy Role**")
        if(author.money < "30000") return message.channel.send(`You don't have that many points.`)
        let role = message.guild.roles.cache.get("930738694439190558");
        let role1 = message.guild.roles.cache.get("930738660133961768");
        author.money -= Math.floor(parseInt("30000"));
        author.inven1 = "Wealthy"
        author.save();
        member1222.roles.remove(role1);
        member1222.roles.add(role);
        message.channel.send(`Successfully bought **Wealthy** Role`)
    }
    if(args[0] === "6"){
        if(author.inven1 != "Wealthy") return message.channel.send("You need to own **Wealthy** to buy **Super Wealthy Role**")
    if(author.money < "50000") return message.channel.send(`You don't have that many points.`)
    let role = message.guild.roles.cache.get("941151026415808612");
    let role1 = message.guild.roles.cache.get("930738694439190558");
    author.money -= Math.floor(parseInt("50000"));
    author.inven1 = "Super Wealthy"
    author.save();
    member1222.roles.remove(role1);
    member1222.roles.add(role);
    message.channel.send(`Successfully bought **Super Wealthy** Role`)
    }

    if(args[0] === "7"){
        if(author.inven1 != "Super Wealthy") return message.channel.send("You need to own **Super Wealthy** to buy **Royalty Role**")
    if(author.money < "100000") return message.channel.send(`You don't have that many points.`)
    let role = message.guild.roles.cache.get("941151149090799637");
    let role1 = message.guild.roles.cache.get("941151026415808612");
    author.money -= Math.floor(parseInt("100000"));
    author.inven1 = "Royalty"
    author.save();
    member1222.roles.remove(role1);
    member1222.roles.add(role);
    message.channel.send(`Successfully bought **Royalty** Role`)
    }

    if(args[0] === "8"){
        if(author.inven1 != "Royalty") return message.channel.send("You need to own **Royalty** to buy **Millionaires Role**")
    if(author.money < "1000000") return message.channel.send(`You don't have that many points.`)
    let role = message.guild.roles.cache.get("941976988036497448");
    let role1 = message.guild.roles.cache.get("941151149090799637");
    author.money -= Math.floor(parseInt("1000000"));
    author.inven1 = "Millionaires"
    author.save();
    member1222.roles.remove(role1);
    member1222.roles.add(role);
    message.channel.send(`Successfully bought **Millionaires** Role`)
    }
    
    if(args[0] === "9"){
        if(author.inven1 != "Millionaires") return message.channel.send("You need to own **Millionaires** to buy **Multi Millionaires Role**")
    if(author.money < "5000000") return message.channel.send(`You don't have that many points.`)
    let role = message.guild.roles.cache.get("941977227761954836");
    let role1 = message.guild.roles.cache.get("941976988036497448");
    author.money -= Math.floor(parseInt("5000000"));
    author.inven1 = "Multi Millionaires"
    author.save();
    member1222.roles.remove(role1);
    member1222.roles.add(role);
    message.channel.send(`Successfully bought **Multi Millionaires** Role`)
    }



    if(args[0] === "10"){
        if(author.money < "300000") return message.channel.send(`You don't have that many points.`)
    if(args[1] != null){
        const daddd = guild.usedcmd;
        console.log(daddd);
        if(guild.usedcmd.includes(args[1])) return message.channel.send("Command already in use")
    author.money -= Math.floor(parseInt("300000"));
    author.inven3 = `${author.inven3} ${args[1]}`;
    author.save();
    const obj = args[1];
    guild.usedcmd.push(obj);
    guild.save();
    message.channel.send(`Successfully bought the command **${args[1]}**\nDM an admin to setup the command`)} else return message.channel.send(`Mention the command you want to buy. Ex; ".buy 10 nex"`)
    }
 
   if(args[0] === "11"){
    if(author.sustime == null || config.suscool - (Date.now() - author.sustime) < "0"){
        return message.channel.send("Sus cooldown already ended")
    } else {
        if(author.money < "25000") return message.channel.send(`You don't have that many points.`)
        author.money -= Math.floor(parseInt("25000"));
        author.sustime = -1;
        author.save();
        message.channel.send(`Sus cooldown resetted`)
    }
} 

if(args[0] === "9090909"){
    if(author.money < "600000") return message.channel.send(`You don't have that many points.`)
if(args[1] != null){
author.money -= Math.floor(parseInt("600000"));
author.inven3 = `${author.inven3} ${args[1]}`;
author.save();
message.channel.send(`Successfully bought the command **${args[1]}**\nDM an admin to setup the command`)} else return message.channel.send(`Mention the command you want to buy. Ex; ".buy 12 nex"`)
}

} else {message.channel.send("Enter item number!")}
}}

//send msg ; Successfully bought the command **${args[1]}**\nDM an admin to setup the command
//send msg2 ; Mention the command you want to buy