import { Router } from "express";
import {
  getAllUsers,
  getUser,
  updateUser,
  createUser,
  deleteUser,
} from "../controllers/user.controllers.js";
import { param } from "express-validator";
import { createUserSchema, updateUserSchema } from "../schema/user.schema.js";
import { validate } from "../middleware/validation.js";

const router = Router();

const idParam = param(":userId")
  .toInt()
  .isNumeric()
  .withMessage("Debe proporcionar un ID de usuario");

router.get("/", getAllUsers);
router.get("/:userId", validate(idParam), getUser);
router.post("/", validate(createUserSchema), createUser);
router.put("/:userId", validate(idParam, updateUserSchema), updateUser);
router.delete("/:userId", validate(idParam), deleteUser);

export default router;
