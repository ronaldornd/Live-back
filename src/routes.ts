import { Router } from "express";
import { AuthenticateUserController } from "./controller/AuthenticateUserController";
import { AuthenticateUserControllerApp } from "./controller/AuthenticateUserControllerApp";
import { CreateMessageController } from "./controller/CreateMessageController";
import { GetLast3MessagesController } from "./controller/GetLast3MessagesController";
import { ProfileUserController } from "./controller/ProfileUserController";
import { ensureAutenticated } from "./middleware/ensureAuthenticated";

const router = Router();

router.post("/authenticate/web", new AuthenticateUserController().handle)
router.post("/authenticate/app", new AuthenticateUserControllerApp().handle)

router.post("/messages", ensureAutenticated , new CreateMessageController().handle)

router.get("/messages/Last3", new GetLast3MessagesController().handle)

router.get("/profile", ensureAutenticated, new ProfileUserController().handle)

export {router};