FROM node:11.13.0-alpine
# RUN mkdir -p /usr/src/nuxt-app
RUN mkdir /app
COPY . /app
WORKDIR /app
# WORKDIR /usr/src/nuxt-app
RUN apk update && apk upgrade
RUN apk add git
# COPY . /usr/src/nuxt-app/
RUN npm install
RUN ls -la
EXPOSE 3001
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3001
CMD [ "npm", "run", "dev" ]