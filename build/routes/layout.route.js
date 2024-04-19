"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../middleware/auth");
const layout_controller_1 = require("../controllers/layout.controller");
const layoutRouter = express_1.default.Router();
const layout_controller_2 = require("../controllers/layout.controller");
const user_controller_1 = require("../controllers/user.controller");
layoutRouter.post("/create-layout", user_controller_1.updateAccessToken, auth_1.isAuthenticated, (0, auth_1.authorizeRoles)("admin"), layout_controller_1.createLayout);
layoutRouter.put("/edit-layout", user_controller_1.updateAccessToken, auth_1.isAuthenticated, (0, auth_1.authorizeRoles)("admin"), layout_controller_2.editLayout);
layoutRouter.get("/get-layout/:type", layout_controller_2.getLayoutByType);
exports.default = layoutRouter;
