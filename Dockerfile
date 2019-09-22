FROM node:latest as builder

ARG app
ARG env

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .
RUN ./tools/build-app.sh "$app" "$env"



FROM node:alpine

ENV APP=''

WORKDIR /app

COPY --from=builder /app/dist/$APP ./dist/$APP

EXPOSE 5200
CMD export PORT=5200 && node ./dist/$APP/server.js
