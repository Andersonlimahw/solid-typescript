export abstract class BaseController<T> {
    private _route: string;
    private _nameSpace: string;
    private _version : string;

    constructor(route: string) {
        this._route = route;
        this._nameSpace = "api";
        this._version = new Date().getTime().toString();
    }

    public get route() {
        return this._route;
    }

    public get nameSpace(): string {
        return this._nameSpace;
    }

    public get version() {
        return this._version;
    }

    abstract get(id: any) : any;
    abstract post(data: T): any;
    abstract put(data: T): any;
    abstract delete(id: any): any;

}