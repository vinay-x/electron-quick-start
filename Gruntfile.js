module.exports = function(grunt) {
    grunt.initConfig({
        'create-windows-installer': {
            ia32: {
                appDirectory: './out/myApp',
                outputDirectory: './out/dist',
                name: 'MyApp',
                description: 'MyApp With AutoUpdate 30thMay',
                authors: 'Xenovus',
                exe: 'MyApp.exe'
            }
        }
    });

    grunt.loadNpmTasks('grunt-electron-installer');
};