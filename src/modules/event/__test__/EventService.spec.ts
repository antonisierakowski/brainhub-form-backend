import { EventService } from '../EventService';
import { ValidationServiceFactory } from '../../validation/ValidationServiceFactory';
import { invalidEventFixture, validEventFixture } from '../fixtures';
import { ValidationException } from '../../../exceptions/ValidationException';
import { eventValidationSchema } from '../eventValidationSchema';

const eventRepositoryInstanceMock = {
  insertEventEntity: jest.fn(),
};

describe('EventService', () => {
  describe('createEvent method', () => {

    const service = new EventService(
      eventRepositoryInstanceMock,
      new ValidationServiceFactory(),
    );

    it('should validate its input and throw validation exception if it fails', async () => {
      const validationMessage = eventValidationSchema.validate(invalidEventFixture).error.message;
      await expect(async () => {
        await service.createEvent(invalidEventFixture);
      }).rejects.toEqual(new ValidationException(validationMessage));
    });

    it('should call EventRepository.insertEventEntity if validation succeeds', async () => {
      await service.createEvent(validEventFixture);

      expect(eventRepositoryInstanceMock.insertEventEntity).toHaveBeenCalledTimes(1);
      expect(eventRepositoryInstanceMock.insertEventEntity).toHaveBeenCalledWith(validEventFixture);
    });
  });
});
