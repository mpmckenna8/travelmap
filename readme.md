This is going to be a little travel map using react.js

to bundle up the javascript just do

browserify  -t [ babelify --presets [react] ] app.js -o bundle.js

But I'm going to use budo and live reload to check stuff out. To run the development
server just run:

budo app.js --live -o -- -t [ babelify --presets [react] ]

with budo and babelify installed.
