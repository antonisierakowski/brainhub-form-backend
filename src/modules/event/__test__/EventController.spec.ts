import { EventServiceInterface } from '../EventServiceInterface';
import { EventController } from '../EventController';
import { Response, Request } from 'express';
import { createResponse } from '../../../utils/createResponse';
import { ValidationException } from '../../../exceptions/ValidationException';

class EventServiceMock implements EventServiceInterface {
  createEvent(): Promise<void> {
    return Promise.resolve();
  }
}

class EventServiceRejectValidationMock implements EventServiceInterface {
  createEvent(): Promise<void> {
    return Promise.reject(new ValidationException('test'));
  }
}

class EventServiceRejectMock implements EventServiceInterface {
  createEvent(): Promise<void> {
    return Promise.reject(new Error());
  }
}

// @ts-ignore
const reqMock: Request = {
  body: {
    test: 'test',
  },
};

// @ts-ignore
const resMock: Response = {
  send: jest.fn(),
  status: jest.fn(),
}
;

describe('EventController', () => {
  describe('submitEvent method', () => {

    it('should send response status 200 if nothing throws error on the way', async () => {
      const controller = new EventController(new EventServiceMock());
      await controller.submitEvent(reqMock, resMock);

      expect(
        resMock.status,
      ).toHaveBeenCalledWith(
        200,
      );
      expect(
        resMock.send,
      ).toHaveBeenCalledWith(
        createResponse(200),
      );
      expect(
        resMock.send,
      ).toHaveBeenCalledTimes(1);
    });

    it('should call send response status 422 if validation error is thrown', async () => {
      const controller = new EventController(new EventServiceRejectValidationMock());
      await controller.submitEvent(reqMock, resMock);

      expect(
        resMock.status,
      ).toHaveBeenCalledWith(
        422,
      );
      expect(
        resMock.send,
      ).toHaveBeenCalledWith(
        createResponse(422, 'test'),
      );
      expect(
        resMock.send,
      ).toHaveBeenCalledTimes(1);
    });

    it('should call send response status 500 if unexpected error is thrown', async () => {
      const controller = new EventController(new EventServiceRejectMock());
      await controller.submitEvent(reqMock, resMock);

      expect(
        resMock.status,
      ).toHaveBeenCalledWith(
        500,
      );
      expect(
        resMock.send,
      ).toHaveBeenCalledWith(
        createResponse(500, 'Internal Error'),
      );
      expect(
        resMock.send,
      ).toHaveBeenCalledTimes(1);
    });
  });
});
