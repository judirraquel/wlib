import { WLibWidget } from "./widget.js";

class WLibWidgetLabel extends WLibWidget {
    constructor(args) {

        super(args);

        this.Body.className = 'WLibWidgetLabel';

        this.setText(args.Text ? args.Text : "");
    }

    setText(args) {
        this.Text = args;
        this.Body.html(this.Text);
        
        //this.Body.style.border = 'solid 1px black';
        this.Body.style.fontSize = 'small';
    }

    getText() {
        return this.Text;
    }
}

export { WLibWidgetLabel };
