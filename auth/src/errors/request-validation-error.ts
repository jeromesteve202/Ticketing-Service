import { ValidationError, validationResult } from 'express-validator';

export class RequestValidationError extends Error {
  constructor(public errors: ValidationError[]) {
    super();

    // need this only because we are extending built in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }
}

