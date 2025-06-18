import express from 'express'
import cors from 'cors'
import route from './routes/router.js'
const app = express()

app.use(express.json())

app.use(cors({
    origin:"*",
    credentials:true
}))

app.use('/api/',route)

export default app