const config = require('../config.json')
const schema = mongoose.Schema({
    guildID: String,
    userID: String,
    roleID: String,
});
module.exports = mongoose.model("Roles", schema)
