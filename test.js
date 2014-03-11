var assert = require("assert");
var hostbyname = require("./index.js");
var cb = function(err, results){
  assert.ifError(err);
  assert(results);
  console.log(results);
};

hostbyname.resolve("localhost", cb);
hostbyname.resolve("localhost", "0", cb);
hostbyname.resolve("localhost", "v4", cb);
hostbyname.resolve("localhost", "v6", cb);
hostbyname.resolve("www.google.com", cb);
hostbyname.resolve("www.google.com", "0", cb);
hostbyname.resolve("www.google.com", "v4", cb);
hostbyname.resolve("www.google.com", "v6", cb);
