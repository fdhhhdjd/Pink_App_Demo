FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN apk add --no-cache curl \
    && npm install --no-optional \
    && npm cache clean --force

COPY . . 

# Command run applycation
CMD ["npm","run", "dev"]
