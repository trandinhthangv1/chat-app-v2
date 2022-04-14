class ErrorResponse {
  constructor(res, statusCode = 500, message) {
    this.handleResponse(res, statusCode, message);
  }

  handleResponse(res, statusCode, message) {
    res.status(statusCode).json({ message });
  }
}

export { ErrorResponse };
