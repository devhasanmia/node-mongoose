import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let status = httpStatus.INTERNAL_SERVER_ERROR;
  let message = err.message || 'Internal Server Error';
  if (err.status) {
    status = err.status;
  }
  res.status(status).json({
    success: false,
    message,
    error: err,
  });
};

export default globalErrorHandler;
