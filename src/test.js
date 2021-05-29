import { WLib } from "./wlib.core.js";
import { WLibWidgetAlign } from "./lib/ui/widget.js";
import { WLibWidgetPanel, WLibWidgetPanelTypes } from "./lib/ui/panel.js";
import { WLibWidgetGrid } from "./lib/ui/grid.js";

WLib.LoadTheme ('themes/dark/theme.css');

let main_layout = new WLibWidgetGrid({
    Id: "MainLayout",
    Parent: WLib.Root,
    HAlign : WLibWidgetAlign.FILL,
    VAlign : WLibWidgetAlign.FILL,
    Columns : [{Width : undefined}],
    Rows : [{Height : 60}, {Height : undefined}, {Height : 40}]
});

let panel1 = new WLibWidgetPanel ({
    Id: "MainPanel",
    Parent: main_layout,
    Type: WLibWidgetPanelTypes.HORIZONTAL,
    HAlign : WLibWidgetAlign.CUSTOM,
    VAlign : WLibWidgetAlign.CUSTOM
});

let panel2 = new WLibWidgetPanel ({
    Id: "MainPanel2",
    Parent: panel1,
    Type: WLibWidgetPanelTypes.VERTICAL,
    HAlign : WLibWidgetAlign.CUSTOM,
    VAlign : WLibWidgetAlign.CUSTOM,
});

main_layout.Atach({Column : 0, Row : 1, Widget : panel1});
panel1.Atach ({Row: 0, Column : 0, Widget : panel2});

main_layout.Configure ();
panel1.Configure ();
panel2.Configure ();


