# ORXe3.0 Docker

## Dependencies

1. Node (>8.11.4)
2. Npm (>5.6.0)

## Installation

```
$ npm install
```

## Test Server
```
$ ng test
$ nodemon scripts/TestServer.js
```

## Run Documentation Server
### Run compodoc in your project (generated with Angular CLI) and serve it

```
$ compodoc -s //For Serve Only
$ compodoc -p src/tsconfig.app.json -s //For Creating New Document & Serve
```
## Run Angular Server

```
$ ng serve
```
## Steps For Docker
* Open "scripts\dependency.js" Comment Line 30 & Uncomment Line 31 
* Open "src\karma.conf.js" Comment Line 41 & Uncomment Line 22-27,42
* Run "docker build -t orxe3doc-image . --no-cache"
* Run "docker run -it -p 4200:4200 -p 9876:9876 -p 8080:8080 -p 3000:3000 orxe3doc-image"