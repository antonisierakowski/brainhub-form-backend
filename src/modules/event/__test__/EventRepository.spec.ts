import knex from 'knex';
import mockDb  from 'mock-knex';
import { EventRepository } from '../EventRepository';
import { DbConnection } from '../../db/DbConnection';
import { validEventFixture } from '../fixtures';

const db = knex({
  client: 'pg',
});
mockDb.mock(db);
const tracker = mockDb.getTracker();
tracker.install();

afterAll(() => {
  mockDb.unmock(db);
  tracker.uninstall();
});

describe('EventRepository', () => {
  describe('insertEventEntity method', () => {
    it('should call knex and insert Event entity to the Event table', async (done) => {
      const repository = new EventRepository(
        new DbConnection(db),
      );

      tracker.once('query', query => {
        expect(query.method).toEqual('insert');
        expect(query.bindings).toEqual(
          Object.values(validEventFixture),
        );

        done();
      });

      await repository.insertEventEntity(validEventFixture);
    });
  });
});
