import container from '../config/container';
import Knex from 'knex';
import { dbModule } from '../modules/db/serviceIdentifiers';

export const exitHandler = async (): Promise<void> => {
  console.log('Received SIGINT, initialising graceful shutdown...');
  const dbConnection = container.get<Knex>(dbModule.ConnectionInstance);
  await dbConnection.destroy();
  process.exit();
};
