module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      options: {
      sourceMap: false
    },
      dist: {
        files: {
          'emojis.css': 'src/emojis.scss'
        }
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: '',
          src: ['*.css', '!*.min.css'],
          dest: '',
          ext: '.min.css'
        }]
      }
    },
    usebanner: {

      taskName: {
        options: {
          position: 'top',
          banner: '/*\n * <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n * Build <%= pkg.version %>\n */\n',
          linebreak: false
        },
        files: {
          src: [ '*.css' ]
        }
      }

    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-banner');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'cssmin', 'usebanner']);

};