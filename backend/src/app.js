import express from 'express';
import cors from 'cors';
import AuthRoute from './routes/v1/AuthRoute.js';
import AuthController from './controllers/AuthController.js';
import AuthService from './services/AuthService.js';
import UserService from './services/UserService.js';
import UserController from './controllers/UserController.js';
import UserRoute from './routes/v1/UserRoute.js';
import AuthMiddleware from './middlewares/AuthMiddleware.js';

class App {
  constructor() {
    this.app = express();
    this.routerV1 = express.Router();
    this.authMiddleware = new AuthMiddleware();
    this.configAuthRoute();
    this.configUserRoute();
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

  config() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use('/api/v1', this.routerV1);
  }
}

export default new App().app;