import { EventRepositoryInterface } from './EventRepositoryInterface';
import { injectable } from 'inversify';
import { AbstractPostgresProvider } from '../db/AbstractDbProvider';
import { EventJson } from './types';
import { Table } from '../db/types';

@injectable()
export class EventRepository
  extends AbstractPostgresProvider
  implements EventRepositoryInterface {

  async insertEventEntity(eventJson: EventJson): Promise<void> {
    const query = await this.connection.getConnection();

    await query
      .table(Table.Event)
      .insert({
        first_name: eventJson.firstName,
        last_name: eventJson.lastName,
        email: eventJson.email,
        date: eventJson.date,
      });
  }
}
