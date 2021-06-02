import { WLibTypes } from "../types.js";
import { WLibWidget } from "./widget.js";

class WLibWidgetCanvas extends WLibWidget {
    constructor(args) {

        super(args);

        this.Body.className = 'WLibWidgetCanvas';

        this.Canvas = this.Body.add ({tagName : 'canvas', Id : this.Id + '.Canvas'});

        this.Parent.whenResize.Add (new WLibTypes.FunctionItem ({Id : this.Id, fn : function (args){

            args.Widget.Configure ();

        }, parameters : {Widget : this}}));

        this.Configure ();

    }

    Configure () {

        this.Canvas.width = this.Dimensions.Width;
        this.Canvas.height = this.Dimensions.Height;

        //configure...

    }

}

export { WLibWidgetCanvas };
