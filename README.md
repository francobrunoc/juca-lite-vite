# vitesse-aws-serverless-web-app
# Basic Tools
```
sudo npm i -g @aws-amplify/cli@latest
```
```
sudo npm i -g pnpm
```
```
sudo npm i -g serverless
```

## Genesis Process
```bash
# Created on Nuxt 2
$ cd ~
$ npx degit antfu/vitesse-lite web
$ cd web
$ pnpm i
# Deploy frontend (web)
$ amplify init
$ amplify add auth
$ amplify push
$ amplify add hosting
$ pnpm i
$ amplify publish
# For Amplify UI (See troubleshooting section for Vite)
https://ui.docs.amplify.aws/?platform=vue
# Deploy Backend (api)
$ mkdir api
$ cd api
$ npm i -g serverless
$ sls
$ sls deploy
```

## Web Build Setup

```bash
# install dependencies
$ pnpm install

# serve with hot reload at localhost:3000
$ pnpm run dev

# build for production and launch server
$ pnpm run build
$ pnpm run preview
```
# See scripts on package.json
