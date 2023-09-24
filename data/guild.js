const config = require('../config.json')
const schema = mongoose.Schema({
    guildID: String,
    prefix: { type: String, default: config.prefix },
    rankss12: { type: Number, default: 0 },
    usedcmd: Array,
    statustype: { type: String, default: "P"},
    status: { type: String, default: "Test"},
    sign: { type: String, default: "idle"}
});
module.exports = mongoose.model("Guild", schema)
