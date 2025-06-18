import Account from "../models/account.model.js";
import User from "../models/user.model.js";
import zod from 'zod'

const accountBalance = async (req, res) => {
    try {
        const {userId} = req.user
        const account = await Account.findOne({userId})
        res.status(201).json({ "balance":account.balance });
    } catch (error) {
        res.status(500).json({ msg: "Registration failed", error: error.message });
    }
};

const accountTransfer = async (req, res) => {
    const session = await mongoose.startSession();
    try {
        const {userId} = req.user
        const {to,amount} = req.body
        const sender = await Account.findOne({userId})
        if (!sender) {
            return res.status(404).json({ msg: "Sender account not found" });
        }
        const receiverUser = await User.findOne({ username: to });
        if (!receiverUser) {
            return res.status(404).json({ msg: "Receiver user not found" });
        }
        if(userId.toString() === receiverUser._id.toString()){
            return res.status(400).json({ msg: "Sender cant send to himself" });
        }
        
        const receiver = await Account.findOne({userId:receiverUser._id})
        if(!receiver){
            return res.status(400).json({
                msg: "Receiver doesnt exists",
            });
        }
        
        if(sender.balance<amount){
            return res.status(400).json({ msg: "Insufficient balance" });
        }
        
        await session.startTransaction();

        sender.balance -= amount;
        receiver.balance += amount;

        await sender.save({ session });
        await receiver.save({ session });

        await session.commitTransaction();
        res.status(201).json({ "message":"Transfer Successfull","balance":sender.balance });
    } catch (error) {
        await session.abortTransaction();
        res.status(500).json({ msg: "Transfer failed", error: error.message });
    }finally{
        await session.endSession()
    }
};

export { accountBalance, accountTransfer };
