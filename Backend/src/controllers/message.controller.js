import cloudinary from "../lib/cloudinary.js";
import { Message } from "../Modles/message.model.js";
import { User } from "../Modles/user.modle.js";
// import bcrypt from "bcryptjs";
import ApiError from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
// import { generateToken } from "../utils/TokenGen";
import { asyncHandler } from "../utils/asyncHandler.js";
// import cloudinary from "../lib/cloudinary";


const getuserFromSidebar = asyncHandler(async (req, res) => {
 try {
  const logedInUserId = req.user._id

  const filterUsers = await User.find({ _id: { ne: logedInUserId } }).select("-password")

  res.status(200).json(new ApiResponse(200, "message send successfuly"))
 } catch (error) {
  console.log("error in getteing user ", error.message);
  throw new ApiError(500, "internal server error ")

 }
})
const getmessage = asyncHandler(async (req, res) => {
 try {
  const { id: userTochat } = req.params
  const myId = req.user._id;
  const Message = await Message.find({
   $or: [
    {
     senderId: myId, receicerId: userTochat
    },
    {
     senderId: userTochat, receiverId: myId
    }
   ]
  })
  res.status(200).json(new ApiResponse("user Send message send successfully"))
 } catch (error) {

 }
})
const sendMessage = asyncHandler(async (req, res) => {
 try {

  const { text, image } = req.body
  const { id: receicerId } = req.params
  const senderId = req.user._id

  let imageUrl;
  if (image) {
   const uploadResponse = await cloudinary.uploader.upload(image);
   imageUrl = uploadResponse.secure_url
  }

  const newMessage = new Message({
   senderId,
   receiverId,
   text,
   image: imageUrl
  })
  await newMessage.save()

  res.status(200).json(new ApiResponse(200, "new user send message "))
 } catch (error) {

  console.log("give an erro while sending the message");

  res.status(500).json(new ApiError(500, "some eror occer while sending the message to ther efrind"))

 }
})
export { getuserFromSidebar }