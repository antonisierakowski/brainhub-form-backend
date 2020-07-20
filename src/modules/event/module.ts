import { Container } from 'inversify';
import { rootModule } from '../../di/rootModule';
import { EventController } from './EventController';

export const eventModule = {
};

export const eventModuleLoader = (container: Container): void => {
  container.bind(rootModule.Controller).to(EventController);
};
