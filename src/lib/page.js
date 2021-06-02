import { WLibTypes } from "./types.js";

class WLibPage {
    constructor () {
        this.whenLoad = new WLibTypes.FunctionArray ();
        this.whenResize = new WLibTypes.FunctionArray ();

        this.Child = undefined;

    }

    SetChild (args) {
        this.Child = args;
    }

}

export {WLibPage}