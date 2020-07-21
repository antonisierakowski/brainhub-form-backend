import { ValidationServiceInterface } from './ValidationServiceInterface';
import joi from 'joi';

export class ValidationService<TData> implements ValidationServiceInterface<TData> {

  constructor(
    private validationSchema: joi.Schema,
  ) { }

  validate(data: TData): joi.ValidationResult<TData> {
    return this.validationSchema.validate(data);
  }
}
