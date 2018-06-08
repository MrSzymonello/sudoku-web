#!/bin/bash
DOCKER_TAG=latest
docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD
docker build -t sudoku-web:$DOCKER_TAG .
docker tag sudoku-web:$DOCKER_TAG $DOCKER_USERNAME/sudoku-web:$DOCKER_TAG
docker push $DOCKER_USERNAME/sudoku-web:$DOCKER_TAG