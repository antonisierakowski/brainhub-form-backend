import { Container } from 'inversify';
import { rootModule } from '../rootModule';
import { EventController } from './EventController';
import { EventServiceInterface } from './EventServiceInterface';
import { EventRepositoryInterface } from './EventRepositoryInterface';
import { EventService } from './EventService';
import { EventRepository } from './EventRepository';
import { eventModule } from './serviceIdentifiers';

export const eventModuleLoader = (container: Container): void => {
  container.bind(rootModule.Controller).to(EventController);
  container.bind<EventServiceInterface>(eventModule.EventService).to(EventService);
  container.bind<EventRepositoryInterface>(eventModule.EventRepository).to(EventRepository);
};
