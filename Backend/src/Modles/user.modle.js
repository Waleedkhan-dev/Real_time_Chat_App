import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
 email: {
  type: String,
  required: true,
  unique: true,
 },
 fullName: {
  type: String,
  reuired: [true, "name is required"]
 },
 password: {
  type: String,
  required: true,
  minmumLength: 6,
 },
 profilePic: {
  type: String,
  default: ""
 }

}, { timestamps: true })

export const User = mongoose.model("User", userSchema)