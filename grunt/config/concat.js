'use strict';

module.exports = {
    options: {
        process: function (src, filePath) {
            return '/* ####' + filePath + '*/\n' + src;
        }
    },

    // 3rd party Javascript
    vendorjs_mins: {
        files: [{
            '<%= dirs.dest %>/js/vendor.min.js': [
                '<%= dirs.bower %>/jquery/dist/jquery.min.js',
                '<%= dirs.bower %>/bootstrap/dist/js/bootstrap.min.js',
            ]
        }]
    },

    // 3rd party Stylesheets
    vendorcss_mins: {
        files: [{
            '<%= dirs.dest %>/css/vendor.min.css': [
                '<%= dirs.bower %>/bootstrap/dist/css/bootstrap.min.css',
            ]
        }]
    }
}