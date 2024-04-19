import express from "express";
import {
  activateUser,
  deleteUser,
  getAllUsers,
  getuserInfo,
  loginUser,
  logoutUser,
  registerationUser,
  socialAuth,
  updateAccessToken,
  updatePassword,
  updateProfilePicture,
  updateUserInfo,
  updateUserRole,
} from "../controllers/user.controller";
import { authorizeRoles, isAuthenticated } from "../middleware/auth"; 

const userRouter = express.Router();

userRouter.post("/registeration", registerationUser);

userRouter.post("/activate-users", activateUser);
userRouter.post("/login", loginUser);
userRouter.post("/social-auth", socialAuth);
userRouter.get("/logout",isAuthenticated,  logoutUser); 
userRouter.get("/refresh", updateAccessToken);
userRouter.get("/me",updateAccessToken, isAuthenticated, getuserInfo);
userRouter.put("/update-user-info",updateAccessToken, isAuthenticated, updateUserInfo);
userRouter.put("/update-user-password",updateAccessToken, isAuthenticated, updatePassword);
userRouter.put("/update-user-avatar",updateAccessToken, isAuthenticated, updateProfilePicture);
userRouter.get(
  "/get-Users",
  updateAccessToken,
  isAuthenticated,
  authorizeRoles("admin"),
  getAllUsers
);

userRouter.put(
  "/update-User-role",
  updateAccessToken,
  isAuthenticated,
  authorizeRoles("admin"),
  updateUserRole
);

userRouter.delete(
  "/delete-user/:id",
  updateAccessToken,
  isAuthenticated,
  authorizeRoles("admin"),
  deleteUser
);
export default userRouter;
