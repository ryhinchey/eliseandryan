module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-exec');

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
  exec: {
    deploy: "aws s3 sync ./dist s3://www.eliseandryan.com --acl public-read   --region us-west-2"
  },
  clean: ["dist"],
  copy: {
    main: {
      files: [
        {expand: true, src: ['img/**/*'], dest: 'dist/'},
        {expand: true, src: ['index.html'], dest: 'dist/', flatten: true},        
        {expand: true, src: ['css/main.css'], dest: 'dist/'},
        {expand: true, src: ['js/main.js'], dest: 'dist/'},      
        {expand: true, src: ['js/jquery-2.1.4.min.js'], dest: 'dist/'},
      ],
    },
  },
  
  });


  grunt.registerTask('default', ['connect', 'watch']);
  grunt.registerTask('deploy', ['clean', 'copy','exec']);
};


