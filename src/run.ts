import './config/envConfig';
import 'reflect-metadata';
import container from './config/container';
import { InversifyExpressServer } from 'inversify-express-utils';
import bodyParser from 'body-parser';
import { Application } from 'express';
import { exitHandler } from './utils/exitHandler';

const port = process.env.REST_API_PORT || 3000;

(async () => {
  const server = new InversifyExpressServer(container);
  server.setConfig((app: Application) => {
    app.use(bodyParser.json());
  });

  const app = server.build();
  app.listen(port);

  process.on('SIGINT', exitHandler);

})();
