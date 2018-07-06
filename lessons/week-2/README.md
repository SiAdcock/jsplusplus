# Week 2: CommonJS and Continuation Passing Style

This week, we're going to dive a little deeper into Node patterns, namely CommonJS and Continuation Passing Style (aka callbacks).

## Resources

If you need to revisit CommonJS, take another look at Addy Osmani's chapter on [CommonJS](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#detailcommonjs). Some of the Related Reading links at the bottom of the chapter may prove useful if you need more detail.

It is also worth reading this article about [Continuation Passing Style (CPS)](http://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/), nowadays more commonly referred to as the callback pattern.

## Exercise

We're going to continue from where we left at the end of Week 1, our script that converts markdown to HTML. 

This week, we're going to extract our code into individual files called Modules. We'll also update our script to run asynchronously.

### Importing and exporting application code

- Rename `index.js` to `convert-sync.js`
- Extract all the logic into a function called `convertSync(string: filename)` that receives a string, the filename of markdown file
- The output filename should be the same as the filename of the input file (e.g. if the input file is `foo.md`, the output file should be `foo.html`)
- At the end of the file, set `module.exports = convertSync`
- Create a new file called `index.js` that requires `./convert-sync` and executes the function
- Run your programme and make sure it still works
    `$ node ./index.js`

### Asynchronous read and write

- Create a new file called `convert.js`
- In `convert.js`, write a new function called `convert(string: filename)` that performs the same task as `convertSync()` but uses [`fs.readFile()`](https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback) and [`fs.writeFile()`](https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback), the asynchronous versions of the functions we were using previously.
- Take note that the callbacks passed to each of these functions receive an error object (`err`) as the first argument. `err` will be `null` if no errors occurred when reading from or writing to the file system. Be sure to check whether an error has occurred at the top of the callback. This is a common convention in Node.js.
- In `index.js`, require `./convert` and execute this function instead of `convertSync()`
- Run your programme and make sure it still works
    - `$ node ./index.js`
- Update `convert()` to receive a callback as the second argument:
    - `convert(string: filename, (err) => void: callback) `
- The callback should be called at the bottom of the callback passed to `fs.writeFile()` i.e. the last thing that happens in your programme
- The callback should also be called if either of the callbacks passed to `fs.readFile()` and `fs.writeFile()` receive an error. This error should be passed on to the `convert()` callback.
- Pass a callback to the `convert()` function from your `index.js`:
    - If the callback receives an error, it should write the error to the standard error stream. Use `console.err()`
    - Otherwise, the callback should write “File converted successfully” to the standard output
