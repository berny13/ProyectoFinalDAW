# COVID-STATUS


</br>
Covid-Status es una web de noticias de la situación actual en las CCAA de España, requisitos de entrada y restricciones
</br>
</br>
</br>

![App](./imagenes/completo.jpg)
</br>
</br>

## Tabla de contenidos

1. [Tecnologias Utilizadas](#techs)
2. [Estructura](#filesStr)
3. [Prerequisitos](#pre)
4. [Instalacion](#installing)
5. [Arrancar el proyecto](#start)
6. [Sobre la  App](#app)

    6.1. [Modelo de datos](#models)

    6.2. [Api Routes](#apiroutes)

    6.3. [Screenshots](#screens)
7. [Contribuciones](#contributing)
8. [BUGs o Comentarios](#bugs)
9. [Version](#version)
10. [Creador](#autors)


<a name="techs"></a>

## Tecnologias

Covid-Status utiliza las siguientes tecnologias

- [React](https://reactjs.org) ,  [React Router](https://reacttraining.com/react-router/), [React-bootstrap](https://react-bootstrap.github.io/) para Front

- [Socket.io](https://socket.io/), [Express](http://expressjs.com/) y [Node](https://nodejs.org/en/) para back

- [Form.io](https://www.form.io/) for the database

  

  - Dependencies

  | **Backend**                                          | Frontend                                             |
  | ---------------------------------------------------- | ---------------------------------------------------- |
  | ![dependenciesServer](./imagenes/dependencias.jpg) | ![dependenciesClient](./imagenes.dependenciasback.jpg) |



<a name="filesStr"></a>

## Estructura

```bash
mycovid19
  ├── node_modules/
  └── public
      ├── build/
      ├── chats.js
	├── covid19.png
	├── Covid1.jpeg
	├── favicon.ico
	├── index.html
	├── logo192.png
	├── logo512.png
	├── main.css
	├── manifest.json
	├── robots.txt
  └── src
      ├── node_modules/
      ├── package.json
      ├── package-lock.json
      ├── public/
      └── src
          ├── components
            ├── Cards/
            ├── Chat/
            ├── ComunidadesAutonomas/
            └── datosAPI/
            ├── Footer/
            ├── Login/
            ├── Register/
          ├── App.css
          ├── App.js
	├── App.test.js
	├── index.css
	├── index.js
	├── logo.svg
	├── reportWebVitals.js
	├── setupTests.js
  ├── .gitignore
  ├── index.js
  ├── package.json
  ├── package-lock.json
  ├── README.md
```




<a name="pre"></a>

## Prerequisitos

- [Form.io](https://www.form.io/)
- [Node](https://nodejs.org/en/download/)
- [npm](https://nodejs.org/en/download/package-manager/)


<a name="installing"></a>

## Instalacion

1. Para clonar el repositorio se puede dirigir a 
```bash
git clone https://github.com/berny13/ProyectoFinalDAW.git
```

2. Para e **Back-end**,instalar las dependencias desde la terminal.
```bash
npm install
```

3. Para el **Front-end**,instalar las dependencias desde la terminal.
```bash
cd client/
npm install
```


<a name="start"></a>

## Arrancar el proyecto

Para arrancar el front del proyecto basta con escribir el siguiente comando en su consola

```
npm start
```

<a name="app"></a>

## Sobre la Aplicacion


<a name="models"></a>

### Modelo de datos

![App](./imagenes/diagrama.png)




<a name="apiroutes"></a>

### Api Routes
```javascript
// Api Covis-Status Routes
```

```javascript
// Api Users Routes
```

```javascript
```

<a name="screens"></a>

### Screenshots

**Pagina principal**
![App](./imagenes/completo.jpg)
</br>
</br>
</br>

## Contribuciones al proyecto

Se aceptan en el enlace anterior


<a name="bugs"></a>

## BUGs o comentarios

[Crear Issues](https://github.com/berny13/ProyectoFinalDAW/issues) (preferiblemente)

or Email Me: Berny.jimenez.web@adaits.es 

<a name="version"></a>

## Version

1.0.0

<a name="autors"></a>

## Authors

- **Berny Jimenez** - _Development_ - [Berny](https://github.com/berny13)
