import { WLib } from "../../wlib.core.js";
import { WLibTypes } from "../types.js";
import { WLibWidget } from "./widget.js";

class WLibWidgetVerticalScroll extends WLibWidget {

    constructor(args) {

        super(args);

        this.BaseClassName = 'WLibWidgetVerticalScroll';
        this.ScrollBarBaseClassName = 'WLibWidgetVerticalScroll_VScrollBar';

        this.Body.className = this.BaseClassName;

        this.ScrollBarWidth = 7;
        this.Padding = 2;

        this.ScrollBody = this.Body.add ({tagName : 'div', Id : this.Id + 'VScrollBar'});

        this.ScrollBody.style.position = 'absolute';
        this.ScrollBody.style.overflow = 'hidden';
        this.ScrollBody.className = this.ScrollBarBaseClassName;

        this.Configure ();

        this.CursorOverScrollBar = false;

        this.Body.whenMouseMove.Add (new WLibTypes.FunctionItem({fn : function(args){            

            if (args.Widget.CursorOverScrollBar == true){
                return;
            }

            let distancia = Math.abs (args.Widget.ScrollBody.getClientRects()[0].left - WLib.Mouse.X);
            if (distancia < args.Widget.ScrollBarWidth*2) {
                args.Widget.ScrollBody.className = args.Widget.ScrollBarBaseClassName + "_Cerca";
            }else{
                args.Widget.ScrollBody.className = args.Widget.ScrollBarBaseClassName;
            }
        }, parameters: {Widget : this}}));

        this.Body.whenMouseOut.Add (new WLibTypes.FunctionItem({fn : function(args){            
            args.Widget.ScrollBody.className = args.Widget.ScrollBarBaseClassName;
            args.Widget.CursorOverScrollBar = false;
        }, parameters: {Widget : this}}));

        this.ScrollBody.whenMouseOver.Add (new WLibTypes.FunctionItem({fn : function(args){
            args.Widget.ScrollBody.className = args.Widget.ScrollBarBaseClassName + "_mouse_over";
            args.Widget.CursorOverScrollBar = true;
        }, parameters: {Widget : this}}));

        this.ScrollBody.whenMouseOut.Add (new WLibTypes.FunctionItem({fn : function(args){
            args.Widget.ScrollBody.className = args.Widget.ScrollBarBaseClassName;
        }, parameters: {Widget : this}}));

        this.Parent.whenResize.Add (new WLibTypes.FunctionItem ({Id : this.Id, fn : function (args){
            args.Widget.Configure ();
        }, parameters : {Widget : this}}));


    }

    Configure () {

        this.ScrollBody.setX (this.Dimensions.Width - this.ScrollBarWidth - this.Padding);
        this.ScrollBody.setY (this.Padding);
        this.ScrollBody.setW (this.ScrollBarWidth);
        this.ScrollBody.setH (this.Dimensions.Height-this.Padding*2);

    }

}

export { WLibWidgetVerticalScroll };
