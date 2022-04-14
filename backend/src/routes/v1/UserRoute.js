class UserRoute {
  constructor(router, authMiddleware, controller) {
    this.router = router;
    this.controller = controller;
    this.authMiddleware = authMiddleware;
    this.config();
  }

  config() {
    const verifyTokenBind = this.authMiddleware.verifyToken.bind(
      this.authMiddleware
    );
    this.router
      .route('/all')
      .get(verifyTokenBind, this.controller.getAllUser.bind(this.controller));
  }
}

export default UserRoute;
