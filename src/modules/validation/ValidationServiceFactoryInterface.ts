import joi from 'joi';
import { ValidationServiceInterface } from './ValidationServiceInterface';

export interface ValidationServiceFactoryInterface {
  create<TData = any>(validationSchema: joi.Schema): ValidationServiceInterface<TData>;
}
