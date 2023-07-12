import { Request, Response } from "express";

interface User {
  id: number;
  username: string;
  email: string;
}

let users: User[] = require("../models/users.model").default;

// get users
const getAllUser = (req: Request, res: Response): void => {
  res.status(200).json({ users });
};

// create users
const createUser = (req: Request, res: Response): void => {
  const newUser: User = {
    id: 66,
    username: req.body.username,
    email: req.body.email,
  };
  console.log("reg", req.body, users, newUser);

  users.push(newUser);
  res.status(201).json(users);
};

// update user
const updateUser = (req: Request, res: Response): void => {
  const userId: number = Number(req.params.id);
  const { username, email }: { username: string; email: string } = req.body;
  users.forEach((user) => {
    if (user.id === userId) {
      user.username = username;
      user.email = email;
    }
  });
  res.status(200).json(users);
};

// delete user
const deleteUser = (req: Request, res: Response): void => {
  const userId: number = Number(req.params.id);
  const initialLength = users.length;
  users = users.filter((user) => user.id !== userId);
  if (users.length === initialLength) {
    res.status(404).json({ message: "User not found" });
  } else {
    res.status(200).json(users);
  }
};

export { getAllUser, createUser, updateUser, deleteUser };
