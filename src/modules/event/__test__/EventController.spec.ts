import { EventServiceInterface } from '../EventServiceInterface';
import { EventController } from '../EventController';
import { Response, Request } from 'express';
import { createResponse } from '../../../utils/createResponse';

class EventServiceMock implements EventServiceInterface {
  createEvent(): Promise<void> {
    return Promise.resolve();
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
};

describe('EventController', () => {
  describe('submitEvent method', () => {

    it('should send response status 200 if nothing throws error on the way', async () => {
      const controller = new EventController(new EventServiceMock());
      await controller.submitEvent(reqMock, resMock);

      expect(
        resMock.send,
      ).toHaveBeenCalledWith(
        createResponse(200),
      );
      expect(
        resMock.send,
      ).toHaveBeenCalledTimes(1);
    });

    it('should call handleError if eventService throws', async () => {
      const controller = new EventController(new EventServiceRejectMock());
      await controller.submitEvent(reqMock, resMock);

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
