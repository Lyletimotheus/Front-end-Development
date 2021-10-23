# SASS Crash Course 

## Setting up the environment
1. npm init -y 
We initialize the root of our application and create a package.json file

2. npm i sass -D
Install SASS and save it as a DEV dependency

## Difference between a scss and a sass file 
1. .sass syntax 
    - File reference (index.sass)
    - Similar to CSS
    - Uses indention of lines to specify blocks 
    - Example: 
        body
            padding: 1em
            background: lightblue

2. .scss
    - More familar
    - Example: 
    body{
        padding: 1em;
        background: lightblue;
    }

## Compiling your .scss file into css
1. Process
    - In the package.json file in scripts:
        "start":"sass ./sass/index.scss ./css/style.css"
    We are specifying the path to the SASS file and we want the file compiled into the css file
    - run the script: npm start and our files are compiled into the specified CSS path
2. For every change you make to the .scss file we need to run the script to update the current changes
    We use the watch flag, by adding it into the package.json file and by the start script we created

## Creating nested elements
1. Process
    - We can implement the same hierarchy we use in HTML with .scss when busy working with nested elements, for example navigation menus

## Partials 
1. Convention
    - partial file is created with a underscore (_partial.scss)
    - We can use this file modularize our css file 
    - We will use the import directive (@import) in our main .scss file 
    - Using partials help with separating our code, for instance differentiating between mobile and desktop code

## Mixins
1. Convention
    - Think of it as javascript functions but with different syntax
    - To specify mixin we use the @mixin 
    - Section called mixin under index.scss file makes reference to it

## Extend / Inheritance
1. Convention
    - You can reuse the code by extending it 

## Pseudo Selector 
    - Reference file is index.scss under pseudo element section
    - To use the selector all we have to use is &:NAME_OF_SELECTOR{}

## Operators
