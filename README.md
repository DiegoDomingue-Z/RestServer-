# Server de noder Reutilizable
*Servidor limpio listo para ser reutilizado

* nota 
para instalar todos los modulos coloca en la consola 
*npm install o npm i

* Debes crear la base de datos con el nombre

restserver


#Servidor creado con:
*   "bcryptjs"
    "colors"
    "cors"
    "dotenv"
    "express"
    "express-validator"
    "mysql2":
    "sequelize"

# para usar este server debes tener instalado xammp 
* crea primero la base de datos llamada restserver
* despues crea las tablas 

# como usar lo edpoids en potsman 
todos los edpoinds se hacen con la misma ruta 
solamente asegurate de seleccionar bien el edpoid 
si es update, delete, asegurate de parar el id en los parametros

* optener usuarios GET
con limite y desde
http://localhost:8080/api/usuarios?desde=2&limite=4

* actulizar un usuario PUT
http://localhost:8080/api/usuarios/16

nota: recuerda colocar lo que vas actualizar destro del body
ejemplo:  {
        "nombre": "Hera",
        "correo": "hera@gmail.com",
        "contrasena": "123456",
        "img": "s",
        "rol": "Admin",
        "estado": "Activo"
}


