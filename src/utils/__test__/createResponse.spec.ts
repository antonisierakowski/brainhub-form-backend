import { createResponse } from '../createResponse';

describe('createResponse function', () => {

  it('should return only { status: xxx } if no responseBody is passed', () => {
    const expectedResult = {
      status: 200,
    };

    expect(
      createResponse(200),
    ).toEqual(
      expectedResult,
    );
  });

  it('should return object with message key if body argument is of type string', () => {
    const expectedResult = {
      status: 404,
      response: {
        message: 'test',
      },
    };

    expect(
      createResponse(404, 'test'),
    ).toEqual(
      expectedResult,
    );

  });

  it('should map responseBody under response key if the argument is not a primitive  ', () => {
    const expectedResult = {
      status: 200,
      response: {},
    };

    expect(
      createResponse(200, {}),
    ).toEqual(
      expectedResult,
    );

    const anotherExpectedResult = {
      status: 200,
      response: ['test', 123, { a: 'test' }],
    };

    expect(
      createResponse(200, ['test', 123, { a: 'test' }]),
    ).toEqual(
      anotherExpectedResult,
    );

  });

})
