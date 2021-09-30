import { Request, Response } from "express";
import Order from "../models/Order";

export const getAllOrders = async (req:Request ,res:Response) => {
    const orders = await Order.find()
    res.json(orders)
}

export const createNewOrder = async (req:Request,res:Response) => {
    const { comprador , items , total } = req.body
    const data = {
        comprador,
        items,
        total
    }
    const newOrder = new Order(data)
    await newOrder.save()
    res.json(newOrder)
}

export const deleteOrder = async (req:Request,res:Response) => {
    const {id} = req.params

    const findOrder = await Order.findByIdAndDelete(id)

    if (!findOrder) {
        return res.json({
            msg: "No existe un producto con ese ID"
        })
    }

    res.status(400).json({
        msg: "Orden eliminada"
    })
}
