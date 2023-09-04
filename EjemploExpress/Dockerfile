FROM node:alpine 

RUN mkdir /var/app 
WORKDIR  /var/app 
COPY index.js . 
COPY package.json . 

RUN npm install 

EXPOSE 3000 

CMD [ "node", "index.js" ] 
