import express, { Router } from "express";

import {
  getAllUser,
  createUser,
  deleteUser,
  updateUser,
} from "../controllers/user.controller";

const router: Router = express.Router();

router.get("/", getAllUser);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);
router.post("/", createUser);

export default router;
