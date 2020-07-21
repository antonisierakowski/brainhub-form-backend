import { ValidationService } from '../ValidationService';
import { validationSchema } from './ValidationServiceFactory.spec';

const testData = {
  testProp1: 'test',
  testProp2: 20,
};

const validationSchemaMock = {
  ...validationSchema,
  validate: jest.fn(),
};

describe('ValidationService', () => {
  describe('validate method', () => {
    it('should run its validationSchema\'s validate method on passed object', () => {
      const service = new ValidationService(validationSchemaMock);
      service.validate(testData);

      expect(
        validationSchemaMock.validate,
      ).toHaveBeenCalledTimes(1);

      expect(
        validationSchemaMock.validate,
      ).toHaveBeenCalledWith(testData);

    });
  });
});
