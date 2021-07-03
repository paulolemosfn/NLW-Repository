const express = require('express');
const route= require('./route');
const path = require('path');
require('dotenv').config();

const server = express();

server.set('view engine', 'ejs');

server.use(express.static("public"));

server.set('views', path.join(__dirname,'views'));

server.use(express.urlencoded({extended:true})); /*midware, está implcito entre a rota e pra onde a rota leva. Decodifica o que ta vindo pela rota(através do "urlencoded") e entrega o resultado. */

server.use(route);

server.listen(process.env.PORT, ()=> console.log('Estou rodando!'));