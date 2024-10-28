DC = docker-compose

up:
	$(DC) up

exec:
	$(DC) exec -it app sh
