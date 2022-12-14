---
title: 'Shell scripting with Node.js'
date: '2022-10-11'
---

<ul>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/pt_about.html">I About this book</a>
<ul>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_about-book.html">1 About this book</a>
<ul>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_about-book.html#why-should-i-read-this-book">1.1 Why should I read this book?</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_about-book.html#what-knowledge-is-required-to-read-this-book">1.2 What knowledge is required to read this book?</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_about-book.html#buying-and-previewing-this-book">1.3 Buying and previewing this book</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_about-book.html#about-the-author">1.4 About the author</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_about-book.html#acknowledgements">1.5 Acknowledgements</a></li>
</ul></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_instructions.html">2 Instructions</a>
<ul>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_instructions.html#how-to-read-this-book">2.1 How to read this book</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_instructions.html#how-assertions-are-used-in-this-book">2.2 How assertions are used in this book</a></li>
</ul></li>
</ul></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/pt_foundations.html">II Foundations</a>
<ul>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_getting-started-with-nodejs.html">3 Getting started with Node.js</a>
<ul>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_getting-started-with-nodejs.html#getting-help-for-node.js">3.1 Getting help for Node.js</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_getting-started-with-nodejs.html#installing-node.js-and-npm">3.2 Installing Node.js and npm</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_getting-started-with-nodejs.html#running-node.js-code">3.3 Running Node.js code</a></li>
</ul></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_nodejs-overview.html">4 An overview of Node.js: architecture, APIs, event loop, concurrency</a>
<ul>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_nodejs-overview.html#the-node.js-platform">4.1 The Node.js platform</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_nodejs-overview.html#the-node.js-event-loop">4.2 The Node.js event loop</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_nodejs-overview.html#libuv-the-cross-platform-library-that-handles-asynchronous-io-and-more-for-node.js">4.3 libuv: the cross-platform library that handles asynchronous I/O (and more) for Node.js</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_nodejs-overview.html#escaping-the-main-thread-with-user-code">4.4 Escaping the main thread with user code</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_nodejs-overview.html#sources-of-this-chapter">4.5 Sources of this chapter</a></li>
</ul></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_packages.html">5 Packages: JavaScript’s units for software distribution</a>
<ul>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_packages.html#what-is-a-package">5.1 What is a package?</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_packages.html#the-file-system-layout-of-a-package">5.2 The file system layout of a package</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_packages.html#archiving-and-installing-packages">5.3 Archiving and installing packages</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_packages.html#referring-to-modules-via-specifiers">5.4 Referring to modules via <em>specifiers</em></a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_packages.html#module-specifiers-in-node.js">5.5 Module specifiers in Node.js</a></li>
</ul></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_npm-overview.html">6 An overview of npm (a package manager for JavaScript)</a>
<ul>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_npm-overview.html#the-npm-package-manager">6.1 The npm package manager</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_npm-overview.html#help-for-npm">6.2 Getting help for npm</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_npm-overview.html#common-npm-commands">6.3 Common npm commands</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_npm-overview.html#abbreviations-for-npm-commands">6.4 Abbreviations for npm commands</a></li>
</ul></li>
</ul></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/pt_nodejs-core.html">III Core Node.js functionality</a>
<ul>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_nodejs-path.html">7 Working with file system paths and file URLs on Node.js</a>
<ul>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_nodejs-path.html#path-related-functionality-on-node.js">7.1 Path-related functionality on Node.js</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_nodejs-path.html#foundational-path-concepts-and-their-api-support">7.2 Foundational path concepts and their API support</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_nodejs-path.html#standard-directory-paths">7.3 Getting the paths of standard directories via module <code>'node:os'</code></a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_nodejs-path.html#concatenating-paths">7.4 Concatenating paths</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_nodejs-path.html#ensuring-paths-are-normalized-fully-qualified-or-relative">7.5 Ensuring paths are normalized, fully qualified, or relative</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_nodejs-path.html#parsing-paths-extracting-various-parts-of-a-path-filename-extension-etc.">7.6 Parsing paths: extracting various parts of a path (filename extension etc.)</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_nodejs-path.html#categorizing-paths">7.7 Categorizing paths</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_nodejs-path.html#path.format">7.8 <code>path.format()</code>: creating paths out of parts</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_nodejs-path.html#cross-platform-paths">7.9 Using the same paths on different platforms</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_nodejs-path.html#using-a-library-to-match-paths-via-globs">7.10 Using a library to match paths via <em>globs</em></a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_nodejs-path.html#using-file-urls-to-refer-to-files">7.11 Using <code>file:</code> URLs to refer to files</a></li>
</ul></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_nodejs-file-system.html">8 Working with the file system on Node.js</a>
<ul>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_nodejs-file-system.html#concepts-patterns-and-conventions-of-nodes-file-system-apis">8.1 Concepts, patterns and conventions of Node’s file system APIs</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_nodejs-file-system.html#reading-and-writing-files">8.2 Reading and writing files</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_nodejs-file-system.html#handling-line-terminators-across-platforms">8.3 Handling line terminators across platforms</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_nodejs-file-system.html#traversing-and-creating-directories">8.4 Traversing and creating directories</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_nodejs-file-system.html#copying-renaming-moving-files-or-directories">8.5 Copying, renaming, moving files or directories</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_nodejs-file-system.html#removing-files-or-directories">8.6 Removing files or directories</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_nodejs-file-system.html#reading-and-changing-file-system-entries">8.7 Reading and changing file system entries</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_nodejs-file-system.html#working-with-links">8.8 Working with links</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_nodejs-file-system.html#further-reading">8.9 Further reading</a></li>
</ul></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_nodejs-streams.html">9 Native Node.js streams</a>
<ul>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_nodejs-streams.html#recap-asynchronous-iteration-and-asynchronous-generators">9.1 Recap: asynchronous iteration and asynchronous generators</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_nodejs-streams.html#streams">9.2 Streams</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_nodejs-streams.html#readable-streams">9.3 Readable streams</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_nodejs-streams.html#transforming-Readable-via-async-generator">9.4 Transforming readable streams via async generators</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_nodejs-streams.html#writable-streams">9.5 Writable streams</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_nodejs-streams.html#quick-reference-stream-related-functionality">9.6 Quick reference: stream-related functionality</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_nodejs-streams.html#further-reading-and-sources-of-this-chapter">9.7 Further reading and sources of this chapter</a></li>
</ul></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_web-streams.html">10 Using web streams on Node.js</a>
<ul>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_web-streams.html#what-are-web-streams">10.1 What are web streams?</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_web-streams.html#reading-from-readablestreams">10.2 Reading from ReadableStreams</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_web-streams.html#turning-data-sources-into-readablestreams-via-wrapping">10.3 Turning data sources into ReadableStreams via wrapping</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_web-streams.html#writing-to-WritableStream">10.4 Writing to WritableStreams</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_web-streams.html#turning-data-sinks-into-writablestreams-via-wrapping">10.5 Turning data sinks into WritableStreams via wrapping</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_web-streams.html#transformstream">10.6 Using TransformStreams</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_web-streams.html#implementing-custom-transformstreams">10.7 Implementing custom TransformStreams</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_web-streams.html#a-closer-look-at-backpressure">10.8 A closer look at backpressure</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_web-streams.html#byte-streams">10.9 Byte streams</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_web-streams.html#node.js-specific-helpers">10.10 Node.js-specific helpers</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_web-streams.html#further-reading-1">10.11 Further reading</a></li>
</ul></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_stream-recipes.html">11 Stream recipes</a>
<ul>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_stream-recipes.html#writing-to-standard-output-stdout">11.1 Writing to standard output (stdout)</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_stream-recipes.html#writing-to-standard-error-stderr">11.2 Writing to standard error (stderr)</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_stream-recipes.html#reading-from-standard-input-stdin">11.3 Reading from standard input (stdin)</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_stream-recipes.html#nodejs-stream-recipes">11.4 Node.js stream recipes</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_stream-recipes.html#web-stream-recipes">11.5 Web stream recipes</a></li>
</ul></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_nodejs-child-process.html">12 Running shell commands in child processes</a>
<ul>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_nodejs-child-process.html#overview-of-this-chapter">12.1 Overview of this chapter</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_nodejs-child-process.html#spawn">12.2 Spawning processes asynchronously: <code>spawn()</code></a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_nodejs-child-process.html#spawning-processes-synchronously-spawnsync">12.3 Spawning processes synchronously: <code>spawnSync()</code></a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_nodejs-child-process.html#asynchronous-helper-functions-based-on-spawn">12.4 Asynchronous helper functions based on <code>spawn()</code></a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_nodejs-child-process.html#synchronous-helper-functions-based-on-spawnasync">12.5 Synchronous helper functions based on <code>spawnAsync()</code></a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_nodejs-child-process.html#useful-libraries">12.6 Useful libraries</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_nodejs-child-process.html#choosing-between-the-functions-of-module-nodechild_process">12.7 Choosing between the functions of module <code>'node:child_process'</code></a></li>
</ul></li>
</ul></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/pt_packages.html">IV Working with packages</a>
<ul>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_installing-packages.html">13 Installing npm packages and running bin scripts</a>
<ul>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_installing-packages.html#installing-npm-registry-packages-globally">13.1 Installing npm registry packages globally</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_installing-packages.html#installing-npm-registry-packages-locally">13.2 Installing npm registry packages locally</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_installing-packages.html#installing-unpublished-packages">13.3 Installing unpublished packages</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_installing-packages.html#npx">13.4 <code>npx</code>: running bin scripts in npm packages without installing them</a></li>
</ul></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_creating-shell-scripts.html">14 Creating cross-platform shell scripts</a>
<ul>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_creating-shell-scripts.html#required-knowledge">14.1 Required knowledge</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_creating-shell-scripts.html#node.js-esm-modules-as-standalone-shell-scripts-on-unix">14.2 Node.js ESM modules as standalone shell scripts on Unix</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_creating-shell-scripts.html#creating-an-npm-package-with-shell-scripts">14.3 Creating an npm package with shell scripts</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_creating-shell-scripts.html#how-npm-installs-shell-scripts">14.4 How npm installs shell scripts</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_creating-shell-scripts.html#publishing-the-example-package-to-the-npm-registry">14.5 Publishing the example package to the npm registry</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_creating-shell-scripts.html#standalone-node.js-shell-scripts-with-arbitrary-extensions-on-unix">14.6 Standalone Node.js shell scripts with arbitrary extensions on Unix</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_creating-shell-scripts.html#standalone-node.js-shell-scripts-on-windows">14.7 Standalone Node.js shell scripts on Windows</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_creating-shell-scripts.html#creating-native-binaries-for-linux-macos-and-windows">14.8 Creating native binaries for Linux, macOS, and Windows</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_creating-shell-scripts.html#shell-paths-making-sure-shells-find-scripts">14.9 Shell paths: making sure shells find scripts</a></li>
</ul></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_package-scripts.html">15 Running cross-platform tasks via npm package scripts</a>
<ul>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_package-scripts.html#npm-package-scripts">15.1 npm package scripts</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_package-scripts.html#kinds-of-package-scripts">15.2 Kinds of package scripts</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_package-scripts.html#the-shell-environment-in-which-package-scripts-are-run">15.3 The shell environment in which package scripts are run</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_package-scripts.html#using-environment-variables-in-package-scripts">15.4 Using environment variables in package scripts</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_package-scripts.html#arguments-for-package-scripts">15.5 Arguments for package scripts</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_package-scripts.html#npm-log-level">15.6 The npm log level (how much output is produced)</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_package-scripts.html#cross-platform-shell-scripting">15.7 Cross-platform shell scripting</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_package-scripts.html#helper-packages-for-common-operations">15.8 Helper packages for common operations</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_package-scripts.html#expanding-the-capabilities-of-package-scripts">15.9 Expanding the capabilities of package scripts</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_package-scripts.html#sources-of-this-chapter-1">15.10 Sources of this chapter</a></li>
</ul></li>
</ul></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/pt_scripts.html">V Handling common tasks in scripting</a>
<ul>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_node-util-parseargs.html">16 Parsing command line arguments with <code>util.parseArgs()</code></a>
<ul>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_node-util-parseargs.html#imports-that-are-implied-in-this-chapter">16.1 Imports that are implied in this chapter</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_node-util-parseargs.html#the-steps-involved-in-processing-command-line-arguments">16.2 The steps involved in processing command line arguments</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_node-util-parseargs.html#parsing-command-line-arguments">16.3 Parsing command line arguments</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_node-util-parseargs.html#parseargs-tokens">16.4 <code>parseArgs</code> tokens</a></li>
</ul></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_shell-scripting-recipes.html">17 Shell scripting recipes</a>
<ul>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_shell-scripting-recipes.html#interactively-editing-code-snippets-via-nodemon">17.1 Interactively editing code snippets via nodemon</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_shell-scripting-recipes.html#detecting-if-the-current-module-is-main-the-app-entry-point">17.2 Detecting if the current module is “main” (the app entry point)</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_shell-scripting-recipes.html#accessing-files-relative-to-the-current-module">17.3 Accessing files relative to the current module</a></li>
</ul></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_cross-platform-considerations.html">18 Cross-platform considerations</a>
<ul>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_cross-platform-considerations.html#file-system-paths">18.1 File system paths</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_cross-platform-considerations.html#handling-line-terminators">18.2 Handling line terminators</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_cross-platform-considerations.html#detecting-the-current-platform">18.3 Detecting the current platform</a></li>
<li><a href="https://exploringjs.com/nodejs-shell-scripting/ch_cross-platform-considerations.html#running-project-related-tasks-on-all-platforms">18.4 Running project-related tasks on all platforms</a></li>
</ul></li>
</ul></li>
</ul>
