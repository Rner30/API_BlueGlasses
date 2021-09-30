"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrder = exports.createNewOrder = exports.getAllOrders = void 0;
const Order_1 = __importDefault(require("../models/Order"));
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orders = yield Order_1.default.find();
    res.json(orders);
});
exports.getAllOrders = getAllOrders;
const createNewOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { comprador, items } = req.body;
    const data = {
        comprador,
        items
    };
    const newOrder = new Order_1.default(data);
    yield newOrder.save();
    res.json(newOrder);
});
exports.createNewOrder = createNewOrder;
const deleteOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const findOrder = yield Order_1.default.findByIdAndDelete(id);
    if (!findOrder) {
        return res.json({
            msg: "No existe un producto con ese ID"
        });
    }
    res.status(400).json({
        msg: "Orden eliminada"
    });
});
exports.deleteOrder = deleteOrder;
//# sourceMappingURL=OrderController.js.map