var MessengerAdaptorPrototype;


module.exports = createMessengerAdaptor;


function createMessengerAdaptor() {
    var client = new MessengerAdaptor(),
        server = new MessengerAdaptor();

    client.socket = server;
    server.socket = client;

    return {
        client: client,
        server: server
    };
}

function MessengerAdaptor() {
    this.socket = null;
    this.__messages = [];
}
MessengerAdaptorPrototype = MessengerAdaptor.prototype;

MessengerAdaptorPrototype.addMessageListener = function(callback) {
    var messages = this.__messages;
    messages[messages.length] = callback;
};

MessengerAdaptorPrototype.onMessage = function(data) {
    var messages = this.__messages,
        i = -1,
        il = messages.length - 1;

    while (i++ < il) {
        messages[i](data);
    }
};

MessengerAdaptorPrototype.postMessage = function(data) {
    this.socket.onMessage(data);
};
