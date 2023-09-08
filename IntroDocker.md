## Intro a Docker

sudo usermod -aG docker $USER (Agregar a usaurio a grupo Docker)
### Material de Referencia:
https://docs.docker.com/get-started/

https://labs.play-with-docker.com/

### Imágenes Docker

Docker Registry (Almacenaje de imágenes docker):
https://hub.docker.com/ (es el registry oficial de Docker)

```
docker images #imágenes existentes en el sistema
```


### Docker Container
```
docker run hello-world 
 
docker run -d nginx 

docker ps  #listado de contenedores en ejecución
docker ps -a #listado de contenedores en ejecución y detenidos
```

### Nginx
```
docker run --name minginx -p 80:80 -d nginx 

docker stop minginx
docker rm minginx
```

### Mysql
```
docker run --name un-mysql -e MYSQL_ROOT_PASSWORD=nico1234 -p 33333:3306 -d mysql
```

[docker-compose.yml](/EjemploMysql/docker-compose.yml) 

```
command: --default-authentication-plugin=mysql_native_password #NO RECOMENDADO PARA ENTORNOS PRODUCTIVOS
```


```
docker-compose up -d
```

### Dockerfile
[IR](/EjemploExpress) 


### Ejemplo Express + Mysql
[IR](/EjemploExpressMysql) 


### Upload a Docker Registry
```
docker login
docker build . -t usuario/imagenejemplo:0.0.1
docker push usuario/imagenejemplo:0.0.1
```