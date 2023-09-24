const schema = mongoose.Schema({
    guildID: String,
    userID: String,
    
    time: { type: Number, default: 0 },
    messageafk: { type: String, default: "Do not ping" },
});
module.exports = mongoose.model("Afk", schema)
