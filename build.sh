#!/bin/bash

rm -rf dist
npx ncc build actions/main.js -o main
npx ncc build actions/pre.js -o pre
npx ncc build actions/post.js -o post

mkdir -p dist
mv pre/index.js dist/pre.js
mv main/index.js dist/main.js
mv post/index.js dist/post.js

rm -rf pre main post