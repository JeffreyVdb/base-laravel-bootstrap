'use strict';

module.exports = {
    frontend: {
        options: {
            sassDir: '<%= dirs.assets.frontend %>/<%= dirs.styles.compass %>',
            cssDir: '<%= dirs.build %>/compass',
            importPath: '<%= dirs.bower %>'
        }
    }       
}