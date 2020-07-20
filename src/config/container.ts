import { BindingScopeEnum, Container } from 'inversify';
import { eventModuleLoader } from '../modules/event/module';
import { dbModuleLoader } from '../modules/db/module';

const container = new Container({
  defaultScope: BindingScopeEnum.Singleton,
});

const modules = [
  eventModuleLoader,
  dbModuleLoader,
];

modules.forEach(module => module(container));

export default container;
