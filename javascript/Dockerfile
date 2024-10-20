FROM node:20-bookworm-slim

WORKDIR /srv/javascript

COPY package.json package-lock.json ./
RUN npm install

COPY . .

ENTRYPOINT ["tsx", "./script.ts"]
