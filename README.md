loco
====

Current release: 0.1.0-dev


Description
-----------

Loco is a simple JavaScript module for loading configuration depending
on an option flag. The most common use case is loading different
configurations in different environments.


Installation
------------

Installing via Yarn:

    yarn add loco

Installing via npm:

    npm install loco


Documentation
-------------

The configuration file uses JSON format.

Create a configuration file (for example `conf.json`):

    {
        "development": {
            "debug": true,
            "comments": "all"
        },
        "production": {
            "debug": false,
            "comments": "some"
        }
    }

Load in your script:

    const loco = require('loco');
    const config = loco.load('conf.json');

    if (config.debug) {
        console.log('Loco module successfully loaded');
    }

Run in CLI:

    node --env=development

**load(file, optname = 'env')**:

_file_

Path to the configuration file.

 - Type: `string`

_optname_

 - Type: `string`
 - Default: 'env'


Contributing
------------

Open an issue or send a pull request on Github
(http://github.com/loonies/loco).


Authors
-------

Maintainer:

 - Miodrag Tokić


Copyright
---------

Copyright (C) 2019 Miodrag Tokić.

Released under the MIT License. See the LICENSE file for details.
