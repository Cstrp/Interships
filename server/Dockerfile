FROM node:lts-hydrogen as development

WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml ./

COPY prisma ./prisma

RUN npm install -g pnpm

RUN pnpm install

COPY . .

RUN pnpm prisma generate

RUN pnpm build

EXPOSE 3000

