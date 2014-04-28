var swig = require('swig');

swig.setDefaults({
    cache: false,
    loader: swig.loaders.fs()
});

console.log(swig.renderFile(__dirname + '/templates/main.html', {
    variable: 'value for the main template'
}));