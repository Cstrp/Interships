"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const messageModel = new mongoose_1.Schema({
    sender: { type: String, required: true },
    recipient: { type: String, required: true },
    subject: { type: String, required: true },
    body: { type: String, required: true },
    createdAt: { type: Date, default: Date.now() },
}, { timestamps: true, versionKey: false });
exports.default = (0, mongoose_1.model)("Messages", messageModel);
