## Création d'une application web avec Nestjs, Angular et MongoDB

- Back: Nestjs

- Front: Angular

- Database: mongoDB

### Environnement de developpement

#### Vous avez besoin d'installer

Nestjs
```sh
npm i -g @nestjs/cli
```
Angular
```sh
npm i -g @angular/cli
```
MongoDB
```sh
npm i --save @nestjs/mongoose mongoose
```

Docker
[Voir la doc](https://docs.docker.com/install/linux/docker-ce/ubuntu/)

Docker-Compose
[Voir la doc](https://docs.docker.com/compose/install/)
en resume:

sudo curl -L "https://github.com/docker/compose/releases/download/1.23.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

on s'ajoute au groupe docker

sudo usermod -aG docker `whoami`
Et pour appliquer ce changement, on redemarre la machine.
Pour verifier:
docker -v
docker-compose -v

### Préparation du projet
cloner le projet
aller dans le dossier du projet
on y trouve:

un dossier api, qui contient le back, c'est un projet Nestjs
un dossier client qui contient le front, c'est une appli Angular et Material
un fichier docker-compose.yml

### Lancer l'installation des containers
```sh
docker-compose up
```
