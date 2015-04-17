



module.exports = function(grunt) {

    // Loads all your grunt tasks for you
    //require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['*.{png,jpg,gif,jpeg}'],
                    dest: 'dist/'
                }]
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-imagemin');
    // Default task(s).
    grunt.registerTask('default', ['imagemin']);

};