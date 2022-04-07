FROM node:12.0

# Meta data
LABEL version="0.0.1"
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

# Open port 9000
EXPOSE 9000

# Copy to app dir
COPY . /app

# Run the start command to launch the client and server (Check package.json)
CMD ["npm", "start"]