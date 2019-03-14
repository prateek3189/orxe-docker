FROM node:11-alpine
MAINTAINER  Saurabh
# Create app directory
WORKDIR /app
COPY . .
RUN npm install -g @angular/cli
RUN npm install
RUN npm rebuild
RUN npm install -g @compodoc/compodoc
RUN npm install nodemon
 # Install svn
RUN apk update
RUN apk upgrade
RUN apk add bash
RUN apk add subversion
RUN apk add dos2unix
RUN dos2unix run.sh
# # install subversion client
RUN npm rebuild node-sass

EXPOSE 4200
CMD sh run.sh