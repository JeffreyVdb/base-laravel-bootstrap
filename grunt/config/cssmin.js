'use strict';

module.exports = {
    frontend: {
        files: [{
            '<%= dirs.dest %>/css/<%= pkg.name %>.min.css': [
                // Minify normal stylesheets
                '<%= dirs.assets.frontend %>/<%= dirs.styles.base %>/*.css',

                // Minify stylesheets compiled by compass
                '<%= dirs.build %>/compass/*.css'
            ]
        }]
    }
}