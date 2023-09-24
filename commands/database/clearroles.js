module.exports = {
    name: 'clearrole',
    description: 'Clear weekly roles',
    aliases: [],
    public: true,
    async execute(bot, message, args, config) {
        if(message.channel.id != "923061932272017449") return
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
 
    const ayy = bot.emojis.cache.get("942977992647401482");
    message.channel.send(`${ayy} **Clearing Role Stats** ${ayy}`).then((msg)=> {
                setTimeout(function(){
                     msg.edit(`**Role Stats Cleared**`);
                       }, 3000)
                     });
  }
}
