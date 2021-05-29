import { WLibTypes } from "../types.js";
import {WLibWidget, WLibWidgetAlign} from './widget.js';
import {WLibWidgetGrid} from './grid.js';

const WLibWidgetPanelTypes = {
    VERTICAL : 0,
    HORIZONTAL : 1
}

class WLibWidgetPanel extends WLibWidgetGrid{

    constructor (args) {

        let cursor_style = "";

        const handler_size = 6;

        if (args.Type == WLibWidgetPanelTypes.VERTICAL) {
            args['Columns'] = [{Width : 200}, {Width : handler_size}, {Width : undefined}];
            args['Rows'] = [{Height : undefined}];
            cursor_style = "e-resize";
        }else if (args.Type == WLibWidgetPanelTypes.HORIZONTAL) {
            args['Columns'] = [{Width : undefined}];
            args['Rows'] = [{Height : undefined}, {Height : handler_size}, {Height : 200}];
            cursor_style = "n-resize";
        }

        super (args);

        this.Type = args.Type;

        this.Handler = new WLibWidget ({Id : this.Id + '.Handler', Parent : this, className : 'WLibPanelHandler', HAlign : WLibWidgetAlign.CUSTOM, VAlign : WLibWidgetAlign.CUSTOM});

        this.Handler.Body.style.cursor = cursor_style;

        this.Handler.Body.whenMouseOver.Add (new WLibTypes.FunctionItem({fn : function(args){
            args.Widget.Body.className = "WLibPanelHandler_mouse_over";
        }, parameters: {Widget : this.Handler}}));

        this.Handler.Body.whenMouseOut.Add (new WLibTypes.FunctionItem({fn : function(args){
            args.Widget.Body.className = "WLibPanelHandler";
        }, parameters: {Widget : this.Handler}}));

        this.InitPanel ();

    }

    InitPanel () {

        if (this.Type == WLibWidgetPanelTypes.HORIZONTAL) {
            this.Atach({Column : 0, Row : 1, Widget : this.Handler});
        }else if (this.Type == WLibWidgetPanelTypes.VERTICAL) {
            this.Atach({Column : 1, Row : 0, Widget : this.Handler});
        }

    }

}

export {WLibWidgetPanel, WLibWidgetPanelTypes};