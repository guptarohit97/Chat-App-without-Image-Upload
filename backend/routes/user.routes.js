import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsersForSidebar } from "../controllers/user.controller.js";
const Router = express.Router();

Router.get("/api/users",protectRoute,getUsersForSidebar);

export default Router;