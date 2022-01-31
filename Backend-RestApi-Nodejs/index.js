const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

dotenv.config();

try {
    mongoose.connect(process.env.MONGO_URL, () => {
        console.log("db connected");
    });
} catch (error) {
    console.log("db not connected " + error);
}

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("combined"));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.listen(8800, () => {
    console.log("Backend server is running! " + 8800)
})

//hi