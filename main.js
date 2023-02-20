const express = require('express');
const router = express.Router();
const app = express();
const path = require('path')

app.listen (4000, () => {
console.log("Aplicacion corriendo en el puerto 4000")
})

app.get('/public/74.mp4', (request, response) => {
    response.sendfile(path.join(__dirname, '/public/74.mp4'))
})

app.get('/public/img/logo.png', (request, response) => {
    response.sendfile(path.join(__dirname, '/public/img/logo.png'))
})

app.get('/public/home.html', (request, response) => {
    response.sendfile(path.join(__dirname, '/public/home.html'))
})

app.get('/public/style.css', (request, response) => {
    response.sendfile(path.join(__dirname, '/public/style.css'))
})

app.get('/register/register.html', (request, response) => {
    response.sendfile(path.join(__dirname, '/register/register.html'))
})

app.get('/register/stylee.css', (request, response) => {
    response.sendfile(path.join(__dirname, '/register/stylee.css'))
})

app.get('/register/74.mp4', (request, response) => {
    response.sendfile(path.join(__dirname, '/register/74.mp4'))
})

app.get('/login/login.html', (request, response) => {
    response.sendfile(path.join(__dirname, '/login/login.html'))
})

app.get('/login/style.css', (request, response) => {
    response.sendfile(path.join(__dirname, '/login/style.css'))
})

app.get('/login/74.mp4', (request, response) => {
    response.sendfile(path.join(__dirname, '/login/74.mp4'))
})

app.get('/public/gorrito.png', (request, response) => {
    response.sendfile(path.join(__dirname, '/public/gorrito.png'))
})

