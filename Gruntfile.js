module.exports = function (grunt) {
    'use strict';

    // Force use of Unix newlines
    grunt.util.linefeed = '\n';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        dirs: {
            assets: {
                base: 'app/assets',
                frontend: '<%= dirs.assets.base %>/frontend',
                backend: '<%= dirs.assets.base %>/admin'
            },
            bower: 'app/assets/bower',
            dest: 'public',
            views: 'app/views',
            build: 'build',
            styles: {
                base: 'stylesheets',
                compass: '<%= dirs.styles.base %>/compass'
            }
        },

        // Task configuration
        clean: require('./grunt/config/clean'),

        // Minify js files
        uglify: require('./grunt/config/uglify'),

        // Concat js and css files
        concat: require('./grunt/config/concat'),

        // Copy certain resources like images/fonts
        copy: require('./grunt/config/copy'),

        // Compile compass stylesheets
        compass: require('./grunt/config/compass'),

        // Minimize and combine css files
        cssmin: require('./grunt/config/cssmin'),

        // Watch files for changes
        watch: require('./grunt/config/watch')
    });

    // Load plugins
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    // Register tasks
    grunt.registerTask('all', ['clean', 'copy', 'compass', 'cssmin', 'uglify', 'concat'])
}