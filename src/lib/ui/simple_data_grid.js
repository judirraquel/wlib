import { WLib } from "../../wlib.core.js";
import { WLibTypes } from "../types.js";
import { WLibWidgetButton, WLibWidgetButtonTypes } from "./button.js";
import { WLibWidgetGrid } from "./grid.js";
import { WLibWidgetVerticalScroll } from "./vertical_scroll.js";
import { WLibWidget, WLibWidgetAlign } from "./widget.js";

class WLibWidgetSimpleDataGrid extends WLibWidget {
    constructor(args) {

        super(args);

        this.HeaderHeight = 20;

        this.BaseClassName = "WLibWidgetSimpleDataGrid";

        this.Body.className = this.BaseClassName;

        this.Columns = args.Columns;

        this.Layout = new WLibWidgetGrid({
            Id: this.Id + ".Layout",
            Parent: this,
            HAlign: WLibWidgetAlign.FILL,
            VAlign: WLibWidgetAlign.FILL,
            Columns: [{ Width: undefined }],
            Rows: [{ Height: this.HeaderHeight }, { Height: undefined }],
        });

        this.ColumnsHeader = new WLibWidgetGrid({
            Id: this.Id + ".Layout.ColumnsHeader",
            Parent: this.Layout,
            HAlign: WLibWidgetAlign.FILL,
            VAlign: WLibWidgetAlign.FILL,
            Columns: args.Columns,
            Rows: [{ Height: this.HeaderHeight }],
        });

        this.ButtonsHeader = new Array ();

        this.CreateHeaders ();

        this.VScroll = new WLibWidgetVerticalScroll ({Id: '.VScroll', Parent : this.Layout, HAlign : WLibWidgetAlign.CUSTOM, VAlign : WLibWidgetAlign.CUSTOM});

        this.Layout.Atach ({Column : 0, Row : 0, Widget : this.ColumnsHeader});
        this.Layout.Atach ({Column : 0, Row : 1, Widget : this.VScroll});

        this.Configure();

        /*this.Parent.whenResize.Add(new WLibTypes.FunctionItem({Id: this.Id,fn: function (args) {
            args.Widget.Configure();
        },parameters: { Widget: this },}));*/
    }

    Configure() {

        this.Layout.Configure ();
        this.VScroll.Configure ();

    }

    Resize () {
        
        this.Configure ();
        super.Resize ();
        
    }

    CreateHeaders () {

        for (let i = 0; i < this.Columns.length; i++){

            let btn = new WLibWidgetButton({
                Id: this.Id + ".btn.Header." + i,
                Parent: this.ColumnsHeader,
                Text: this.Columns[i].Header,
                HAlign: WLibWidgetAlign.CUSTOM,
                VAlign: WLibWidgetAlign.CUSTOM,
                Height: this.HeaderHeight,
                Type : WLibWidgetButtonTypes.HEADER
            });

            this.ColumnsHeader.Atach ({Row : 0, Column : i, Widget : btn});

            this.ButtonsHeader.push (btn);

        }

    }

}

export { WLibWidgetSimpleDataGrid };
