FROM node:18.14.0
COPY . /app
WORKDIR /app
COPY package.json ./
COPY src ./src
RUN npm install
ENV PORT=3000
EXPOSE 3000
CMD [ "npm", "run", "dev"]