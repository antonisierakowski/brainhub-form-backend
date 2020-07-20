import { controller, httpPost, interfaces } from 'inversify-express-utils';
import { inject } from 'inversify';
import { EventServiceInterface } from './EventServiceInterface';
import { Request } from 'express';
import { eventModule } from './serviceIdentifiers';

@controller('/')
export class EventController implements interfaces.Controller  {

  constructor(
    @inject(eventModule.EventService)
      private eventService: EventServiceInterface,
  ) { }

  @httpPost('')
  async submitEvent(req: Request) {
    await this.eventService.createEvent(req.body);
  }

}
