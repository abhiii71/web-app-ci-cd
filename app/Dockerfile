FROM node:14

WORKDIR /app 

COPY package.json . 

RUN npm install 

COPY  ./src ./src 

EXPOSE 3000

CMD ["node", "src/index.js"]
