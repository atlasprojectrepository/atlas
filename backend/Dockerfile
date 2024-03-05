FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# Start the server using the production build
CMD [ "npm", "run", "start:dev" ]
