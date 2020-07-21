import { ValidationServiceFactory } from '../ValidationServiceFactory';
import { ValidationService } from '../ValidationService';

import joi from 'joi';

export const validationSchema = joi.object({
  testProp1: joi
    .string()
    .min(3)
    .max(30)
    .required(),
  testProp2: joi
    .number()
    .min(10)
    .max(30)
    .required(),
});


describe('ValidationServiceFactory', () => {
  describe('create method', () => {
    it('should return new ValidationService with specified schema', () => {
      const factory = new ValidationServiceFactory();

      expect(
        factory.create(validationSchema),
      ).toEqual(
        new ValidationService(validationSchema),
      );
    });
  });
});
