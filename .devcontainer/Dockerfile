FROM node:20

WORKDIR /workspace

RUN apt-get update -qq && apt-get install --no-install-recommends -y curl pkg-config openssh-client
    
COPY package.json yarn.lock ./

RUN yarn install

COPY . .
