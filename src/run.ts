import './config/envConfig';
import 'reflect-metadata';
import express from 'express';

const port = process.env.PORT || 3000;

(async () => {
  const app = express();
  await app.listen(port);
})();

