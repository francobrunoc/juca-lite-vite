# JUCA Lite
# vitesse-lite
![This is an image](https://user-images.githubusercontent.com/11247099/111864893-a457fd00-899e-11eb-9f05-f4b88987541d.png)
# + Serverless
![This is an image](https://assets.serverless-extras.com/website/general/social-card-serverless-company.png)
# + Amplify
![This is an image](https://camo.githubusercontent.com/b0221b7ebe904cfd5e7b338a9aa49dd8a001a472f74ca69b14da60dc4d1f6abd/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6177732d6d6f62696c652d6875622d696d616765732f6177732d616d706c6966792d6c6f676f2e706e67)
# + Amplify Cognito UI
![This is an image](https://docs.aws.amazon.com/pt_br/cognito/latest/developerguide/images/scenario-api-gateway.png)
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
## See automatic scripts on root package.json
### Why prerender? https://ssr.vuejs.org/#ssr-vs-prerendering
### https://sharklabs.com.br/vue-js-prerender-melhorando-o-seo-do-seu-spa/
