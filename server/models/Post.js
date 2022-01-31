const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        max: 500
    },
    img: {
        type: String
    },
    likes: {
        type: Array,
        default: []
    },
}, { timestamps: true });

module.exports = mongoose.model("Post", PostSchema);
<<<<<<< HEAD:Backend-RestApi-Nodejs/models/Post.js
//I am Ready to contribute
=======
//i am adding command
>>>>>>> a1b5b4bcd19ae9d139f4392a052b0266a81cc45d:server/models/Post.js
