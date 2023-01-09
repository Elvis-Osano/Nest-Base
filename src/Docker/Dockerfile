FROM node:alpine 


WORKDIR /usr/src/app

COPY package*.json ./
RUN npm config set registry="http://registry.npmjs.org/"
RUN npm i -g @nestjs/cli
RUN npm install 
COPY . .
RUN npm run build 

CMD ["node", "dist/main"]