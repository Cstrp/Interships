"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.messagesRouter = void 0;
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers");
const messagesRouter = express_1.default.Router();
exports.messagesRouter = messagesRouter;
messagesRouter.post("/send", controllers_1.sendMessage);
messagesRouter.get("/messages", controllers_1.getMessages);
