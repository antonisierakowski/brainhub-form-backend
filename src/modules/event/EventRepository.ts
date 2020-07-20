import { EventRepositoryInterface } from './EventRepositoryInterface';
import { injectable } from 'inversify';
import { AbstractPostgresProvider } from '../db/AbstractDbProvider';
import { EventJson } from './types';

@injectable()
export class EventRepository
  extends AbstractPostgresProvider
  implements EventRepositoryInterface {

  async insertEventEntity(eventJson: EventJson): Promise<void> {
    const query = await this.connection.getConnection();

    await query
      .select('table');
  }

}
