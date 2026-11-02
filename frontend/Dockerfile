FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install && npm install ejs express
COPY . .   
CMD [ "npm", "start"]