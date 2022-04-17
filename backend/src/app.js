import express from 'express';
import cors from 'cors';
import AuthRoute from './routes/v1/AuthRoute.js';
import AuthController from './controllers/AuthController.js';
import AuthService from './services/AuthService.js';
import UserService from './services/UserService.js';
import UserController from './controllers/UserController.js';
import UserRoute from './routes/v1/UserRoute.js';
import ChatService from './services/ChatService.js';
import ChatController from './controllers/ChatController.js';
import ChatRoute from './routes/v1/ChatRoute.js';
import AuthMiddleware from './middlewares/AuthMiddleware.js';
import MessageService from './services/MessageService.js';
import MessageController from './controllers/MessageController.js';
import MessageRoute from './routes/v1/MessageRoute.js';

class App {
  constructor() {
    this.app = express();
    this.routerV1 = express.Router();
    this.authMiddleware = new AuthMiddleware();
    this.configAuthRoute();
    this.configUserRoute();
    this.configChatRoute();
    this.configMessageRoute();
    this.config();
  }

  configAuthRoute() {
    const authService = new AuthService();
    const authController = new AuthController(authService);
    const authRoute = new AuthRoute(this.routerV1, authController);
    this.routerV1.use('/auth', authRoute.router);
  }

  configUserRoute() {
    const userService = new UserService();
    const userController = new UserController(userService);
    const userRoute = new UserRoute(
      this.routerV1,
      this.authMiddleware,
      userController
    );
    this.routerV1.use('/user', userRoute.router);
  }

  configChatRoute() {
    const chatService = new ChatService();
    const chatController = new ChatController(chatService);
    const chatRoute = new ChatRoute(
      this.routerV1,
      this.authMiddleware,
      chatController
    );
    this.routerV1.use('/chat', chatRoute.router);
  }

  configMessageRoute() {
    const messageService = new MessageService();
    const messageController = new MessageController(messageService);
    const messageRoute = new MessageRoute(
      this.routerV1,
      this.authMiddleware,
      messageController
    );
    this.routerV1.use('/message', messageRoute.router);
  }

  config() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use('/api/v1', this.routerV1);
  }
}

export default new App().app;
