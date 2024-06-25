# Get file .env
include .env
export $(shell sed 's/=.*//' .env)

# Folder constants
DOCKER_COMPOSE_SYSTEM := docker-compose.yml
DOCKER_COMPOSE_SERVICE := docker-compose-service.yml


# Run auto
test:
	docker ps

################## SERVICE ##################
build-service:
	docker-compose -f $(DOCKER_COMPOSE_SERVICE) up -d --build

restart-service:
	docker-compose -f $(DOCKER_COMPOSE_SERVICE) restart

down-service:
	docker-compose -f $(DOCKER_COMPOSE_SERVICE) down

################## DB, NGINX ##################
build:
	docker-compose -f $(DOCKER_COMPOSE_SYSTEM) up -d --build

down:
	docker-compose -f $(DOCKER_COMPOSE_SYSTEM) down

################## RUN ALL ##################
build-all:
	docker-compose -f $(DOCKER_COMPOSE_SYSTEM) -f $(DOCKER_COMPOSE_SERVICE) up -d --build

down-all:
	docker-compose -f $(DOCKER_COMPOSE_SYSTEM) -f $(DOCKER_COMPOSE_SERVICE) down



