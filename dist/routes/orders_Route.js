"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const OrderController_1 = require("../controllers/OrderController");
const validateFields_1 = require("../middleware/validateFields");
const router = (0, express_1.Router)();
router.get('/', OrderController_1.getAllOrders);
router.post('/', [
    (0, express_validator_1.check)('comprador', 'Falta informacion del comprador').not().isEmpty(),
    (0, express_validator_1.check)('items', 'Faltan items').not().isEmpty(),
    validateFields_1.validateFields
], OrderController_1.createNewOrder);
router.delete('/:id', [
    (0, express_validator_1.check)('id', "No es un id de mongo valido").isMongoId()
], OrderController_1.deleteOrder);
exports.default = router;
//# sourceMappingURL=orders_Route.js.map