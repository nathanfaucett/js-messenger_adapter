MessengerAdapter
=======

simple messenger adapter for @nathanfaucett/messenger

```javascript
var createMessengerAdapter = require("@nathanfaucett/messenger_adapter"),
    adapter = createMessengerAdapter(),
    client = adapter.client,
    server = adapter.server;


server.on("test", function() {
    console.log("test");
});

client.emit("test");
```
