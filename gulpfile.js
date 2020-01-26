require('dotenv').config();

const requireDir = require('require-dir');

requireDir('./tasks', { recurse: true });
