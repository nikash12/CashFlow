import mongoose from 'mongoose'

const UserSchema = mongoose.Schema({
    username:{
        type:String,
        lowercase:true,
        required:true,
        unique:true,
        trim: true,
        minLength: 3,
        maxLength: 30
    },
    firstname:{
        type:String,
        lowercase:true,
        required:true,
        trim:true,
        maxLength: 30
    },
    lastname:{
        type:String,
        lowercase:true,
        required:true,
        trim:true,
        maxLength: 30
    },
    password: {
        type: String,
        required: [true, "Must provide password"]
    },

},{timestamps:true})

const User = mongoose.model("User",UserSchema)

export default User