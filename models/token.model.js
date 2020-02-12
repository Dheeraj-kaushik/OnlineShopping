const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema.Types;let tokenSchema = new mongoose.Schema({
  userid: { type: ObjectId, ref: "User" }
});

module.exports = mongoose.model("Token", tokenSchema);