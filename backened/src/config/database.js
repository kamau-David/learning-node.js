import mongoose from "mongoose";

const connectDB = async () => {
try {
    const connectionInstance = await mongoose.connect(``)
    console.log()
} catch (error) {
    console.log("Mongodb connection failed: ", error);
    process.exit(1)
}
}

export default connectDB;