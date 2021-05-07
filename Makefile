include .env

COMPOSE = docker compose
UP = $(COMPOSE) up
RUN_BACK = $(COMPOSE) run back

up:
	$(UP)
back:
	$(UP) back
front:
	$(UP) front
db:
	$(UP) db

build:
	$(COMPOSE) build

tidy:
	$(RUN_BACK) go mod tidy

lint:
	$(RUN_BACK) golangci-lint run

mysql:
	docker-compose exec db bash -c 'mysql -u $(DB_USERNAME) -p$(DB_PASSWORD) $(DB_DATABASE)'
