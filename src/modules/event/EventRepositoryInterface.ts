import { EventJson } from './types';

export interface EventRepositoryInterface {
  insertEventEntity(eventJson: EventJson): Promise<void>
}
