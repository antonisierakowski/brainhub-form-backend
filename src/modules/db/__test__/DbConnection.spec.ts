import { DbConnection } from '../DbConnection';
import Knex from 'knex';

// @ts-ignore
const connectionMock: Knex = jest.fn();

describe('dbConnection', () => {
  describe('getConnection method', () => {
    it('should return connection passed to class constructor', () => {
      const service = new DbConnection(connectionMock);

      expect(
        service.getConnection(),
      ).toEqual(connectionMock);
    });
  });
});
