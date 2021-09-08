const {generateTemplateFiles} = require('generate-template-files');

generateTemplateFiles([
    // React
    {
        option: 'React Functional Component',
        defaultCase: '(noCase)',
        entry: {
            folderPath: './tools/templates/react-component/',
        },
        stringReplacers: ['__name__'],
        output: {
            path: './src/components/__name__(kebabCase)',
            pathAndFileNameDefaultCase: '(noCase)',
        },
    },
]);
