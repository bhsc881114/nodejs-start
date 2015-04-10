var exec = require("child_process").exec;

function start() {
  console.log("Request handler 'start' was called.");
  return "Hello Start";
}

function badAsync() {
 console.log("Request handler 'badAsync' was called.");
  var content = "empty";

  exec("ls -lah", function (error, stdout, stderr) {
    content = stdout;
    console.log("result:"+content);
  });

  return content;  
}

function upload() {
  console.log("Request handler 'upload' was called.");
  return "Hello Upload";
}

exports.start = start;
exports.upload = upload;
exports.badAsync = badAsync;
