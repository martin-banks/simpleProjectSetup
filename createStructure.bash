styles="styles"
scripts="scripts"

cp ~/github_projects/.gitignore ./

mkdir -p images

mkdir -p src/${styles%%}
mkdir -p src/${scripts%%}

mkdir -p dist/${styles%%}
mkdir -p dist/${scripts%%}

touch src/${scripts%%}/app.js
touch src/${scripts%%}/state.js

touch src/${styles%%}/global.sass

touch dist/preview.html

echo -e "module.exports = {\n\n}" >> src/${scripts%%}/state.js


echo -e "(()=>{" >> src/${scripts%%}/app.js
echo -e "	const state = require('./state')" >> src/${scripts%%}/app.js
echo -e "\n\n})()" >> src/${scripts%%}/app.js

npm init -y

# npm i --save browserify
# npm i --save watchify
# npm i --save babelify
# npm i --save babel-preset-es2015
