module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  
  grunt.initConfig({
    sass: {
      options: {
          sourceMap: true
      },
      dist: {
          files: {
              'css/main.css': 'sass/main.scss'
          }
      }
    },
    watch: {
      sass: {
        files: ['sass/**/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false,
        },
      },
    },
    
    connect: {
    server: {
      options: {
        port: 8080,
      }
    }
  },



  });


  grunt.registerTask('default', ['connect', 'watch']);

};
