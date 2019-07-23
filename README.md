## Run locally

### Run with docker
In the working directory
build: `docker build -t react-express-app .`
run: `docker run --rm -it -v ${PWD}:/app -p 3000:3000 react-express-app bash`