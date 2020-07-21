This repo hosts backend for brainhub-form recruitment task. In order to run, you need to have `node`, `yarn` and `postgresql` installed on your machine.  
In project root run
```$xslt
cp .env.dist .env
```
and then edit your `.env` file to grant the app access to local postgres installation.  
Make sure postgres is running, then run the following to start the server:
```
yarn
yarn init-db
yarn build
yarn start
```
