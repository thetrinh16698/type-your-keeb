const express = require('express');
const connectDB = require('./config/db');
const socketio = require('socket.io');

const app = express();

const expressServer = app.listen(3001);
const io = socketio(expressServer);

connectDB();