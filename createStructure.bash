styles="styles"
scripts="scripts"

cp ~/github_projects/.gitignore ./

mkdir -p images

mkdir -p src/${styles%%}
mkdir -p src/${scripts%%}
#mkdir -p src/${scripts%%}/content

mkdir -p dist/${styles%%}
mkdir -p dist/${scripts%%}

touch src/${scripts%%}/app.js
touch src/${scripts%%}/state.js
touch src/${scripts%%}/appDesktop.js
touch src/${scripts%%}/appMobile.js
touch src/${scripts%%}/templates.js
touch src/${scripts%%}/content.js

touch src/${styles%%}/global.css

touch dist/preview.html

echo -e "module.exports = {\ncontent: require('./content.js'),\n}" >> src/${scripts%%}/state.js
echo -e "module.exports = {\n\n}" >> src/${scripts%%}/content.js


echo -e "(()=>{" >> src/${scripts%%}/app.js
echo -e "const state = require('./state')" >> src/${scripts%%}/app.js
echo -e "\n\n})()" >> src/${scripts%%}/app.js

npm init -y

#npm i --save-dev browserify watchify babelify babel-preset-es2015

ls -al
