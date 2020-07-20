import { EventServiceInterface } from './EventServiceInterface';
import { inject, injectable } from 'inversify';
import { EventRepositoryInterface } from './EventRepositoryInterface';
import { eventModule } from './serviceIdentifiers';
import { EventJson } from './types';

@injectable()
export class EventService implements EventServiceInterface {
  constructor(
    @inject(eventModule.EventRepository)
      private eventRepository: EventRepositoryInterface,
  ) { }

  async createEvent(eventJson: EventJson): Promise<void> {
    await this.eventRepository.insertEventEntity(eventJson);
  }

}
