class BaseError extends Error {
  constructor(message, details) {
    super();
    this.message = message;
    this.details = details;
  }
}

class HTTPError extends BaseError {
  constructor(message, details, statusCode) {
    super(message, details);
    this.statusCode = statusCode;
  }
}

class BadRequestError extends HTTPError {
  constructor(details) {
    super('Bad Request', details, 400);
  }
}

class UnauthorizedError extends HTTPError {
  constructor(details) {
    super('Unauthorized', details, 401);
  }
}

class ForbiddenError extends HTTPError {
  constructor(details) {
    super('Forbidden', details, 403);
  }
}

class NotFoundError extends HTTPError {
  constructor(details) {
    super('Not Found', details, 404);
  }
}

class ConflictError extends HTTPError {
  constructor(details) {
    super('Conflict', details, 409);
  }
}

class GoneError extends HTTPError {
  constructor(details) {
    super('Gone', details, 410);
  }
}

class InternalServerError extends HTTPError {
  constructor(details) {
    super('Internal Server Error', details, 500);
  }
}

module.exports = {
  BaseError,
  HTTPError,
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
  ConflictError,
  GoneError,
  InternalServerError
};
