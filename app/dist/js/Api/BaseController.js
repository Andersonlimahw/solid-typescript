export class BaseController {
    constructor(route) {
        this._route = route;
        this._nameSpace = "api";
        this._version = new Date().getTime().toString();
    }
    get route() {
        return this._route;
    }
    get nameSpace() {
        return this._nameSpace;
    }
    get version() {
        return this._version;
    }
}
