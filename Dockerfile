FROM node:16.13

# Metadata
LABEL version="0.0.1"
LABEL description="CSxLink application"
LABEL maintainer="Matt Femia mf@mattfemia.com"

# Commands
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
RUN npm run build-prod
EXPOSE 3000
CMD ["npm", "run", "docker"]