FROM node:14 AS builder

RUN mkdir /opt/app && chown node:node /opt/app

WORKDIR /opt/app
USER node
COPY package*.json ./
RUN npm ci && npm cache clean --force

EXPOSE 3001