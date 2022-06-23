data ?= data.env
include $(data)
export $(shell sed 's/=.*//' $(data))

build:
	build-version
	
build-version:
	docker build -t ${IMAGE}:${VERSION}  .

tag-latest:
	docker tag ${IMAGE}:${VERSION} ${IMAGE}:latest

start:
	docker run -it --rm ${IMAGE}:${VERSION}/bin/bash
	
login:
	docker login -u ${DOCKER_NAME} -p ${DOCKER_PASSWORD}

push:
	login build-version tag-latest	
	docker push ${IMAGE}:${VERSION}; docker push ${IMAGE}:latest
