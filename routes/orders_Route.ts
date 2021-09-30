import { Router } from "express";
import { check } from "express-validator";
import { createNewOrder, deleteOrder, getAllOrders } from "../controllers/OrderController";
import { validateFields } from "../middleware/validateFields";

const router = Router()

router.get('/',getAllOrders)

router.post('/',[
    check('comprador','Falta informacion del comprador').not().isEmpty(),
    check('items','Faltan items').not().isEmpty(),
    validateFields
] , createNewOrder)

router.delete('/:id',[
    check('id',"No es un id de mongo valido").isMongoId()
],deleteOrder)
export default router