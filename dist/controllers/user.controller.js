"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getAllUser = void 0;
let users = require("../models/users.model");
// get users
const getAllUser = (req, res) => {
    res.status(200).json({ users });
};
exports.getAllUser = getAllUser;
// create users
const createUser = (req, res) => {
    const newUser = {
        id: 66,
        username: req.body.username,
        email: req.body.email,
    };
    users.push(newUser);
    res.status(201).json(users);
};
exports.createUser = createUser;
// update user
const updateUser = (req, res) => {
    const userId = Number(req.params.id);
    const { username, email } = req.body;
    users = users.map((user) => user.id === userId ? Object.assign(Object.assign({}, user), { username, email }) : user);
    res.status(200).json(users);
};
exports.updateUser = updateUser;
// delete user
const deleteUser = (req, res) => {
    const userId = Number(req.params.id);
    const initialLength = users.length;
    users = users.filter((user) => user.id !== userId);
    if (users.length === initialLength) {
        res.status(404).json({ message: "User not found" });
    }
    else {
        res.status(200).json(users);
    }
};
exports.deleteUser = deleteUser;
