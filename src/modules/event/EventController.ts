import { controller, httpPost, interfaces } from 'inversify-express-utils';

@controller('/')
export class EventController implements interfaces.Controller  {

  @httpPost('')
  submitEvent() {

  }

}
