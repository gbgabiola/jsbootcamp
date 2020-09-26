# The Web Platform Ecosystem

## Table of Contents <!-- omit in toc -->

- [Introduction to the Web](#introduction-to-the-web)
- [The Early Days](#the-early-days)
- [The Big Picture](#the-big-picture)
- [How Web Apps Work](#how-web-apps-work)
- [Web Browsers](#web-browsers)
- [Web Servers](#web-servers)


## Introduction to the Web

- Web started in 1991, as a research, an experiment, of a CERN researcher Tim Berners-Lee
- born on the concept of hypertext: documents linked together


## The Early Days

- **Hypertext Markup Language** (HTML) defined the structure of hypertext documents
- **Browsers** interpreted those documents and rendered them nicely to users
- only has Mosaic as a browser
- enhanced HTML in non-standard ways
- CSS was created to help with styling and creating a common language all browsers could use
- JavaScript was created at Netscape to allow interactivity on Web pages, and quickly adopted by browsers
- JavaScript has evolved into a powerful language, that we can use to create apps that are not limited inside the browser


## The Big Picture

- opening a page in a browser, a request is being made to a **server**
- protocols to make  connection happen, e.g., IP, TCP, HTTP
- server responds to the request by sending back a text document in HTML format
- HTML is the standard way to organize and present documents that browsers processed and rendered
- write HTML that browsers can understand how the page is structured
- HTML document can contains links to CSS, fonts, JS, etc
- browsers have default styles for rendering HTML
- use **CSS** to customize the style of HTML pages
- use JavaScript to make the pages interactive


## How Web Apps Work

- a Web App is an application that runs inside the browser
- today, Web is an application platform, powerful and complex apps run directly inside the browser
- browser is not just a document visualization tool: it's a runtime, a platform that executes other programs


## Web Browsers

- most popular browsers, e.g., Google Chrome, Firefox, Edge, Safari, etc
- all browsers are working independently on their software to make sure you have the same experience browsing the web using **standards**
- **Standards** are defined by organizations like The World Wide Web Consortium (W3C) or Ecma International
- those organizations are responsible for defining, and advancing, technologies like CSS, HTML, JavaScript, and browsers API
- browsers provide many different APIs to:
  - ask information to the browser
  - display advanced graphics, play sounds
  - access network and file system resources, and much more
- browser main task is to get users input, render page, contact Web server and receives information back
- browsers Developer Tools is way to debug and inspect web pages and web applications


## Web Servers

- a **server** is a software that responds to requests made by a client
- Web has client/server model: one Web server serves multiple clients
- **client**
  - Web browser, that calls the server directly upon the user request
  - JavaScript script running inside a page loaded in the browser
  - a program running on a computer, looking for information
- **Note**: we also call "server", the hardware that allows the server to run, but rarely used now because most servers cloud based
- server can be written in any programming languages, e.g., C, C#, Java, PHP, Ruby, Python, JavaScript (Node.js), etc
