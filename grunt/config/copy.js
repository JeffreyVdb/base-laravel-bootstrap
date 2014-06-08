'use strict';

module.exports = {
    dist: {
        files: [{
            expand: true,
            cwd: '<%= dirs.bower %>/bootstrap/dist/fonts/',
            src: ['*'],
            dest: '<%= dirs.dest %>/fonts'
        }]
    }
}