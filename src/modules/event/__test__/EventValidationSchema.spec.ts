import * as fixtures from '../fixtures';
import { eventValidationSchema } from '../eventValidationSchema';

describe('EventValidationSchema', () => {
  const validate = eventValidationSchema.validate.bind(eventValidationSchema);

  it('should fail if any of the properties are missing', () => {
    expect(
      validate(fixtures.missingDate).error,
    ).toBeTruthy();
    expect(
      validate(fixtures.missingEmail).error,
    ).toBeTruthy();
    expect(
      validate(fixtures.missingFirstName).error,
    ).toBeTruthy();
    expect(
      validate(fixtures.missingLastName).error,
    ).toBeTruthy();
  });

  it('should fail if firstName or lastName are not strings of 3-30 characters long', () => {
    expect(
      validate(fixtures.firstNameTooLong).error,
    ).toBeTruthy();
    expect(
      validate(fixtures.firstNameTooShort).error,
    ).toBeTruthy();
    expect(
      validate(fixtures.lastNameTooLong).error,
    ).toBeTruthy();
    expect(
      validate(fixtures.lastNameTooShort).error,
    ).toBeTruthy();
  });

  it('should fail if email is not valid', () => {
    expect(
      validate(fixtures.allValidExceptEmail).error,
    ).toBeTruthy();
  });

  it('should fail if date is not in a valid format', () => {
    expect(
      validate(fixtures.allValidExceptDate).error,
    ).toBeTruthy();
  });

  it('should succesfuly validate chosen date formats', () => {
    fixtures.dateValidFormats.forEach(date => {
      // console.log(date);
      const eventJson = {
        ...fixtures.validEventFixture,
        date,
      };
      const validationResult = validate(eventJson);
      expect(
        validationResult.error,
      ).toBeUndefined();
    });
  });

  it('should succeed otherwise', () => {
    const validationResult = validate(fixtures.validEventFixture);

    expect(
      validationResult.error,
    ).toBeUndefined();
  });
});
