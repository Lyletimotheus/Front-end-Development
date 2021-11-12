# NPM Crash Course 
<p>A basic node package manager refresher</p>
<p> Accessed at: www.npmjs.com </p>
<p>When you need to install modules/packages, esspecially if you are cloning a repo, you need to run <code>npm install</code></p>

## What is NPM?
- Pre-installed with Node.js
- Easily install modules/packages on your system
- Modules are basically JavaScript libraries
- Makes it easy for developers to share and reuse code

## Core components of NPM
- Install, remove, update & list packages
- All about package.json
- Local & global packages
- Dependencies/dev-dependencies
- Commands & Shortcuts
- Versioning 
- NPM Scripts 

## Commands
- npm -v / npm --version : Checks the version of NPM
- npm : Brings up the help page with different commands
### Commands - Package.json
- npm init -y : Initialize a package.json file and agreeing to all 
- npm config set init-{license, author-name, etc} : Here we can change the default values of the package.json file 
- npm config get init-{license, author-name, etc} : When we want to get the values in the package.json file 
- npm config delete init-{license, author-name, etc} : Deletes the default information
- npm install {package_name} --save : Saves the module/package as a dependency in the package.json file
- npm install {package_name} --save-dev : Saves the module as a dev dependency
- npm install --production : Install only production dependencies 
- npm uninstall {package_name} / npm uninstall {package_name} --save-dev / npm rm {package_name} --save / npm rm {package_name} --save-dev : removes the package from the list of dependencies or from the dev dependencies 
- npm install {pacakge_name}@version : Installing a package at a particular version
- npm update {package_name} : Updating a particular module/package
- npm list : Lists the packages used by the application
- npm list --depth 0 : SHows the top level packages installed 
### Global Packages
 - npm install -g {package_name} : Install the module globally. * It won't show up in our node_modules folder as it will be installed on our local machine. 
 - npm root -g : Shows the location of the global installed modules that are on our local machine.
 - npm remove -g {package_name} : Removes the module that was installed globally

## Package.json File
- Manifest file with app info
- Lists dependencies (name and version)
- Specify if versions should be updated
- Create NPM Scripts
- Easily create with "npm init"
- The entry point file is usually a file called index.js or app.js. This file is used to load the module. 
* When working with a module in the index.js file, you need to require it to use it. 

## Dev Dependencies
- Used only for production

## Semantic versioning
<p>Example of the version numbers:8.2.6</p>
    - 8: Major version (Major changes, breaks the API)
    - 2 : Minor version (New features, does not break API)
    - 6 : Patch (Bug fixes)
"lodash" : "^4.17.3" - This will keep the current major version, but install the latest minor version
"lodash" : "~4.17.3" - This will keep the minor version and only get the latest patch version
 "lodash" : "4.17.3" - This will install this exact version of the module 
 "lodash" : "*" - This will install the latest version of the module (Use this carefully as you can break your application)

 ## Scripts
 - Allows us to run our application easily
 - Common script name is start
 - This is useful when working with dev dependencies that you want to run while testing your application


