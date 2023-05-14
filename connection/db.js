const mongoose = require("mongoose")
require("dotenv").config()

const connection = mongoose.connect("mongodb+srv://hrusikeshviroot:hrusikesh@cluster0.rc7p5yv.mongodb.net/mern")
module.exports=connection