/**
 * @author Evandro Moura
 */

/*****************SERVER CONFIG***************************/
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
server.listen(3000);
app.get('/', function (req, res) {
//  res.sendfile(__dirname + '/index.html',{count_player:'banana'});
    res.redirect('index.html');
});


/*****************PLAYER DEFINITION***************************/
var Player = require("./player").Player;
var players = new Array();


/*****************SOCKET HANDLES***************************/
io.on('connection', onPlayerConnection);



/*****************SOCKET DEFINITION***************************/
function onPlayerConnection(player) {
	console.log("Player connected");
	player.broadcast.emit("player-connect", "entrou");
	player.on("disconnect", onPlayerDisconnect);
	player.on("player-move", onMovePlayer);
	players.push(player);
}

function onPlayerDisconnect(player) {
	players.splice(getIndexPlayer(player), 1);
}

function onMovePlayer(data) {
	
};

function getPlayer(id) {
	for ( var i in players) {
		if (players[i].id == id) {
			return player[i];
		}
	}
	return false;
}

function getIndexPlayer(player) {
	index = 0;
	for ( var i in players) {
		if (players[i] == player) {
			return i;
		}
	}
}

/***********************************************************/

