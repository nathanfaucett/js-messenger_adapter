var assert = require("assert"),
    Messenger = require("messenger"),
    createMessengerAdapter = require("../src/index");


describe("createMessengerAdapter()", function() {
    it("should create messenger adapter", function() {
        var socket = createMessengerAdapter(),
            client = new Messenger(socket.client),
            server = new Messenger(socket.server);

        server.on("message", function(data, callback) {
            callback(undefined, data);
        });

        client.emit("message", {
            data: "data"
        }, function(error, data) {
            assert.equal(error, undefined);
            assert.deepEqual(data, {
                data: "data"
            });
        });

        client.on("message", function(data, callback) {
            callback(undefined, data);
        });

        server.emit("message", {
            data: "data"
        }, function(error, data) {
            assert.equal(error, undefined);
            assert.deepEqual(data, {
                data: "data"
            });
        });
    });
});
