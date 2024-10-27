DC = docker-compose

build:
	$(DC) build

up:
	$(DC) up

up-detached:
	$(DC) up -d

down:
	$(DC) down

exec:
	$(DC) exec app /bin/sh

logs:
	$(DC) logs -f

install:
	$(DC) run app yarn install

build-app:
	$(DC) run app yarn build

test:
	$(DC) run app yarn test
