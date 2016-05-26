# Set the base image to Ubuntu
FROM mhart/alpine-node:base

# File Author / Maintainer
MAINTAINER Brett Jones

ADD . /src
WORKDIR /src

# Expose port
EXPOSE  8080

# Run app using nodemon
CMD ["./node_modules/.bin/nodemon", "index.js"]
