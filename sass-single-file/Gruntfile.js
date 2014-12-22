module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        options: {
          'sourcemap': 'none'
        },
        files: {
          'tests/main.css': 'tests/main.scss'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['sass']);
};
