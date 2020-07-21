import { StatusCode } from './StatusCode';

interface MessageResponse {
  message: string,
}

interface HttpResponse<TResponse = any> {
  status: StatusCode,
  response?: TResponse | MessageResponse,
}

export const createResponse = <TResponse = any>(statusCode: StatusCode, responseBody?: any): HttpResponse<TResponse> => {
  const baseResponse = {
    status: statusCode,
  };

  if (!responseBody) {
    return baseResponse;
  }

  const response = typeof responseBody === 'string'
    ? { message: responseBody }
    : responseBody;

  return {
    ...baseResponse,
    response,
  };
};
