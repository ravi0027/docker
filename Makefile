build:
	build-version
	
build-version:
	docker build -t apptest:v1.0.0	.
#tag-latest:
#	docker tag ${IMAGE}:${VERSION} ${IMAGE}:latest
start:
	docker run -it --rm ${IMAGE}:${VERSION}/bin/bash
	
login:
	echo ${DOCKER_PASSWORD} | docker login -u ${DOCKER_USERNAME} --password-stdin
#   docker login -u ${DOCKER_NAME} -p ${DOCKER_PASSWORD}

push:
	login build-version tag-latest	
	docker push ${IMAGE}:${VERSION}; docker push ${IMAGE}:latest
