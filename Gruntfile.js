module.exports = function (grunt) {
    'use strict';

    // Force use of Unix newlines
    grunt.util.linefeed = '\n';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        dirs: {
            assets: 'assets',
            bower: 'assets/bower',
            dest: 'public',
            views: 'app/views',
            build: 'build'
        },

        // Task configuration
        clean: {
            dist: ['<%= dirs.build %>', '<%= dirs.dest %>/css', '<%= dirs.dest %>/js']
        },

        // Minify js files
        uglify: {
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
        },

        // Concat js and css files
        concat: {
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
    });

    // Load plugins
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    // Register tasks
    grunt.registerTask('all', ['clean', 'uglify', 'concat'])
}