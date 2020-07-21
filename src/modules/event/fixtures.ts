import { EventJson } from './types';

const thirtyOneCharacters = '1234567890123456789012345678901';

const nameValid = 'tester';
const nameTooShort = 'te';
const nameTooLong = thirtyOneCharacters;

const emailValid = 'tester@test.com';
const emailInvalid = 'inv@lid';

const dateInvalid = 'in.va.lid0';
export const dateValidFormats = [
  '1999-01-08',
  'January 8, 1999',
  '1/8/1999',
  '1/18/1999',
  '01/02/03',
  '1999-Jan-08',
  'Jan-08-1999',
  '08-Jan-1999',
  '99-Jan-08',
  '08-Jan-99',
  'Jan-08-99',
  '19990108',
  '990108',
  '1999.008',
];

export const validEventFixture: EventJson = {
  date: dateValidFormats[0],
  email: emailValid,
  firstName: nameValid,
  lastName: nameValid,
};

export const invalidEventFixture: EventJson = {
  date: dateInvalid,
  email: emailInvalid,
  firstName: nameTooLong,
  lastName: nameTooShort,
};

export const missingFirstName: Partial<EventJson> = {
  date: dateValidFormats[0],
  email: emailValid,
  lastName: nameValid,
};

export const missingLastName: Partial<EventJson> = {
  date: dateValidFormats[0],
  email: emailValid,
  firstName: nameValid,
};

export const missingEmail: Partial<EventJson> = {
  date: dateValidFormats[0],
  lastName: nameValid,
  firstName: nameValid,
};

export const missingDate: Partial<EventJson> = {
  email: emailValid,
  firstName: nameValid,
  lastName: nameValid,
};

export const firstNameTooShort: EventJson = {
  ...validEventFixture,
  firstName: nameTooShort,
};

export const firstNameTooLong: EventJson = {
  ...validEventFixture,
  firstName: nameTooLong,
};

export const lastNameTooShort: EventJson = {
  ...validEventFixture,
  lastName: nameTooShort,
};

export const lastNameTooLong: EventJson = {
  ...validEventFixture,
  lastName: nameTooLong,
};

export const allValidExceptEmail: EventJson = {
  ...validEventFixture,
  email: emailInvalid,
};

export const allValidExceptDate: EventJson = {
  ...validEventFixture,
  date: dateInvalid,
};

