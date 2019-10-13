const LibreViewApi = require("./index");

let api = new LibreViewApi({
    debug: true
});
api.login("foo@bar.com", "12345").then(user => {
    console.log("Logged in as " + user.firstName + " " + user.lastName);
    console.log(JSON.stringify(user))

    api.glucoseHistory(5, 7).then(data => {
        console.log(JSON.stringify(data));

    }).catch(err => console.warn(err));
}).catch(err => console.warn(err));
