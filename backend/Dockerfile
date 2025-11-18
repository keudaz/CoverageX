FROM node:18-alpine

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm ci --production=false

COPY . .

ENV NODE_ENV=production
RUN npm run build || true

EXPOSE 4000

CMD ["node", "src/index.js"]
