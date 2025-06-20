import jwt from 'jsonwebtoken'
import zod from 'zod'
const accountMiddleware = async(req,res,next)=>{
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ msg: "Token not provided or malformed" });
    }
    const user = jwt.verify(authHeader.split(" ")[1],"nikash13579")
    if(!user){
        return res.status(400).json({
            msg: "Validation failed",
        });
    }
    req.user = { userId: user.userId }; 
    next()
}

const accountTransferMiddleware = async(req,res,next)=>{
    const schema = zod.object({
        to:zod.coerce.string(),
        amount:zod.coerce.number().positive("Amount must be more than 0")
    })
    const result = schema.safeParse(req.body);

    if (!result.success) {
        const errors = result.error.errors.map(e => e.message);
        return res.status(400).json({ msg: "Invalid input", errors });
    }
    req.body.to = result.data.to;
    req.body.amount = result.data.amount;
    
    next()
}
export { accountMiddleware,accountTransferMiddleware }