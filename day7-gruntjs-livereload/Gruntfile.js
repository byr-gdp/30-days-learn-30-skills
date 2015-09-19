module.exports = function(grunt) {
    grunt.initConfig({
        markdown: {
            all: {
                files: [
                    {
                        expand: true,
                        src: "*.md",
                        dest: "docs/html/",
                        ext: ".html"
                    }
                ],
                options: {
                    template: "templates/index.html",
                    markdownOptions: {
                        gfm: true,
                        codeLines: {
                            before: "<span>",
                            after: "<span>"
                        }
                    }
                }
            }
        },
        uglify: {
            build: {
                src: ["js/app.js"],
                dest: "js/app.min.js"
            }
        },
        watch: {
            scripts: {
                files: ["js/app.js", "*.md", "templates/index.html"],
                tasks: ["uglify", "markdown"],
                options: {
                     livereload: 9877
                }
            }
        }
    })

    grunt.loadNpmTasks("grunt-markdown");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.registerTask("default", ["markdown", "uglify"])
}
