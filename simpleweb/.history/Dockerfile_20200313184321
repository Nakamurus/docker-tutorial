# Specify a base image
# Use node as base image
# because normal alpine doesn't preinstall npm
# Specify :alpine not to install too much programms
FROM node:alpine

WORKDIR /usr/app

# Isolate package.json from updating other files
COPY ./package.json ./
RUN npm install
COPY ./ ./

# Default command
CMD ["npm", "start"]