import joi from 'joi';

export interface ValidationServiceInterface<TData> {
  validate(data: TData): joi.ValidationResult<TData>
}
