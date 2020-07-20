import { Container } from 'inversify';
import { serverModuleLoader } from '../modules/server/module';

const container = new Container({
  defaultScope: 'Singleton',
});

const modules = [
  serverModuleLoader,
];

modules.forEach(module => module(container));

export default container;
