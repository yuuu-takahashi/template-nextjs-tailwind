DC = docker-compose

build:
	$(DC) build

up:
	$(DC) up

yarn:
	$(DC) run app yarn

yarn-build:
	$(DC) run app yarn build

yarn-build-prod:
	$(DC) run app yarn build:prod

serve:
	$(DC) run app yarn serve

serve-prod:
	$(DC) run app yarn serve:prod

test:
	$(DC) run app yarn test

test-update:
	$(DC) run app yarn test:update

test-watch:
	$(DC) run app yarn test:watch

analyze:
	$(DC) run app yarn analyze