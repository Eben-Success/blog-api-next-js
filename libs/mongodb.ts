import mongoose from "mongoose";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGO_URI: string;
    }
  }
}

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected successfully");
  } catch (error) {
    console.log(`Error connecting to database: ${error}`);
  }
};

export default connectMongoDB;
