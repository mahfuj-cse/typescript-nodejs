"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import cors from "cors";
const body_parser_1 = __importDefault(require("body-parser"));
// import "./config/db";
const user_route_1 = __importDefault(require("./routes/user.route"));
const app = (0, express_1.default)();
// app.use(cors());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use("/api/users", user_route_1.default);
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/./views/index.html");
});
// route not found error
app.use((req, res, next) => {
    res.status(404).json({
        message: "route not found",
    });
});
// handling server error
app.use((err, req, res, next) => {
    res.status(500).json({
        message: "something broke",
    });
});
exports.default = app;
