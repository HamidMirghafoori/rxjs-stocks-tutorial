npm init -y
npm install --save-dev typescript
add tsconfig.json
npm install --save express
npm install -save-dev @types/express
npm install --save-dev eslint
npx eslint --init

update package.json
"main": "dist/app.js",
"start": "tsc && node dist/app.js",
"lint": "eslint . --ext .ts",

npm install --save-dev nodemon
update package.json
"start": "tsc && npx nodemon --watch src dist/app.js",

"nodemonConfig": {
"watch": [
"server"
],
"ext": "ts",
"ignore": [
"*.test.ts"
],
"delay": "3",
"execMap": {
"ts": "ts-node"
}
},

------------Commits----------------
