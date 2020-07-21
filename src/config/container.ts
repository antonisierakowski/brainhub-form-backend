import 'reflect-metadata';
import { BindingScopeEnum, Container } from 'inversify';
import { eventModuleLoader } from '../modules/event/module';
import { dbModuleLoader } from '../modules/db/module';
import { validationModuleLoader } from '../modules/validation/module';

export type ModuleLoader = (container: Container) => void;

const container = new Container({
  defaultScope: BindingScopeEnum.Singleton,
});

const modules: ModuleLoader[] = [
  eventModuleLoader,
  dbModuleLoader,
  validationModuleLoader,
];

modules.forEach(module => module(container));

export default container;
