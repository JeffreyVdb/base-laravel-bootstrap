'use strict';

module.exports = {
    compass: {
        files: [
            '<%= dirs.assets.frontend %>/<%= dirs.styles.compass %>/{,*/}*.scss',
            '<%= dirs.assets.backend %>/<%= dirs.styles.compass %>/{,*/}*.scss',
        ],
        tasks: ['compass', 'cssmin']
    }
}