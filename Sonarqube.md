```
docker network create sonarnet

docker run -d \
 --name sonar-postgres \
 -p 5432:5432 \
 -e POSTGRES_USER=sonarqube \
 -e POSTGRES_PASSWORD=sonarqube \
 -e PGDATA=/var/lib/postgresql/data/pgdata \
 -v /custom/mount:/var/lib/postgresql/data \
 --net sonarnet \
 postgres:13

docker volume create --name sonarqube_data
docker volume create --name sonarqube_extensions
docker volume create --name sonarqube_logs

docker run -d \
 --name sonarqube \
 -p 9000:9000 \
 -e SONAR_JDBC_URL=jdbc:postgresql://sonar-postgres:5432/sonarqube \
 -e SONAR_JDBC_USERNAME=sonarqube \
 -e SONAR_JDBC_PASSWORD=sonarqube \
 -v sonarqube_data:/opt/sonarqube/data \
 -v sonarqube_extensions:/opt/sonarqube/extensions \
 -v sonarqube_logs:/opt/sonarqube/logs \
 --net sonarnet \
 sonarqube:lts-community

 docker logs sonarqube
```

En el caso de requerir más memoria virtual correr:
```
sysctl -w vm.max_map_count=262144
```