import { Container } from 'inversify';
import { ModuleLoader } from '../../config/container';
import { ValidationServiceFactoryInterface } from './ValidationServiceFactoryInterface';
import { validationModule } from './serviceIdentifiers';
import { ValidationServiceFactory } from './ValidationServiceFactory';

export const validationModuleLoader: ModuleLoader = (container: Container): void => {
  container
    .bind<ValidationServiceFactoryInterface>(validationModule.ValidationServiceFactory)
    .to(ValidationServiceFactory);
};
