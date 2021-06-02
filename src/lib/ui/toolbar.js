import { WLibTypes } from "../types.js";
import { WLibWidget, WLibWidgetAlign } from "./widget.js";

class WLibWidgetToolbar extends WLibWidget {
    constructor(args) {

        args['HAling'] = WLibWidgetAlign.CUSTOM;
        args['VAlign'] = WLibWidgetAlign.CUSTOM;

        super(args);

        this.ButtonsSize = 30;
        this.Padding = 4;

        this.Body.className = 'WLibWidgetToolbar';

        this.Buttons = new Array ();
        this.ButtonsRight = new Array ();

    }

    Resize (){
        this.Configure ();
        super.Resize ();
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
