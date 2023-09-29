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
import { createPublicationSchema, updatePublicationSchema } from "../schema/publications.schema.js";

const router = Router();

const idParam = param("publicationId")
  .toInt()
  .isNumeric()
  .withMessage("Debe proporcionar un ID de publicación.");

router.get("/", getAllPublications);
router.get("/:publicationId", validate(idParam), getPublication);
router.post("/", validate(createPublicationSchema), createPublication);
router.put(
  "/:publicationId",
  validate(idParam, updatePublicationSchema),
  updatePublication
);
router.delete("/:publicatioId", validate(idParam), deletePublication);

export default router;
