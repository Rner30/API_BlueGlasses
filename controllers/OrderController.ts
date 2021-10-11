import { Request, Response } from "express";
import { AnyObject } from "mongoose";
import Order from "../models/Order";
import Product from "../models/Product";

export const getAllOrders = async (
	req: Request,
	res: Response
): Promise<Response> => {

	const orders = await Order.find();
	return res.json(orders);

};

export const createNewOrder = async (
	req: Request,
	res: Response
):Promise<Response> => {

	const { comprador, items, total } = req.body;
	
	const data = {
		comprador,
		items,
		total,
	};
	
	const item = items.item
	
	for (const destructuringItem in item) {
		let nombre = item[destructuringItem].nombre
		let cantidad:any = item[destructuringItem].cantidad

		
		let ItemExists:any = await Product.findOne({name:nombre})
		
		await Product.findOneAndUpdate({name:nombre},{
			stock: ItemExists.stock - cantidad
		})
	}

	const newOrder = new Order(data);
	await newOrder.save();

	return res.json(newOrder);
};

export const deleteOrder = async (
	req: Request,
	res: Response
): Promise<Response> => {

	const { id } = req.params;
	const findOrder = await Order.findByIdAndDelete(id);

	if (!findOrder) {
		return res.json({
			msg: "No existe un producto con ese ID",
		});
	}

	return res.status(400).json({
		msg: "Orden eliminada",
	});

};

export const deleteAllOrders = async (req:Request,res:Response) => {
	try {
		await Order.deleteMany()
		res.json({
			msg: "Ordenes borradas"
		})
	} catch (error) {
		res.json(error)
	}
}
