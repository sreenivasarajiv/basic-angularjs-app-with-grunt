module.exports = function (grunt) {

    var jsConcatOrder = [
        'angular-app/src/js/common/app.js',
        'angular-app/src/js/common/routing.js',
        'angular-app/src/js/common/main.js',
        'angular-app/src/js/controllers/home.js',
        'angular-app/src/js/controllers/about.js',
        'angular-app/src/js/controllers/contact.js'
    ];

    var cssOrder = [
        'angular-app/src/styles/main.css'
    ];

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            folders: ['dist'],
            js: ['dist/index.js']
        },
        jshint: {
            files: ['Gruntfile.js', 'angular-app/src/js/common/**/*.js', 'angular-app/src/js/controllers/**/*.js']
        },
        concat: {
            files: {
                src: jsConcatOrder,
                dest: 'dist/index.js'
            }
        },
        uglify: {
            options: {
                banner: '/* <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd hh:mm:ss") %> */\n',
                report: 'min',
                mangle: false
            },
            dist: {
                files: {
                    'dist/index.min.js': ['<%= concat.files.dest %>']
                }
            }
        },
        copy: {
            main: {
                files: [
                    { expand: true, flatten: true, src: ['predefined/**'], dest: 'dist/', filter: 'isFile' },
                    { expand: true, flatten: true, src: ['angular-app/assets/images/**'], dest: 'dist/assets/images', filter: 'isFile' }
                ]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [
                    {
                        expand: true,
                        src: ['angular-app/src/views/**/*.html'],
                        dest: 'dist/src/views/',
                        flatten: true
                    },
                ],
            }
        },
        cssmin: {
            target: {
                files: [
                    // {
                    //     expand: true,
                    //     src: ['angular-app/src/styles/**/*.css'],
                    //     dest: 'dist/src/styles/',
                    //     flatten: true,
                    //     ext : '.css'
                    // },
                    {
                        'dist/src/styles/index.css': cssOrder
                    }
                ],
            }
        }
    });

    // plugins
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // tasks
    grunt.registerTask('default', ['clean:folders', 'jshint', 'concat', 'uglify', 'clean:js', 'htmlmin', 'cssmin', 'copy']);

};