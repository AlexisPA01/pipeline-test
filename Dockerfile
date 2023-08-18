FROM node:18.14.0
COPY . /app
WORKDIR /app
COPY package.json package-lock.json* ./
COPY .env ./
COPY src ./src
RUN npm install
EXPOSE 3000
CMD [ "npm", "run", "dev"]