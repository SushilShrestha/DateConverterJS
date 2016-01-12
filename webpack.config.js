module.exports = {
    entry: {
        dateconverter:"./ClientSideBuild.js"
    },
    output: {
        path: __dirname + '/build',
        filename: '[name].dist.js'
    },
    module: {
        loaders: [
            ]
        },
        resolve: {
        extensions: ['', '.js']
    }
};
