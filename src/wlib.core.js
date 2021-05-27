import { WLibTypes } from "./lib/types.js";
import { WLibPage } from "./lib/page.js";
import { WLibHTMLObject } from "./lib/html_object.js";
import { WLibWidget } from "./lib/ui/widget.js";

class WebLib {

    constructor () {

        this.About = {
            Version : '1.0',
            Author : 'Horacio Daniel Ros',
            EMail : 'horaciodrs@gmail.com'
        };

        this.Types = WLibTypes;
        this.Page = new WLibPage ();

        this.Root = new WLibWidget({Id : 'root'});

    }

    Get (obj) {
        return WLibHTMLObject.Get (obj);
    }

    Init () {

        window.onload = function(){
            WLib.Page.whenLoad.Run();
        };

    }

}

let WLib = new WebLib ();

WLib.Init ();

export {WLib};