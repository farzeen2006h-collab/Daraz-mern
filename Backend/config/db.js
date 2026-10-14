import mongoose from "mongoose";

const connectdb = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URl);
        console.log("mongodb connected successfully");
    }
    catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

export default connectdb;