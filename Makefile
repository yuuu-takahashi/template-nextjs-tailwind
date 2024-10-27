DC = docker-compose

build:
	$(DC) build

up:
	$(DC) up

yarn:
	$(DC) run app yarn

test:
	$(DC) run app yarn test

yarn-build:
	$(DC) run app yarn build

build-local:
	$(DC) run app yarn build:local

build-dev:
	$(DC) run app yarn build:dev

build-prod:
	$(DC) run app yarn build:prod

serve-local:
	$(DC) run app yarn serve:local

serve-dev:
	$(DC) run app yarn serve:dev

serve-prod:
	$(DC) run app yarn serve:prod

test-update:
	$(DC) run app yarn test:update

test-watch:
	$(DC) run app yarn test:watch

analyze:
	$(DC) run app yarn analyze