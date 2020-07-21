import { HttpExceptionInterface } from './HttpExceptionInterface';
import { StatusCode } from '../utils/StatusCode';

export class ValidationException implements HttpExceptionInterface {
  readonly statusCode: StatusCode = StatusCode.UNPROCESSABLE_ENTITY;
  readonly name: string = 'ValidationException'

  constructor(public message: string) { }
}
