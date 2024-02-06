import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};
export default connectToMongoDB;
