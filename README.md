# Node and Mongo App - Dockerized 🐳 (Practice)

This repo contains instructions to build and create two containers that will comunicate between each other. From [Nicolás Schürmann Tutorial](https://www.youtube.com/watch?v=4Dko5W96WHg)

## First container - MongoDB 📦

⚠️ You must have installed Docker Desktop or Docker in your local machine. 

### Instructions

1. Pull the image `mongo`:
```bash
docker pull mongo
```

2. Create the network `my_network` in order to share the same network between containers:

```bash
docker network create my_network 
```

3. Once the image is downloaded and the network is created, create the container with mongo:
```bash
# Syntax:
# docker create --name <name_of_container> --network <network_name> -p<host_port:container_port> -e MONGO_INITDB_ROOT_USERNAME=<mongo_username> -e MONGO_INITDB_ROOT_PASSWORD=<mongo_password>

docker create --name monguito --network my_network -p27017:27017 -e MONGO_INITDB_ROOT_USERNAME=diego -e MONGO_INITDB_ROOT_PASSWORD=password mongo
```

Refer to [Mongo Docker Image - Environment Variables](https://hub.docker.com/_/mongo) to setup the username and password

4. Start the container 
```bash
docker start monguito
```
5. If everything was configured correctly, run `docker ps` and you will see your mongo db container up and running

## Second container - NodeJS Express App 🎉

### Instructions

1. Git clone the current repository and `cd` in.

2. Create a `.env` file from the `.env.example` file and add the values of the variables that corresponds to the MONGO connection

3. Build the image layers that comes in the Dockerfile with the following command:
```bash
# Syntax
# docker build -t <image_name:tag> <path_to_Dockerfile>

docker build -t chanchito-img:latest .
```

4. Create the container
```bash
docker create --name chanchito --network my_network -p3000:3000 chanchito-img:latest
```

5. Start the container
```bash
docker start chanchito
```

To verify if the two containers are up and running, run:
```bash
docker ps
```

You should see the two containers running and the following URL are accessible from your prefered web browser:

- http://localhost:3000 To list the created records
- http://localhost:3000/crear To create a record to mongo db.

DONE ✅