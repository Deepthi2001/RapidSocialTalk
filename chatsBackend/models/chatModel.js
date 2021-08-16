// chatName, isGroupChat, users, latestMessage, groupAdmin
const mongoose = require("mongoose")

const chatModel = mongoose.Schema(
  {
    chatName: { type: String, trim: true},
    isGroupChat: {type: Boolean, default: false},
    // array because users will be mininum 2 for 1 on 1 chat and >2 in group chat
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    // to keep latest message at front
    latestMessage: {  type: mongoose.Schema.Types.ObjectId, ref: "Message" },
    groupAdmin: { type: mongoose.Schema.Types.ObjectId, ref: "User"}
  },
  {
    timestamps: true,
  }
)

const Chat = mongoose.model("Chat",chatModel)
module.exports = Chat;