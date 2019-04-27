FROM docker.io/node:11-stretch

LABEL Maintainer="Tavisca Solutions - Saurabh Manchanda"
WORKDIR /app
COPY . .
ENV DEBIAN_FRONTEND=noninteractive

# Install npms
RUN npm install -g @angular/cli && \ 
    npm install && \ 
    npm install -g @compodoc/compodoc && \
    npm install -g nodemon
# Install Google Chromium Browser
RUN apt-get update \
    && apt-get install -y --no-install-recommends chromium
RUN apt-get install -y dos2unix

# install subversion client & dos2unix
RUN apt-get install -y subversion && \ 
    apt-get install -y dos2unix

RUN dos2unix run.sh

RUN npm rebuild node-sass


#Test Server
EXPOSE 9876 
#Main Application
EXPOSE 4200
#Documentation Server
EXPOSE 8080
#Test Handling Server
EXPOSE 3000

ENV CHROME_BIN=chromium

CMD sh run.sh