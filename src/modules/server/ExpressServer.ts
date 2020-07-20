import { ServerInterface } from './ServerInterface';
import { injectable, multiInject } from 'inversify';
import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';

@injectable()
export class ExpressServer implements ServerInterface {
  private express: express.Express;
  private httpServer: http.Server;
  private middlewares: express.RequestHandler[] = [
    bodyParser.json(),
  ]

  constructor() {
    this.express = express();
    this.express.use(this.middlewares);
  }

  async listen(port: number): Promise<void> {
    return new Promise((resolve, reject) => {
      this.httpServer = this.express.listen(port, (err, server) => {
        if (err) {
          return reject(err);
        }
        resolve(server);
      });
    });
  }
}
