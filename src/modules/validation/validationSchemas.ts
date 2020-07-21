import joi from 'joi';

const eventValidationSchema = joi.object({
  firstName: joi
    .string()
    .min(3)
    .max(30)
    .required(),
  lastName: joi
    .string()
    .min(3)
    .max(30)
    .required(),
  email: joi
    .string()
    .email()
    .required(),
  date: joi
    .date()
    .greater(Date.now())
    .required(),
});
