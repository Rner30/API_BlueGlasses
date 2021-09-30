"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productsController_1 = require("../controllers/productsController");
const express_validator_1 = require("express-validator");
const validateFields_1 = require("../middleware/validateFields");
const router = (0, express_1.Router)();
router.get('/', productsController_1.getAllProducts);
router.get('/:id', [
    (0, express_validator_1.check)('id', 'No es un ID valido de Mongo').isMongoId(),
    validateFields_1.validateFields
], productsController_1.getOneProduct);
router.get('/category/:name', [
    (0, express_validator_1.check)('name', 'Se necesita un nombre para realizar la busqueda').not().isEmpty()
], productsController_1.getAllItemsOfOneCategory);
router.post('/', [
    (0, express_validator_1.check)('name', "El nombre es requerido").not().isEmpty(),
    (0, express_validator_1.check)('price', "El precio es requerido").not().isEmpty(),
    (0, express_validator_1.check)('price', "El precio debe ser un valor numerico").isNumeric().not().isString(),
    (0, express_validator_1.check)('stock', "El stock es necesario").not().isEmpty(),
    (0, express_validator_1.check)('stock', "El stock debe ser un valor numerico").isNumeric().not().isString(),
    (0, express_validator_1.check)('category', "La categoria es necesaria").not().isEmpty(),
    validateFields_1.validateFields
], productsController_1.createProduct);
exports.default = router;
//# sourceMappingURL=products_Route.js.map