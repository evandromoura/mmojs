/*
 * MMO-JS Server - 
 * */

var http = require('http');
var Player = require("./player").Player;

var io = require('socket.io').listen(app);

var players = [];




