"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = require("./routes");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
// GET - Buscar Info
// POST = Cadastrar INFO
// PUT = Atualizar INFO
// PATCH = Atualizar uma informação única
// DELETE = Deletar uma INFO
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(routes_1.routes);
app.listen(3333, () => {
    console.log('HTTP server running!');
});
