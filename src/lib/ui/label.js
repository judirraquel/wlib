import { WLibWidget } from "./widget.js";

class WLibWidgetLabel extends WLibWidget {
    constructor(args) {
        super(args);

        this.setText(args.Text ? args.Text : "");
    }

    setText(args) {
        this.Text = args;
        this.Body.html(this.Text);

        this.Body.style.backgroundColor = '#ff9900';
        this.Body.style.border = 'solid 1px black';
    }

    getText() {
        return this.Text;
    }
}

export { WLibWidgetLabel };
