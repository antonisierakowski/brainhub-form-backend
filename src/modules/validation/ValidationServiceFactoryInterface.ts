import joi from 'joi';
import { ValidationServiceInterface } from './ValidationServiceInterface';

export interface ValidationServiceFactoryInterface {
  create(validationSchema: joi.Schema): ValidationServiceInterface
}
