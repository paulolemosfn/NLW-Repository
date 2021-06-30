const express = require('express');
const route= require('./route');
const path = require('path');

const server = express();

server.set('view engine', 'ejs');

server.use(express.static("public"));

server.set('views', path.join(__dirname,'views'));

server.use(express.urlencoded({extend:true})); /*midware, está implcito entre a rota e pra onde a rota leva. Decodifica o que ta vindo pela rota(através do "urlencoded") e entrega o resultado. */

server.use(route);

server.listen(3000, ()=> console.log('Estou rodando!'));