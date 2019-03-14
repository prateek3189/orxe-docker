FROM node:11-alpine

RUN mkdir /usr/src/app
# Create app directory
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install -g @angular/cli
RUN npm install
RUN npm install -g @compodoc/compodoc
RUN npm install nodemon
RUN npm run build
RUN ng test
RUN nodemon scripts/TestServer.js
EXPOSE 4200
CMD ["npm", "start"]