const express = require("express");
const dotenv = require("dotenv")
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const userRoutes = require("./Routes/UserRoutes")
const {notFound, errorHandler} = require("./middleware/errorMiddleware")

const app = express();
app.use(express.json()); // to accept JSON data
dotenv.config();
connectDB();

app.get('/',(req,res) => {
    res.send("API is running....")
})

app.use("/user",userRoutes)

// app.get('/chat/:id',(req,res) => {
//     console.log("req",req.params.id)
//     const singleChat = chats.find(c => c._id === req.params.id)
//     res.send(singleChat)
// })

// app.get('/chats',(req,res) => {
//     res.send(chats)
// })

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000;

app.listen(5000,console.log(`Server starting on Port ${PORT}...`));