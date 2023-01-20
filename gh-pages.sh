#!/usr/bin/env sh

set -e

npm run build:github

cd dist

echo > .nojekyll

git init
git checkout -B master
git add -A
git commit -m 'gh-pages'

git push -f git@github.com:pablooeescobaro/grinchenko.git master:gh-pages
cd -
