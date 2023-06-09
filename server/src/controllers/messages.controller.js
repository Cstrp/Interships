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
exports.getMessages = exports.sendMessage = void 0;
const message_1 = __importDefault(require("../models/message"));
const sendMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const message = req.body;
        if (!message) {
            return res.status(400).json({ error: "Message is required" });
        }
        const newMessage = yield message_1.default.create(message);
        res.status(200).json({ message: `Message send successfully!`, newMessage });
    }
    catch (err) {
        console.log(err);
    }
});
exports.sendMessage = sendMessage;
const getMessages = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const messages = yield message_1.default.find({}).exec();
        if (!messages) {
            return res.status(400).json({ error: "No messages found" });
        }
        res.status(200).json(messages);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getMessages = getMessages;
