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
        }
    });

    // Load plugins
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);
}