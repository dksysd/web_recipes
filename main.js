var http = require("http");
var fs = require("fs");
var url = require("url");
var express = require("express");

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var menu_click = queryData.click;

  if (_url === "favicon.ico") {
    return response.writeHead(404);
  }
  response.writeHead(200);

  var template = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="index.css" />
        <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
        <script>
          var movemenu = function () {
            $("#menu").toggleClass("active");
          };
        </script>
        <title>Document</title>
      </head>
      <body>
        <header>
          <div
            style="position: absolute; float: left; width: 100vw"
            class="menu_wrap"
          >
            <a id="menu" class="menu-trigger" href="#" onclick="movemenu()">
              <span></span>
              <span></span>
              <span></span>
            </a>
            <div class="menu_list">
              <ol style="width: auto">
                <li></li>
                <li></li>
                <li></li>
              </ol>
            </div>
          </div>
        </header>
        <div class="main_frame">test</div>
      </body>
    </html>
    `;
  response.end(template);
});

app.listen(3000);
