const mongoose = require("mongoose");
const MONGO_URI = "mongodb+srv://saideepthi2001:mongodb@cluster0.j926nyd.mongodb.net/?retryWrites=true&w=majority"
const connectDB = async () => {
  try {
    console.log("process.env.MONGO_URI",MONGO_URI)
    const conn = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit with a non-zero status code to indicate an error
  }
};

module.exports = connectDB;