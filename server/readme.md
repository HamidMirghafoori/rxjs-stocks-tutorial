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

------------Commits----------------
