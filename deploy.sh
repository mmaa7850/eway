npm run build
cd dist
git init
git add -A
git commit -m "deploy"
git branch -M main
git push -f git@github.com:<mmaa7850>/<eway>.git main:gh-pages