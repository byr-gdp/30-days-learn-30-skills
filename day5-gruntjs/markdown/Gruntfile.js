module.exports = function(grunt) {
    grunt.initConfig({
        markdown: {
            all: {
                files: [
                    {
                        expand: true,
                        src: './docs/src/*.md',
                        dest: './docs/html/',
                        ext: '.html'
                    }
                ]
            }
        }
    })

    grunt.loadNpmTasks('grunt-markdown');

    grunt.registerTask('default', ['markdown']);
}
