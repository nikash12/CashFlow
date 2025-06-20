import { Router } from "express";
import { accountMiddleware,accountTransferMiddleware } from "../middleware/account.middleware.js";
import { accountBalance, accountTransfer } from "../controllers/account.controller.js";
const accRoute = Router()

accRoute.route('/Balance').get(
    accountMiddleware,
    accountBalance
)
accRoute.route('/Transfer').post(
    accountMiddleware,
    accountTransferMiddleware,
    accountTransfer
)

export default accRoute