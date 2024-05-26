import { NextFunction, Request, Response } from 'express';
var createError = require('http-errors');

const notFound = (req: Request, res: Response, next: NextFunction) => {
  return res.status(createError.NOT_FOUND).json({
    success: false,
    message: 'API Not Found !!',
    error: '',
  });
};

export default notFound;
