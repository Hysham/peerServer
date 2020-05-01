const PORT = process.env.PORT || 9000;
var PeerServer = require('peer').PeerServer;

var server = PeerServer({
    port: PORT,
    path: '/peerjs',
    ssl: {
        key: fs.readFileSync('./../certificates/key.pem', 'utf8'),
        cert: fs.readFileSync('./../certificates/cert.pem', 'utf8')
    }
});