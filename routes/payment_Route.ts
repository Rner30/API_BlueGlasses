import { Router } from "express";
import { check } from "express-validator";
import {
	createPayment,
	getAllPayments,
} from "../controllers/paymentController";
import { validateFields } from "../middleware/validateFields";

const router = Router();

router.post(
	"/",
	[
		check("items", "Los items son necesarios").not().isEmpty(),
		validateFields,
	],
	createPayment
);

router.get("/", getAllPayments);

export default router;
