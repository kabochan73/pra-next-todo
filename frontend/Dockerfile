FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install && \
    ln -sf /app/node_modules/lightningcss-linux-x64-gnu/lightningcss.linux-x64-gnu.node \
           /app/node_modules/lightningcss/lightningcss.linux-x64-gnu.node

COPY . .

CMD npm run dev