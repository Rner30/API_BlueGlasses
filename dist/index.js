"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./db/db");
const products_Route_1 = __importDefault(require("./routes/products_Route"));
const orders_Route_1 = __importDefault(require("./routes/orders_Route"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.static('public'));
(0, db_1.dbConnection)();
app.use('/api/products', products_Route_1.default);
app.use('/api/orders', orders_Route_1.default);
app.listen(process.env.PORT, () => {
    console.log("SERVER UP");
});
//# sourceMappingURL=index.js.map