FROM node

WORKDIR /discord-bot

COPY package.json /discord-bot

RUN npm install

COPY . .

CMD ["npm", "start"]
