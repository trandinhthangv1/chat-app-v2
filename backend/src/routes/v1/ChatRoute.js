class ChatRoute {
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
      .route('/')
      .post(verifyTokenBind, this.controller.access.bind(this.controller))
      .get(verifyTokenBind, this.controller.fetch.bind(this.controller));
  }
}

export default ChatRoute;
