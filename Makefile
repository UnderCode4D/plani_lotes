COMPOSE_FILE=docker-compose.yml
DEV_COMPOSE_FILE=docker-compose-dev.yml
DEBUG_COMPOSE_FILE=docker-compose-debug.yml
TEST_COMPOSE_FILE=docker-compose-test.yml

.PHONY: run-api-node
run-api-node:
	@echo Starting node api
	cd backend && \
		npm run dev

.PHONY: run-client-react
run-client-react:
	@echo Starting react client
	cd frontend && \
		npm run dev

### DOCKER COMPOSE COMMANDS

.PHONY: compose-up-build
compose-up-build:
	docker compose -f $(COMPOSE_FILE) up --build -d

.PHONY: compose-down
compose-down:
	docker compose -f $(COMPOSE_FILE) down

### DOCKER COMPOSE DEV COMMANDS

.PHONY: compose-dev-build 
compose-dev-build:
	docker compose -f $(DEV_COMPOSE_FILE) build

.PHONY: compose-dev-up
compose-dev-up:
	docker compose -f $(DEV_COMPOSE_FILE) up

.PHONY: compose-dev-up-build
compose-dev-up-build:
	docker compose -f $(DEV_COMPOSE_FILE) up --build

.PHONY: compose-dev-up-debug-build
compose-dev-up-debug-build:
	docker compose -f $(DEV_COMPOSE_FILE) -f $(DEBUG_COMPOSE_FILE) up --build

.PHONY: compose-dev-down
compose-dev-down:
	docker compose -f $(DEV_COMPOSE_FILE) down

### DOCKER COMPOSE TEST COMMANDS

.PHONY: run-tests
run-tests:
	docker compose -f $(DEV_COMPOSE_FILE) -f $(TEST_COMPOSE_FILE) run --build api-node
