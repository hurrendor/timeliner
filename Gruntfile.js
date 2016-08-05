module.exports = function(grunt) {
  //1.Configuration for various packages
  grunt.initConfig({
    pkg : grunt.file.readJSON('package.json'),

    concat : {
      dist : {
        src : [
          'scripts/vendor/jquery-1.11.2.min.js',
          'scripts/main.js',
          'scripts/timeliner.js'
        ],
        dest : 'main.js',
      }
    },

    uglify : {
      build : {
        src : 'main.js',
        dest : 'main.js'
      }
    },

    watch : {
      scripts : {
        files : [
          'scripts/main.js',
          'scripts/timeliner.js'
        ],
        tasks : ['concat', 'uglify'],
        options : {
          spawn: false
        },
      }
    }

  });

  //Where we plan to use the plugin
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  //What happens when grunt goes into the terminal
  grunt.registerTask('default', ['concat', 'uglify', 'watch']);
}
