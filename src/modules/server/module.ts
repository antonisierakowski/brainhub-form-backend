import { ServerInterface } from './ServerInterface';
import { ExpressServer } from './ExpressServer';
import { Container } from 'inversify';

export const serverModule = {
  Server: Symbol('Server'),
};

export const serverModuleLoader = (container: Container): void => {
  container.bind<ServerInterface>(serverModule.Server).to(ExpressServer);
};

