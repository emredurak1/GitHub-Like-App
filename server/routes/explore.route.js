import express from "express";
import { getPopularRepositories } from "../controllers/explore.controller.js";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated.js";

const router = express.Router();

router.get("/language/:language", ensureAuthenticated, getPopularRepositories);

export default router;
