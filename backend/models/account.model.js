import mongoose from 'mongoose'

const AccountSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    balance: {
        type: Number,
        default:0,
        min: [0, "Balance cannot be negative"]
    },

},{timestamps:true})

const Account = mongoose.model("Account",AccountSchema)

export default Account