'use strict';

module.exports = {
    options: {
        sourceMap: true,
        sourceMapIncludeSources: true,
        preserveComments: 'some'
    },

    vendorjs: {
        options: {
            sourceMap: false
        },
        files: [{
            '<%= dirs.dest %>/js/modernizr.min.js': [
                '<%= dirs.bower %>/modernizr/modernizr.js'
            ]
        }]
    }
}