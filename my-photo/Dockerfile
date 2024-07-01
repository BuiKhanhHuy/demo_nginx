# Build React app
FROM node:20.15.0-alpine as build-step
WORKDIR /app
ENV PATH ./node_modules/.bin:$PATH
COPY package*.json ./
COPY . .
RUN npm install
RUN npm run build

# Build nginx server
FROM nginx:1.21-alpine
COPY --from=build-step ./app/dist /usr/share/nginx/html
COPY ./nginx/nginx.default.conf /etc/nginx/conf.d/default.conf