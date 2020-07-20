import { Container } from 'inversify';
import { eventModuleLoader } from '../modules/event/module';

const container = new Container({
  defaultScope: 'Singleton',
});

const modules = [
  eventModuleLoader,
];

modules.forEach(module => module(container));

export default container;
