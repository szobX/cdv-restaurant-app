const helmet =  require("helmet");
const express = require("express");
const bodyParser = require("body-parser").json()

const routes = require('./api/')

const Logger = require('./logger')
class Server {
	constructor(port) {
        this.port = port
		this.app = express()
        this.app.use(helmet());
        this.app.use(bodyParser);
        this.app.use('/api',routes())
    }

     start(port, name, keyPath, certPath) {


        this.app.listen(this.port, () => {
            Logger.info(`
              ################################################
              🛡️  Server listening on port: ${this.port} 🛡️
              ################################################
            `);
          }).on('error', err => {
            Logger.error(err);
            process.exit(1);
          });
    }
}

   

module.exports = Server