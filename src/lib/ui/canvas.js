import { WLibTypes } from "../types.js";
import { WLibWidget } from "./widget.js";

class WLibWidgetCanvas extends WLibWidget {
    constructor(args) {

        super(args);

        this.Body.className = 'WLibWidgetCanvas';

        this.Canvas = this.Body.add ({tagName : 'canvas', Id : this.Id + '.Canvas'});

        this.Canvas.style.border = 'solid 1px white;';

        this.Configure ();
        

    }

    Resize (){
        this.Configure ();
        super.Resize ();
    }

    Configure () {

        this.Canvas.width = this.Body.clientWidth;
        this.Canvas.height = this.Body.clientHeight;

    }

}

export { WLibWidgetCanvas };
