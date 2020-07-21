import { EventServiceInterface } from './EventServiceInterface';
import { inject, injectable } from 'inversify';
import { EventRepositoryInterface } from './EventRepositoryInterface';
import { eventModule } from './serviceIdentifiers';
import { EventJson } from './types';
import { validationModule } from '../validation/serviceIdentifiers';
import { ValidationServiceFactoryInterface } from '../validation/ValidationServiceFactoryInterface';
import { ValidationServiceInterface } from '../validation/ValidationServiceInterface';
import { eventValidationSchema } from './validationSchemas';
import { ValidationException } from '../../exceptions/ValidationException';

@injectable()
export class EventService implements EventServiceInterface {
  private validationService: ValidationServiceInterface<EventJson>

  constructor(
    @inject(eventModule.EventRepository)
      private eventRepository: EventRepositoryInterface,
    @inject(validationModule.ValidationServiceFactory)
      private validationServiceFactory: ValidationServiceFactoryInterface,
  ) {
    this.validationService = this.validationServiceFactory.create<EventJson>(eventValidationSchema);
  }

  async createEvent(eventJson: EventJson): Promise<void> {
    const validationResult = this.validationService.validate(eventJson);

    if (validationResult.error) {
      throw new ValidationException(validationResult.error.message);
    }

    await this.eventRepository.insertEventEntity(eventJson);
  }

}
