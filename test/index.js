var assert = require("assert"),
    Messenger = require("messenger"),
    createMessengerAdaptor = require("../src/index");


describe("createMessengerAdaptor()", function() {
    it("should create messenger adaptor", function() {
        var socket = createMessengerAdaptor(),
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
