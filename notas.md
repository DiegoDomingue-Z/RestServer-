# Sequelize 

Sequelize en lugar de conexiones clásicas con Node.js y MySQL2 tiene varias ventajas. Aquí te explico por qué Sequelize y los modelos son út

bject-Relational Mapping (ORM) es una técnica que permite interactuar con una base de datos relacional usando objetos en un lenguaje de programación, en lugar de escribir consultas SQL directamente. Esto significa que puedes representar las tablas de la base de datos como clases y las filas como objetos, facilitando el manejo de datos y mejorando la legibilidad del código.

* ORM (Object-Relational Mapping):

Abstracción: Sequelize actúa como un ORM, lo que significa que te permite interactuar con la base de datos usando objetos de JavaScript en lugar de escribir directamente las consultas SQL. Esto hace que tu código sea más limpio y fácil de leer.
Menos código SQL: Puedes realizar operaciones de base de datos comunes (crear, leer, actualizar y eliminar) sin escribir SQL directamente. Esto puede reducir errores y mejorar la mantenibilidad.

* Manejo de Relaciones:

Sequelize facilita la definición y manejo de relaciones entre tablas (uno a uno, uno a muchos, muchos a muchos). Esto es más complejo de hacer con SQL puro y hace que tu código sea más estructurado

* Consultas Más Simples:

Puedes utilizar métodos de Sequelize como findAll, findOne, create, etc., que son más intuitivos y fáciles de usar que las consultas SQL.

# Metodos 
En Sequelize, existen varios métodos para realizar consultas a la base de datos, y cada uno tiene un propósito específico. A continuación, te explico algunos de los métodos más comunes que puedes usar en tus endpoints:

* findAll()

Descripción: Recupera todos los registros de una tabla.
Uso: Útil cuando deseas obtener todas las filas de una tabla.

* findOne()

Descripción: Recupera un solo registro que coincida con los criterios especificados.
Uso: Útil para obtener un único registro (por ejemplo, cuando buscas un usuario por ID).

* findByPk()

Descripción: Recupera un registro por su clave primaria (Primary Key).
Uso: Útil cuando conoces el ID de un registro y deseas recuperarlo.

* create()

Descripción: Crea un nuevo registro en la tabla.
Uso: Útil para insertar datos en la base de datos.

* update()

Descripción: Actualiza uno o más registros que coincidan con los criterios especificados.
Uso: Útil para modificar datos existentes en la base de datos.

* destroy()

Descripción: Elimina uno o más registros que coincidan con los criterios especificados.
Uso: Útil para eliminar datos de la base de datos.

* count()

Descripción: Cuenta el número de registros en la tabla.
Uso: Útil para obtener el total de filas en la tabla, posiblemente con condiciones.