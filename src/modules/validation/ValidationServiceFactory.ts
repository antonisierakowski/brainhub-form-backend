import { ValidationServiceFactoryInterface } from './ValidationServiceFactoryInterface';
import joi from 'joi';
import { ValidationService } from './ValidationService';
import { ValidationServiceInterface } from './ValidationServiceInterface';
import { injectable } from 'inversify';

@injectable()
export class ValidationServiceFactory implements ValidationServiceFactoryInterface {

  create<TData = any>(validationSchema: joi.Schema): ValidationServiceInterface<TData> {
    return new ValidationService<TData>(validationSchema);
  }

}
