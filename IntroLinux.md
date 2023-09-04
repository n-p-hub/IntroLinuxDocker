## Intro a Linux

### Modo usuario
```
user@host:~$
```

### Modo privilegiado/super usuario
```
user@host:~#
```

### Listar subdirectorios:
```
ls
ls -l
ls -a
```

### Crear directorio:
```
mkdir
```

### Cambiar de directorio:
```
cd
```

### Rutas Absolutas:
```
/home/user/carpeta
```

### Rutas Relativas:
```
./carpeta
../user/carpeta
```

### Administración de Archivos:
```
cp
mv
rm
```

### Usuarios y Permisos:
```
chmod
chown
```

| #  | Permiso                 | rwx | Binario |
| -- |:-----------------------:| --- | ------- |
| 7  | read, write and execute | rwx | 111 |
| 6  | read and write          | rw- | 110 |
| 5  | read and execute        | r-x | 101 |
| 4  | read only               | r-- | 100 |
| 3  | write and execute       | -wx | 011 |
| 2  | write only              | -w- | 010 |
| 1  | execute only            | --x | 001 |
| 0  | none                    | --- | 000 |


### Gestión de Procesos:
```
ps
top
kill
```

### Gestión de Servicios:
```
systemctl
```

### Comandos varios:
```
touch
cat	
vi
nano
ip
curl
ssh
scp
```