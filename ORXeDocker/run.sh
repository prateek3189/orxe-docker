#!/bin/bash
npm run build
npm run add-dependency
ng test --browsers ChromeHeadlessCI --code-coverage=true --watch=true &
npm rebuild
nodemon scripts/TestServer.js & 
npm run compodoc &
ng serve --host 0.0.0.0 --port 4200
