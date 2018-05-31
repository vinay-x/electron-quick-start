const path = require('path')

module.exports = function(grunt) {
    grunt.initConfig({
        'create-windows-installer': {
            ia32: {
                appDirectory: './out/electronQuickStart-win32-ia32',
                outputDirectory: './out/dist',
                name: 'electronQuickStart',
                loadingGif: path.join(__dirname, 'assets', 'img', 'loading.gif'),
                description: 'electronQuickStart',
                setupExe: 'electronQuickStartSetup.exe',
                authors: 'Xenovus',
                exe: 'electronQuickStart.exe'
            }
        }
    });

    grunt.loadNpmTasks('grunt-electron-installer');
};