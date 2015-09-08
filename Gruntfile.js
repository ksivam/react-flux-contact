module.exports = function(grunt){

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        copy:{
            main: {
                files: [{
                    expand: true,
                    flatten: true,
                    cwd: 'node_modules',
                    src: ['react/dist/*.js', 'requirejs/require.js'],
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
            },
            commands: {

            }
        },
        browserify: {
                options: {
                    sourceMaps: true,
                    //transform: [require('grunt-react').browserify] // user to transform jsx into js
            },
            app:{
                src: 'app/www/js/main.js',
                dest: 'app/www/bundle.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-react');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-run');

    grunt.registerTask('dev', ['copy', 'browserify', 'run']);
    grunt.registerTask('default', ['dev']);
};