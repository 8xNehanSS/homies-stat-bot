const schema = mongoose.Schema({
    guildID: String,
    userID: String,
    
    time: { type: Number, default: 0 }
});
module.exports = mongoose.model("Mutes", schema)
