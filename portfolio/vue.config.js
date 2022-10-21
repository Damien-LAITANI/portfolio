const { defineConfig } = require('@vue/cli-service');
const path = require('path');
module.exports = defineConfig({
    transpileDependencies: true,
    pluginOptions: {
        'style-resources-loader': {
            'preProcessor': 'scss',
            'patterns': [
                path.resolve(__dirname, './src/assets/scss/abstract/_variable.scss'),
                path.resolve(__dirname, './src/assets/scss/abstract/_mixin.scss'),
            ]
        }
    }
});

