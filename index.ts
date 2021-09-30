import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { dbConnection } from './db/db'

import ProductsRoute from './routes/products_Route'
import OrdersRoute from './routes/orders_Route'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('public'))

dbConnection()

app.use('/api/products',ProductsRoute)
app.use('/api/orders',OrdersRoute)


app.listen(process.env.PORT,()=>{
    console.log("SERVER UP")
})



