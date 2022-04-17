class MessageRoute {
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
      .route('/send')
      .post(verifyTokenBind, this.controller.send.bind(this.controller));
    this.router
      .route('/:chatId')
      .get(
        verifyTokenBind,
        this.controller.getAllByChatId.bind(this.controller)
      );
  }
}

export default MessageRoute;
