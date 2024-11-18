.PHONY: build
build:
	docker build --tag client-frontend-plani-lotes .

# Have to authenticate to dockerhub and create repo first:
# https://docs.docker.com/engine/reference/commandline/login/
.PHONY: push-node-api-dockerhub
push-dockerhub:
	docker tag client-frontend-plani-lotes undercode/client-frontend-plani-lotes # defaults to latest
	docker push undercode/client-frontend-plani-lotes

# Have to authenticate to ghcr.io first
# https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry#authenticating-to-the-container-registry
.PHONY: push-github-packages
push-github-packages:
	docker tag client-frontend-plani-lotes ghcr.io/undercode/client-frontend-plani-lotes # defaults to latest
	docker push ghcr.io/undercode/client-frontend-plani-lotes
