#!/bin/bash

echo "Criando imagens Docker..."
docker build -t dlricarte/projeto-backend:1.0 backend/.
docker build -t dlricarte/projeto-database:1.0 database/.
docker build -t dlricarte/projeto-frontend:1.0 frontend/.

echo "Enviando imagens para o Docker Hub..."
docker push dlricarte/projeto-backend:1.0
docker push dlricarte/projeto-database:1.0
docker push dlricarte/projeto-frontend:1.0

echo "Aplicando configurações no Kubernetes..."
kubectl apply -f services.yml
kubectl apply -f deployments.yml

echo "Ambiente implantado com sucesso!"
