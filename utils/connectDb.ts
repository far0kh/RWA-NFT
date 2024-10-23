import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL!;

interface MongooseConn {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConn = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

export const connectToDb = async () => {
  try {
    if (cached.conn) return cached.conn;

    cached.promise =
      cached.promise ||
      mongoose.connect(MONGODB_URL, {
        dbName: "subscribe",
        bufferCommands: false,
        connectTimeoutMS: 30000,
      });

    cached.conn = await cached.promise;

    return cached.conn;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    // process.exit(1);
  }
};

export const disconnectDb = async () => {
  await mongoose.disconnect();
};
