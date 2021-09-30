"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const OrderSchema = new mongoose_1.Schema({
    comprador: {
        type: Array,
        email: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        }
    },
    items: {
        type: Array,
        cantidad: {
            type: Number,
            required: true
        },
        item: {
            type: Array,
            required: true,
            cantidad: {
                type: Number,
                required: true
            },
            nombre: {
                type: String,
                required: true
            }
        }
    }
});
const Order = (0, mongoose_1.model)('Order', OrderSchema);
exports.default = Order;
//# sourceMappingURL=Order.js.map