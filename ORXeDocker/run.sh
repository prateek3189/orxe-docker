#!/bin/bash
npm run build &
sleep 10
ng test &
sleep 10
nodemon scripts/TestServer.js & 
sleep 10
ng serve --host 0.0.0.0 --port 4200