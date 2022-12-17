const mongoose = require('mongoose');
const GroupSchema = new mongoose.Schema({
id: { type: String,  unique: true ,required: true },
events: { type: String, default: "false" },
nsfw: { type: String, default: "false" },
welcome:{ type: String, default: "@pp *يا مراحب👋,* @user \n*حيا بك في🙆‍♂️ * @gname \n*عدد الأعضاء* : @count th" },
goodbye:{ type: String, default: "@pp *تروح يجي غيرك يروح غيرك يجي غيروا😏.*\nUser: @user" },
botenable: { type: String, default: "true" },
antilink: { type: String, default: "true" },
economy: { type: String, default: "false" }
})
const sck =mongoose.model("Sck", GroupSchema)
module.exports = { sck }
