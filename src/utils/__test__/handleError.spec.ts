import { handleError } from '../handleError';
import { Response } from 'express';
import { HttpExceptionInterface } from '../../exceptions/HttpExceptionInterface';
import { ValidationException } from '../../exceptions/ValidationException';

describe('handleError function', () => {

  // @ts-ignore
  const resMock: Response = {
    send: jest.fn(),
  };

  it('should send a response with status code included from the exception', () => {
    handleError(resMock, new ValidationException('test'));

    expect(resMock.send).toHaveBeenCalledTimes(1);
    expect(resMock.send).toHaveBeenCalledWith({
      status: 422,
      response: {
        message: 'test',
      },
    });
  });

  it('should send 500 internal error if the exception doesnt contain status code field', () => {
    handleError(resMock, new Error() as HttpExceptionInterface);

    expect(resMock.send).toHaveBeenCalledTimes(1);
    expect(resMock.send).toHaveBeenCalledWith({
      status: 500,
      response: {
        message: 'Internal Error',
      },
    });
  });

})
