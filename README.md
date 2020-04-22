# CrudAngular

Sistema de Asignaciones

Este sistema permitira tanto registrar, modificar y eliminar los diversos usuarios, hardware y software; permitiendo asignar los hardware y software que estan registrados a los usuarios así poder observar los listados de usuarios y listado de hardware y software por usuario.

API ASP.NET (c#)

https://localhost:44393/api/users

{
"id": 1,
"userName": "Jesus25",
"name": "Jesus",
"lastName": "Elias",
"age": 27,
"lastSessionDateTime": "2019-08-05T15:02:29.393"
},


https://localhost:44393/api/hardware

{
"id": 1,
"hardwareName": "Mouse LG"
},

https://localhost:44393/api/software

{
"id": 1,
"softwareName": "linux"
},

https://localhost:44393/api/assignments/users/{id}

https://localhost:44393/api/assignments/users/1

{
"hardwareID": 2,
"hardwareName": "keyboard",
"softwareID": 5,
"softwareName": "mac"
}
