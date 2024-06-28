async function guildMemberRemove(member, User) {
  const mem = member.user.username;
  let user = await User.findOne({
    guildID: member.guild.id,
    userID: member.id,
  });
  if (!user) return;
  if (user.level > 3) return;
  if (user.vclevel > 4) return;
  let user1 = await User.deleteOne({
    guildID: member.guild.id,
    userID: member.id,
  });
  member.guild.channels.cache
    .get("923061932272017449")
    .send(
      `\`[✅ DataBase]\` **${mem}** (${member.id}) was deleted from the database`
    );
}
module.exports = { guildMemberRemove };
