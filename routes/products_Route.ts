import { Router } from "express";
import { createProduct, getAllItemsOfOneCategory, getAllProducts, getOneProduct } from "../controllers/productsController";
import { check } from "express-validator";
import { validateFields } from "../middleware/validateFields";

const router = Router()

router.get('/', getAllProducts)

router.get('/:id',[
    check('id','No es un ID valido de Mongo').isMongoId(),
    validateFields
],getOneProduct)

router.get('/category/:name',[
    check('name','Se necesita un nombre para realizar la busqueda').not().isEmpty()
],getAllItemsOfOneCategory)


router.post('/',[
    check('name',"El nombre es requerido").not().isEmpty(),
    check('price',"El precio es requerido").not().isEmpty(),
    check('price',"El precio debe ser un valor numerico").isNumeric().not().isString(),
    check('stock',"El stock es necesario").not().isEmpty(),
    check('stock',"El stock debe ser un valor numerico").isNumeric().not().isString(),
    check('category',"La categoria es necesaria").not().isEmpty(),
    validateFields
],createProduct)


export default router


