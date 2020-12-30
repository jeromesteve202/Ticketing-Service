export class DatabaseConnectionError extends Error {

  reason = 'Error connecting to databse';

  constructor() {
    super();

    // need this only because we are extending built in class
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }
}