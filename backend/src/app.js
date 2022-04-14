import express from 'express';
import cors from 'cors';
import AuthRoute from './routes/v1/AuthRoute.js';
import AuthController from './controllers/AuthController.js';
import AuthService from './services/AuthService.js';

class App {
  constructor() {
    this.app = express();
    this.routerV1 = express.Router();
    this.configAuthRoute();
    this.config();
  }

  configAuthRoute() {
    const authService = new AuthService();
    const authController = new AuthController(authService);
    const authRoute = new AuthRoute(this.routerV1, authController);
    this.routerV1.use('/auth', authRoute.router);
  }

  config() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use('/api/v1', this.routerV1);
  }
}

export default new App().app;
