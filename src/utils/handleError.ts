import { Response } from 'express';
import { StatusCode } from './StatusCode';
import { HttpExceptionInterface } from '../exceptions/HttpExceptionInterface';
import { createResponse } from './createResponse';

export const handleError = (res: Response, error: HttpExceptionInterface): void => {
  if (error.statusCode) {
    res.status(error.statusCode);
    res.send(
      createResponse(error.statusCode, error.message),
    );
  } else {
    res.status(StatusCode.INTERNAL_ERROR);
    res.send(
      createResponse(StatusCode.INTERNAL_ERROR, 'Internal Error'),
    );
  }
};
