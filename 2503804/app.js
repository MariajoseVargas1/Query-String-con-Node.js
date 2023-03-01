/*const http = require("http");
//createServer para crear servidores, funcion que tiene como parametros request(envia), (responde)response
//http modulo preconstruido
http.createServer(function(req, res) { 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('hello node.js 2503804');
}).listen (8080);*/


const datetime = require("./date.js");
const http = require ("http");

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`Hello (ej), la hora actual es:${datetime.myDateTime()}`);
}).listen (8080);

console.log(datetime.myDateTime());


