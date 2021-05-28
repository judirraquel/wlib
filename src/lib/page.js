import { WLibTypes } from "./types.js";

class WLibPage {
    constructor () {
        this.whenLoad = new WLibTypes.FunctionArray ();
        this.whenResize = new WLibTypes.FunctionArray ();
    }
}

export {WLibPage}