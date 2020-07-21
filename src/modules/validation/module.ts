import { Container } from 'inversify';
import { ModuleLoader } from '../../config/container';
import { ValidationServiceInterface } from './ValidationServiceInterface';
import { ValidationServiceFactoryInterface } from './ValidationServiceFactoryInterface';
import { validationModule } from './serviceIdentifiers';
import { ValidationService } from './ValidationService';
import { ValidationServiceFactory } from './ValidationServiceFactory';

export const validationModuleLoader: ModuleLoader = (container: Container): void => {
  container
    .bind<ValidationServiceInterface>(validationModule.ValidationService)
    .to(ValidationService);
  container
    .bind<ValidationServiceFactoryInterface>(validationModule.ValidationServiceFactory)
    .to(ValidationServiceFactory);
};
