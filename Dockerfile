FROM node:8.11.2 as node
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install --only=production
COPY . .
RUN npm run build -- --prod --environment prod

FROM nginx:1.15.0
COPY --from=node /usr/src/app/dist/ /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf