.PHONY: build
build:
	docker build --tag api-backend-plani-lotes .

# Have to authenticate to dockerhub and create repo first:
# https://docs.docker.com/engine/reference/commandline/login/
.PHONY: push-node-api-dockerhub
push-dockerhub:
	docker tag api-backend-plani-lotes undercode/api-backend-plani-lotes # defaults to latest
	docker push undercode/api-backend-plani-lotes

# Have to authenticate to ghcr.io first
# https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry#authenticating-to-the-container-registry
.PHONY: push-github-packages
push-github-packages:
	docker tag api-backend-plani-lotes ghcr.io/undercode/api-backend-plani-lotes # defaults to latest
	docker push ghcr.io/undercode/api-backend-plani-lotes
