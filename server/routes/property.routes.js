import express from "express";
import { multerUploads } from "../middlewares/multer.js";

import {
  createProperty,
  deleteProperty,
  getAllProperties,
  getPropertyDetail,
  updateProperty,
} from "../controllers/property.controller.js";

const router = express.Router();

router.route("/").get(getAllProperties);

router.route("/:id").get(getPropertyDetail);

router.post("/", createProperty);

router.route("/:id").patch(updateProperty);

router.route("/:id").delete(deleteProperty);

export default router;
