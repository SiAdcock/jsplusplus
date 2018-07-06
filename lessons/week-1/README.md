# Week 1: Introduction to Node

This week, we're going to look at Node and its module system.

## Resources

Take a look at Addy Osmani's explanation of [Modern Modular JavaScript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modularjavascript). It's quite a long chapter, so pay more attention to **CommonJS** and **ES Harmony**. 

The first section on **AMD** is optional. It's an older module syntax and rarely used for new applications, but you might enjoy knowing the background of modular JS. If you choose to read the AMD section, definitely skip sections on AMD with Dojo and jQuery.

## Exercise

We are going to create script that reads a markdown file and translates it into HTML. We are going to use Node’s built-in `fs` package to help us interact with the file system.

- In this folder, initialise an NPM project with sensible defaults
    - `$ npm init --yes`
- Make a new file called `index.js`
    - It’s common convention in Node projects to name your start scripts `index.js`. There are some practical advantages to doing this, too
- Make a markdown file (e.g. `test.md`). Add the line:
    - `# This is a heading`
- We are going to use [CommonJS](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#detailcommonjs) syntax to import dependencies into our `index.js`
    - Use [`fs.readFileSync()`](https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options) to read from your markdown file
    - Translate the Heading in the markdown file into a `<h1>` element in HTML
    - Output the HTML to the terminal using `console.log()`
    - Use [`fs.writeFileSync()`](https://nodejs.org/api/fs.html#fs_fs_writefilesync_file_data_options) to write your output HTML to a new HTML file
- Run your script
    `$ node ./index.js`

You may find it useful to experiment with the Node REPL

```bash
$ node
```
