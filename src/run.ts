import './config/envConfig';
import 'reflect-metadata';
import container from './di/container';
import { ExpressServer } from './modules/server/ExpressServer';
import { serverModule } from './modules/server/module';

const port = process.env.PORT || 3000;

const server = container.get<ExpressServer>(serverModule.Server);

server.listen(port as number);
