# CS x Link

[CS x Link](https://www.csxlink.com/) was created to more easily depict accomplishments and relationships throughout Codesmith residency. The application allows for creating a personal portfolio, searching cohort membership across the organization, and keeping up to date on news surrounding past and present residents.  
  
This project is open-source and welcomes community contributions, particularly from current and past Codesmith residents. If you're interested in contributing, please review the pull request template below. 
  
## Getting Started
  
#### Project Setup
  
- Fork and clone the repository  
- Locally install dependencies: `npm install`  
  
#### Docker Container Setup  
  
- If docker is installed locally, you can build the application in a container environment using either the dockerfile or docker-compose.  
  - Dockerfile:  
    - Build - `docker build . -t csxlink`  
    - Run - `docker run -p 9000:9000 csxlink`  
  - Docker Compose:  
    - Build - `docker-compose build`
    - Run - `docker-compose up` 
  - Either option will run build commands for the client and server via webpack and node.  

#### Database Setup  
  
- The application requires a postgresql database to be added into the application. To create the tables required, run the queries in setup.sql [here](https://github.com/mattfemia/CSxLink/tree/master/sql). Database environment variables should be stored in an .env file. The .env file should be added to the root of the project directory: csxlink/.env
  
## Pull Requests
  
## Issues/Bugs
  