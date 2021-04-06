FROM node

WORKDIR /webapp

COPY package.json /webapp/

RUN npm install
RUN npm install -g serve

COPY . /webapp/

EXPOSE 3000 5000

RUN npm run build

CMD ["serve", "-s", "build"]
