const request = require("request");

class LibreViewApi {

    /**
     * Construct a new LibreViewApi instance
     *
     * @param props
     */
    constructor(props) {
        this.options = Object.assign({}, {
            server: "eu",
            debug: false
        }, props);
    }

    get baseUrl() {
        return "https://api-" + this.options.server + ".libreview.io"
    }

    _doRequest(method, path, data) {
        return new Promise((resolve, reject) => {
            let reqOpts = {
                url: this.baseUrl + path,
                method: method,
                json: data
            };
            if (this._auth) {
                reqOpts.auth = {
                    bearer: this._auth.token
                }
            }

            request(reqOpts, (err, response, body) => {
                if (err) {
                    if (this.options.debug) console.error(err);
                    reject(err);
                    return;
                }
                if (this.options.debug) console.log(body);

                if ((response.statusCode >= 200 && response.statusCode <= 230) && body.data) {
                    if (body.ticket) {
                        this._auth = body.ticket;
                    } else if (body.data.authTicket) {
                        this._auth = body.data.authTicket;
                    }

                    resolve(body.data);
                } else if (body.error) {
                    reject(body.error);
                } else {
                    reject(response.statusCode);
                }
            });
        })
    }

    /**
     * Login to LibreView
     * @param email
     * @param password
     * @returns {Promise<Object>}
     */
    login(email, password) {
        return new Promise((resolve, reject) => {
            this._doRequest("POST", "/auth/login", {
                email: email,
                password: password
            }).then(data => {
                this._user = data.user;

                resolve(this.user);
            }).catch(reject);
        });
    }

    /**
     * @returns {Object} the currently logged-in user
     */
    get user() {
        return this._user;
    }

    /**
     * Get the glucose history data
     * @param numPeriods
     * @param period
     * @returns {Promise<Object>}
     */
    glucoseHistory(numPeriods, period) {
        return new Promise((resolve, reject) => {
            if (!this._auth) {
                reject("Not logged in");
                return;
            }


            this._doRequest("GET", "/glucoseHistory?numPeriods=" + numPeriods + "&period=" + period, {}).then(data => {
                resolve(data);
            }).catch(reject);
        });
    }

    /**
     * Get the report settings
     * @returns {Promise<Object>}
     */
    reportSettings() {
        return new Promise((resolve, reject) => {
            if (!this._auth) {
                reject("Not logged in");
                return;
            }


            this._doRequest("GET", "/reportSettings", {}).then(data => {
                resolve(data);
            }).catch(reject);
        });
    }

    shortUploadToken() {
        return new Promise((resolve, reject) => {
            if (!this._auth) {
                reject("Not logged in");
                return;
            }

            this._doRequest("GET", "/shortUploadToken", {}).then(data => {
                resolve(data);
            }).catch(reject);
        });
    }

}

module.exports = LibreViewApi;



