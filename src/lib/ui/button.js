import { WLibTypes } from "../types.js";
import { WLibWidget } from "./widget.js";

const WLibWidgetButtonTypes = {
    PRIMARY : 0,
    SECONDARY : 1,
    DANGER : 2
}

class WLibWidgetButton extends WLibWidget {

    constructor(args) {

        super(args);

        this.Type = args.Type;

        this.Icon = args.Icon ? args.Icon : "";
        this.Text = args.Text ? args.Text : "";

        this.BaseClassName = "WLibWidgetButton";

        if(this.Type == WLibWidgetButtonTypes.PRIMARY){
            this.BaseClassName += "Primary";
        }else if(this.Type == WLibWidgetButtonTypes.SECONDARY){
            this.BaseClassName += "Secondary";
        }else if(this.Type == WLibWidgetButtonTypes.DANGER){
            this.BaseClassName += "Danger";
        }

        this.Body.className = this.BaseClassName;

        this.setText(args.Text);

        this.Body.whenMouseOver.Add (new WLibTypes.FunctionItem({fn : function(args){
            args.Widget.Body.className = args.Widget.BaseClassName + "_mouse_over";
        }, parameters: {Widget : this}}));

        this.Body.whenMouseOut.Add (new WLibTypes.FunctionItem({fn : function(args){
            args.Widget.Body.className = args.Widget.BaseClassName;
        }, parameters: {Widget : this}}));

        this.whenResize.Add (new WLibTypes.FunctionItem({Id : this.Id, fn : function(args){
            args.Widget.Body.style.lineHeight = args.Widget.Dimensions.Height + 'px';
        }, parameters: {Widget : this}}));

    }

    setText(args) {

        this.Text = args;

        let html = '';

        if (this.Icon != ""){
            html += '<div class="material-icons  md-18" style="margin-right: 5px; position: relative; top: 4px;">' + this.Icon + '</div>';
        }
        
        if (this.Text != ""){
            html += '<span>' + this.Text + '</span>';
        }

        

        this.Body.html(html);
        this.Body.style.fontSize = 'small';
    }

    getText() {
        return this.Text;
    }
}

export { WLibWidgetButton, WLibWidgetButtonTypes };