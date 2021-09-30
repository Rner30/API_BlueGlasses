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
exports.createProduct = exports.getAllItemsOfOneCategory = exports.getOneProduct = exports.getAllProducts = void 0;
const Product_1 = __importDefault(require("../models/Product"));
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield Product_1.default.find();
    res.json(products);
});
exports.getAllProducts = getAllProducts;
const getOneProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield Product_1.default.findById(id);
    res.json(product);
});
exports.getOneProduct = getOneProduct;
const getAllItemsOfOneCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.params;
    const nameExists = yield Product_1.default.find({ category: name });
    if (!nameExists) {
        return res.status(404).json({
            msg: "No hay una categoria existente con ese nombre"
        });
    }
    res.json(nameExists);
});
exports.getAllItemsOfOneCategory = getAllItemsOfOneCategory;
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, price, description, stock, category } = req.body;
    const productExists = yield Product_1.default.findOne({ name: name });
    if (productExists) {
        return res.json({
            msg: "El producto ya existe"
        });
    }
    const data = {
        name,
        description,
        price,
        stock,
        category
    };
    const newProduct = new Product_1.default(data);
    yield newProduct.save();
    res.status(201).json(newProduct);
});
exports.createProduct = createProduct;
//# sourceMappingURL=productsController.js.map