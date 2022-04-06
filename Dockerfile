FROM node:12.0

LABEL version="1.0"
LABEL description="CSxLink application"
LABEL maintainer="Matt Femia mf@mattfemia.com"

# Create the application directory
RUN mkdir /app

# Use app directory
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

ARG PORT=9000

# Install the node_modules
RUN npm i

# Copy modules and all files
COPY . .

# Initialize the webpack build
RUN ["npm", "run", "build"]

EXPOSE 9000

COPY . /app

# Run the start command to launch the client and server (Check package.json)
CMD ["npm", "start"]