import { WLibTypes } from "../types.js";
import { WLibWidget } from "./widget.js";

class WLibWidgetToolbar extends WLibWidget {
    constructor(args) {

        super(args);

        this.ButtonsSize = 30;
        this.Padding = 4;

        this.Body.className = 'WLibWidgetToolbar';

        this.Buttons = new Array ();
        this.ButtonsRight = new Array ();

        this.Parent.whenResize.Add (new WLibTypes.FunctionItem ({Id : this.Id, fn : function (args){

            args.Widget.Configure ();

        }, parameters : {Widget : this}}));

    }

    AddButton (args) {

        this.Buttons.push (args);

    }

    AddButtonRight (args) {

        this.ButtonsRight.push (args);

    }

    Configure () {

        let left = this.Padding;

        for (let i=0; i<this.Buttons.length; i++) {

            let btn = this.Buttons[i];

            btn.setX (left);
            btn.setY (this.Padding);
            btn.setW (btn.Dimensions.Width);
            btn.setH (this.ButtonsSize);

            left += btn.Dimensions.Width + this.Padding;

        }

        let right = this.Dimensions.Width - this.Padding - this.ButtonsSize;

        for (let i=0; i<this.ButtonsRight.length; i++) {

            let btn = this.ButtonsRight[i];

            btn.setX (right);
            btn.setY (this.Padding);
            btn.setW (btn.Dimensions.Width);
            btn.setH (this.ButtonsSize);

            right -= btn.Dimensions.Width + this.Padding;

        }

    }

}

export { WLibWidgetToolbar };
