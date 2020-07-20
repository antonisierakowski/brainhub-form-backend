import { EventJson } from './types';

export interface EventServiceInterface {
  createEvent(eventJson: EventJson): Promise<void>
}
