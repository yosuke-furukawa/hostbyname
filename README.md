HostByName
============

We need to use `gethostbyname`.

However, node.js uses `getaddrinfo` for resolve address.

So we just use `gethostbyname` module for node.js.

Getting Started
============

```shell
$ npm install hostbyname
```


```javascript
var hostbyname = require("hostbyname");
var cb = function(err, results){
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

```

LICENSE
============

MIT
