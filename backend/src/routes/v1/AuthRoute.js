class AuthRoute {
  constructor(router, controller) {
    this.router = router;
    this.controller = controller;
    this.config();
  }

  config() {
    this.router
      .route('/register')
      .post(this.controller.registerUser.bind(this.controller));
    this.router
      .route('/login')
      .post(this.controller.login.bind(this.controller));
  }
}

export default AuthRoute;
