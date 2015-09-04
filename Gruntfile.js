module.exports = function(grunt){

    grunt.initConfig({
        copy:{
            main: {
                files: [{
                    expand: true,
                    flatten: true,
                    cwd: 'node_modules',
                    src: ['react/dist/*.js'],
                    dest: 'app/www/js/extern'
                }]
            }
        },
        run: {
            options: {
                cwd: 'app'
            },
            server: {
                args: ['app.js']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-run');

    grunt.registerTask('dev', ['copy', 'run']);
    grunt.registerTask('default', ['dev']);
};