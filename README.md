# Bienvenidos a Toroto App

Este proyecto se encuentra disponible en el siguiente repositorio: https://github.com/melscastillo/torotofront

## Liga de Notion

https://www.notion.so/FRONT-END-DESAF-O-TOROTO-d45a5a0af3e74aeda113d5eb823e5cf0

### ¿Cómo correr el proyecto?

`npm run start`

Abre [http://localhost:3000](http://localhost:3000) para verlo en el navegador.

### ¿De qué va el proyecto?

La aplicación tiene el objetivo de facilitar al usuario la visualización y conocimieto de los proyectos que cuentan con bonos de carbono disponibles para adquisión y que, si así lo desean, puedan adquirir los que necesiten para compensar su huella de carbono.

Una de las cosas en las que, poniendome en la situación del usuario, decidí agregar, fue una landing page y una página informativa en donde se explicara de manera breve la necesidad de compensar la huella de carbono y como podría hacerse esta compensación. Me tomé la libertad de integrar elementos del PDF del desafío para complementar esta sección.

### Components

Los componentes creados fueron tres: header, footer y ProjectCards. Estas últimas aparecen en la landing page con información breve acerca de los proyectos y un botón para que el usuario pueda ir si desea más información.

### Pages

Las pages quedaron determinadas de acuerdo al flujo que el usuario puede seguir al usar la aplicación. Tenía considerado aumentar el flujo de la compra de bonos, así como una certificación expedida al usuario (esto lo vi en uno de los sitios web de referencia y me pareció interesante) y, que ya hecha la compra, la persona (física o moral) pase a formar parte de la lista de compradores de carbono, en donde puede comprobarse la posesión de los bonos.

### Estilos en SASS

Los estilos quedaron divididos de acuerdo a los components y a las pages. Cada uno cuenta con los querys necesarios para hacer el responsive design.
