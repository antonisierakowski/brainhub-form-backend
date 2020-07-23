import { controller, httpPost, interfaces } from 'inversify-express-utils';
import { inject } from 'inversify';
import { EventServiceInterface } from './EventServiceInterface';
import { Request, Response } from 'express';
import { eventModule } from './serviceIdentifiers';
import { StatusCode } from '../../utils/StatusCode';
import { handleError } from '../../utils/handleError';
import { createResponse } from '../../utils/createResponse';

@controller('/event')
export class EventController implements interfaces.Controller  {

  constructor(
    @inject(eventModule.EventService)
      private eventService: EventServiceInterface,
  ) { }

  @httpPost('')
  async submitEvent(req: Request, res: Response): Promise<void> {
    try {
      await this.eventService.createEvent(req.body);
      res.status(StatusCode.OK);
      res.send(createResponse(StatusCode.OK));
    } catch(error) {
      console.log(error);
      handleError(res, error);
    }
  }

}
