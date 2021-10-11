import { Request, Response } from "express";
import mercadopago from "mercadopago";
import { CreatePreferencePayload } from "mercadopago/models/preferences/create-payload.model";

mercadopago.configure({
	access_token:
		"TEST-4202924210092022-100623-ad2b69d8326343e428f6ed1a6cbf2937-421750859",
});

export const createPayment = async (req: Request, res: Response) => {
	const { comprador,items } = req.body;
	const { email } = comprador[0];
	
	const {item} = items[0]

	let listadoItems:Array<Object> = []

	for (const object in item) {
		const items = item[object]
		const {cantidad, nombre,precio} = items
		listadoItems.push({
			title: nombre,
			quantity: cantidad,
			currency_id: "ARS",
			unit_price: Number(precio)
		} ) 
	}

	const preferencia : CreatePreferencePayload = {
		items: listadoItems,
		payer: {
			email: email,
		}
	};
	
	const payment = await mercadopago.preferences.create(preferencia);

	const { id, init_point } = payment.body;

	res.json({
		id,
		init_point,
	});
};

const filters = {
	range: "date_created",
	begin_date: "NOW-1MONTH",
	end_date: "NOW",
	status: "approved",
	operation_type: "regular_payment",
};

export const getAllPayments = async (req: Request, res: Response) => {
	const pagos = await mercadopago.payment.search({
		qs: filters,
	});

	res.json(pagos);
};
