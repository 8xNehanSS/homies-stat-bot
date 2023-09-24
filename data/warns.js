const config = require('../config.json')
const schema = mongoose.Schema({
    guildID: String,
    userID: String,
    Content: Array,
});
module.exports = mongoose.model("Warn", schema)
