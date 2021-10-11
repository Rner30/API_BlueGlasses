import { Request, Response } from "express";
import Product from "../models/Product";

export const getAllProducts = async (
	req: Request,
	res: Response
): Promise<Response> => {

	const {limit = 10} = req.query

	const products = await Product
		.find()
		.limit(Number(limit))
		
	return res.json(products);
};

export const getOneProduct = async (
	req: Request,
	res: Response
): Promise<Response> => {

	const { id } = req.params;

	const product = await Product.findById(id);
	return res.json(product);

};

export const getAllItemsOfOneCategory = async (
	req: Request,
	res: Response
): Promise<Response> => {

	const { name } = req.params;
	
	const nameExists = await Product.find({ category: name });

	if (!nameExists) {
		return res.status(404).json({
			msg: "No hay una categoria existente con ese nombre",
		});
	}
	return res.json(nameExists);

};

export const createProduct = async (
	req: Request,
	res: Response
): Promise<Response> => {

	const { name, price, description, stock, category, image } = req.body;
	
	const productExists = await Product.findOne({ name: name });

	if (productExists) {
		return res.json({
			msg: "El producto ya existe",
		});
	}
	const data = {
		name,
		description,
		price,
		stock,
		category,
		image,
	};
	const newProduct = new Product(data);
	await newProduct.save();
	return res.status(201).json(newProduct);

};

export const UpdateProduct = async (
	req: Request,
	res: Response
): Promise<Response> => {

	const { id } = req.params;

	const { name, description, price, stock, category, image } = req.body;

	const productExists = await Product.findById(id);

	if (!productExists) {
		return res.status(404).json({
			msg: "El producto no existe",
		});
	}

	const data = {
		name,
		description,
		price,
		stock,
		category,
		image,
	};
	const updatedProduct = await Product.findByIdAndUpdate(id, data);

	return res.status(201).json(updatedProduct);
    
};
