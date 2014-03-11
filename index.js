var cares = process.binding("cares_wrap");
var assert = require("assert");

var ipConf = {
  "0" : 0,
  "v4" : 2,
  "v6" : 0,
};

var GetHostByName = {
  resolve : function(name, ipVersion, callback) {
    assert(name, "Specify first argument for name");
    assert(ipVersion, "Specify 2nd argument for IPv4/IPv6 or callback");
    if (typeof ipVersion === "function") {
        callback = ipVersion;
        ipVersion = "0"; 
    }
    if (typeof callback !== "function") throw new Error("Specify callback");

    var ipver = ipConf[ipVersion];
    if (typeof ipver !== "number") ipver = 0;
    cares.getHostByName(name, ipver, callback);
  }
};
module.exports = GetHostByName;
