FROM node:lts-hydrogen as development

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm i -g pnpm

RUN pnpm i

COPY . .

RUN pnpm run build

EXPOSE 3001


