class SuccessResponse {
  constructor(res, statusCode, message, data) {
    this.handleResponse(res, statusCode, message, data);
  }

  handleResponse(res, statusCode, message, data) {
    res.status(statusCode).json({ message, data });
  }
}

export { SuccessResponse };
