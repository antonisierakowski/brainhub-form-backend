import './config/envConfig';
import 'reflect-metadata';
import container from './config/container';
import { InversifyExpressServer } from 'inversify-express-utils';
import { exitHandler } from './utils/exitHandler';
import { applyMiddleware } from './applyMiddleware';

const port = process.env.REST_API_PORT || 8000;

(async () => {
  const server = new InversifyExpressServer(container);
  server.setConfig(applyMiddleware);

  const app = server.build();
  await app.listen(port);
  console.log(`Server started listening on port ${port}...`)

  process.on('SIGINT', exitHandler);

})();
