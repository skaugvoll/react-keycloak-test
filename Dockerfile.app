FROM node:16.15.0

ENV TZ="Europe/Oslo"

WORKDIR /app
COPY package.json ./
COPY package-lock.json ./

RUN npm install

ADD . .

CMD ["npm", "run", "start"]
