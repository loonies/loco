'use strict';

const yargs = require('yargs');
const fs = require('fs');

module.exports = {
    load: function (file, optname = 'env') {
        const opt = yargs.argv[optname] || 'default'

        const content = fs.readFileSync(file, 'utf8');
        const config = JSON.parse(content);

        if ( ! config.hasOwnProperty(opt)){
            throw new Error('Configuration option not found: ' + opt);
        }

        return config[opt];
    }
}
