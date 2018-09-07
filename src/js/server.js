const path = require('path');
const express = require('express');
const app = express();
const port = 8080;

app.set('port', port || 9001);

app.use('/js', express.static(path.resolve('dist')));
app.use('/js', express.static(path.resolve('node_modules', 'handlebars', 'dist')));
app.use('/pages', express.static(path.resolve('src', 'views')));

app.listen(app.get('port'), function () {
    console.log('Web server listening on port ' + app.get('port'));
});