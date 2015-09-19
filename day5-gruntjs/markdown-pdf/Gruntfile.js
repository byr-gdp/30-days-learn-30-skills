module.exports = function(grunt) {
    grunt.initConfig({
        markdownpdf: {
            options: {},
            files: {
                src: "src/*.md",
                dest: "dest"
            }
        }
    })
    grunt.loadNpmTasks('grunt-markdown-pdf');
    grunt.registerTask('default', ['markdownpdf']);
}
