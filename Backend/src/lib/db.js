import mongoose from "mongoose";

const connectDb = async () => {
 try {
  const connect = await mongoose.connect(process.env.MONGODB_URL)
  console.log("mongo db connected succesfuly");

 } catch (error) {
  console.log("mongoDB connection error:", error);

 }
}

export default connectDb