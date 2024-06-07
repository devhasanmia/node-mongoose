import { ErrorRequestHandler } from 'express';
import httpStatus from 'http-status';
import { ZodError, ZodIssue } from 'zod';
import { TErrorSource } from '../interface/error';
import config from '../config';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let status = httpStatus.INTERNAL_SERVER_ERROR;
  let message = err.message || 'Internal Server Error';
  let errorSources: TErrorSource = [
    {
      path: '',
      message: 'Something went wrong',
    },
  ];
  const handleZodError = (err: ZodError) => {
    const errorSources: TErrorSource = err.issues.map((issue: ZodIssue) => {
      return {
        path: issue?.path[issue.path.length - 1],
        message: issue?.message,
      };
    });
    return {
      status,
      message: 'Validation Error',
      errorSources,
    };
  };

  if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err);
    status = simplifiedError.status;
    message = simplifiedError.message;
    errorSources = simplifiedError.errorSources;
  }

  if (err.status) {
    status = err.status;
  }

  res.status(status).json({
    success: false,
    message,
    errorSources,
    stack: config.NODE_ENV === 'development'? err.stack : undefined,
  });
};

export default globalErrorHandler;

/**
 * Pattern
 * Success
 * message
 * errorSources: [
 * path: "",
 * message: "",
 * stack: "",
 * ]
 */