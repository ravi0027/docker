FROM node:16.0.0-alpine 
WORKDIR /app
COPY . .
RUN npm install -g npm@8.9.0
RUN npm run build
CMD ["npm","start","dockercmd"]
EXPOSE 80
