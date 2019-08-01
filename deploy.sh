#!/usr/bin/env sh

# abort on errors
set -e

# navigate into the build output directory
cd __sapper__/export

# if you are deploying to a custom domain
echo 'contemplations.owlabout.de' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:owlabout/contemplations.git master:gh-pages

cd -
