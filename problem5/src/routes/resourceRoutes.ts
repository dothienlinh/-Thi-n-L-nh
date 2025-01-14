import express from "express";
import resourceController from "../controllers/resourceController";

const router = express.Router();

router.get("/", resourceController.index);

router.get("/create", resourceController.create);

router.post("/", resourceController.store);

router.get("/:id", resourceController.show);

router.get("/:id/edit", resourceController.edit);

router.post("/:id", resourceController.update);

router.get("/:id/delete", resourceController.destroy);

export default router;
