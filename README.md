# Time Manager
1. Clone porject `git clone https://github.com/natali55/time-manager.git                                              `
2. Install `node` and `npm`
3. Go to project folder `your-path/time-manager`
4. Install modules `npm install`
5. Then install bower components `bower install` (or `bower update` if you have already installed)
6. Build the project `gulp build` and then run `gulp live` and project will be rebuild automatically
7. Start server (simple localhost) for use application in browser `node server.js`
8. Browse application `http://localhost:9009/#/`

By default application will be built to _/build_ folder. Build folder doesn't appear in commit. You can change it in `.gitignore` file.


Note: Project should be rebuild after adding new files
(`gulp build` or `gulp live`)