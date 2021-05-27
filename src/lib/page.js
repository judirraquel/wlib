import { WLibTypes } from "./types.js";

class WLibPage {
    constructor () {
        this.whenLoad = new WLibTypes.FunctionArray ();
    }
}

export {WLibPage}