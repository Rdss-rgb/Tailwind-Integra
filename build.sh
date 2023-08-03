#!/bin/bash
echo "Starting Building the project"
sleep 2
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
sleep 2
echo "Finished Building CSS"

rm -R ./dist
mkdir dist

cp -R ./index.html ./dist
echo "Done, Moving index.html"
cp -R ./css ./dist/css
echo "Done, Moving CSS"
cp -R ./js ./dist/js
echo "Done, Moving JS"
cp -R ./assets ./dist/assets