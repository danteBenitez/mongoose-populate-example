import { Router } from "express";
import {
  getAllPublications,
  getPublication,
  createPublication,
  deletePublication,
  updatePublication,
} from "../controllers/publication.controllers.js";
import { param } from "express-validator";
import { validate } from "../middleware/validation.js";

const router = Router();

const idParam = param("publicationId")
  .toInt()
  .isNumeric()
  .withMessage("Debe proporcionar un ID de publicación.");

router.get("/", getAllPublications);
router.get("/:publicationId", validate(idParam), getPublication);
router.post("/", validate(createPublication), createPublication);
router.put(
  "/:publicationId",
  validate(idParam, updatePublication),
  updatePublication
);
router.delete("/:publicatioId", validate(idParam), deletePublication);

export default router;
