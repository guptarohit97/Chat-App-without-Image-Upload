import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  try{
      const {message}=req.body;
      const {id:receiverId}=req.params;
      const senderId=req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] }
    });
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
        messages: []
      });
    }
    const newMessage = await Message.create({
      senderId,
      receiverId,
      message
    });
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    await Promise.all([conversation.save(),newMessage.save()]);
    res.status(200).json({ message: "Message sent successfully", data: newMessage });
  } catch (error) {
    console.log("Error in sendMessage:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: conversationId } = req.params;

    const conversation = await Conversation.findById(conversationId).populate({
      path: "messages",
      populate: {
        path: "senderId receiverId",
        select: "username fullName"
      }
    });

    if (!conversation) {
      return res.status(404).json({ message: "Conversation not found" });
    }
    const messages= conversation.messages;

    res.status(200).json({ message: "Messages retrieved successfully", data: messages });
  } catch (error) {
    console.log("Error in getMessages:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
