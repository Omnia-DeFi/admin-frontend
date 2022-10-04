const Pusher = require("pusher");

const pusher = new Pusher({
        appId: "1483322",
        key: "b2c6e10ed473266b458b",
        secret: "5f842a05580230ae1197",
        cluster: "eu",
        useTLS: true
    });
    
pusher.trigger("omnia", "new-notification", {
    message: "hello world from Omnia"
});
