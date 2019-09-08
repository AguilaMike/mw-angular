FROM node:12.10-alpine

ARG app
ARG env

ENV APP=''

WORKDIR /dock

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY . ./
RUN ./tools/build-app.sh "$app" "$env"

EXPOSE 5200
CMD export PORT=5200 && node dist/$APP/server.js
