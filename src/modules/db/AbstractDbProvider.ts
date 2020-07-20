import { inject, injectable } from 'inversify';
import { ConnectionInterface } from './ConnectionInterface';
import { dbModule } from './serviceIdentifiers';

@injectable()
export abstract class AbstractPostgresProvider {
  constructor(
    @inject(dbModule.ConnectionInterface) protected connection: ConnectionInterface,
  ) { }
}
