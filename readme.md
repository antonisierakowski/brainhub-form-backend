This repo hosts backend for brainhub-form recruitment task. In order to run, you need to have `node`, `yarn` and `postgresql` installed on your machine.  
In project root run
```$xslt
cp .env.dist .env
```
then edit your `.env` file so the server can access local postgres installation.  
Make sure postgres is running and run `yarn init-db` to set up the database.  
Next: install dependencies, compile TypeScript and finally run the server:
```
yarn
yarn build
yarn start
```
Tests: `yarn test`  
Linter: `yarn check-code` / `yarn fix-code`  
Development mode: `yarn dev`
