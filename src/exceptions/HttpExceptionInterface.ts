import { StatusCode } from '../utils/StatusCode';

export interface HttpExceptionInterface extends Error {
  statusCode: StatusCode;
}
