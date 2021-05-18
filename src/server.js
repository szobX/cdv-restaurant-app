import helmet from 'helmet';
import express from 'express';
// const db = require('./db/models');
// import dbSync from './db/config.js';
import bodyParser from 'body-parser';

import Logger from './logger.js';
import initRouter from './api/index.js';
// const Logger = require('./logger');
export default class Server {
    constructor(port) {
        this.port = port;
        this.app = express();
        this.app.use(helmet());
        this.app.use(bodyParser.json());
        initRouter(this.app);

        // dbSync();
        // db.sequelize.sync({ force: true }).then(() => {
        //     console.log('Drop and re-sync db.');
        // });
    }

    start(port, name, keyPath, certPath) {
        this.app
            .listen(this.port, () => {
                Logger.info(`
              ################################################
              🛡️  Server listening on port: ${this.port} 🛡️
              ################################################
            `);
            })
            .on('error', (err) => {
                Logger.error(err);
                process.exit(1);
            });
        this.app._router.stack.forEach(function (r) {
            if (r.route && r.route.path) {
                console.log(r.route.path);
            }
        });
    }
}

// module.exports = Server;
