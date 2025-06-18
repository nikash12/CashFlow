import express from 'express'
import cors from 'cors'
import route from './routes/router.js'
import accRoute from './routes/accounts.router.js'
const app = express()

app.use(express.json())

app.use(cors({
    origin:"*",
    credentials:true
}))

app.use('/api/',route)
app.use('/api/account',accRoute)

export default app