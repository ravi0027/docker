FROM node:16.3.0-alpine as space
WORKDIR /app
COPY . .
COPY package.json /app
RUN npm install
RUN npm run build

FROM nginx:1.19.0
WORKDIR /app
COPY --from=space /app/build /usr/share/nginx/html
EXPOSE 80