"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    userName: { type: String, required: true, unique: false },
});
exports.default = (0, mongoose_1.model)("Users", userSchema);
