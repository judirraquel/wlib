import { WLib } from "./wlib.core.js";
import { WLibWidgetAlign } from "./lib/ui/widget.js";
import { WLibWidgetLabel } from "./lib/ui/label.js";
import { WLibWidgetGrid } from "./lib/ui/grid.js";

let test_grid = new WLibWidgetGrid ({
    Id: "MyGrid",
    Parent: WLib.Root,
    HAlign: WLibWidgetAlign.FILL,
    VAlign: WLibWidgetAlign.FILL,
    Columns : [{ Width: 100 }, { Width: undefined }, { Width: 100 }],
    Rows : [{ Height: 25 }, { Height: undefined }, { Height: 25 }]
});

let lbl1 = new WLibWidgetLabel({
    Id: "MyLabel1",
    Text: "Columna 0, Fila 0",
    Parent: test_grid,
    HAlign: WLibWidgetAlign.CUSTOM,
    VAlign: WLibWidgetAlign.CUSTOM
});

let lbl2 = new WLibWidgetLabel({
    Id: "MyLabel2",
    Text: "Column : 1, Row : 0",
    Parent: test_grid,
    HAlign: WLibWidgetAlign.CUSTOM,
    VAlign: WLibWidgetAlign.CUSTOM
});

let lbl3 = new WLibWidgetLabel({
    Id: "MyLabel3",
    Text: "Column : 0, Row : 1",
    Parent: test_grid,
    HAlign: WLibWidgetAlign.CUSTOM,
    VAlign: WLibWidgetAlign.CUSTOM
});

let lbl4 = new WLibWidgetLabel({
    Id: "MyLabel4",
    Text: "Column : 1, Row : 1",
    Parent: test_grid,
    HAlign: WLibWidgetAlign.CUSTOM,
    VAlign: WLibWidgetAlign.CUSTOM
});

let lbl5 = new WLibWidgetLabel({
    Id: "MyLabel5",
    Text: "Column : 0, Row : 2",
    Parent: test_grid,
    HAlign: WLibWidgetAlign.CUSTOM,
    VAlign: WLibWidgetAlign.CUSTOM
});

let lbl6 = new WLibWidgetLabel({
    Id: "MyLabel6",
    Text: "Column : 1, Row : 2",
    Parent: test_grid,
    HAlign: WLibWidgetAlign.CUSTOM,
    VAlign: WLibWidgetAlign.CUSTOM
});

let lblA = new WLibWidgetLabel({
    Id: "MyLabelA",
    Text: "Column : 2, Row : 0",
    Parent: test_grid,
    HAlign: WLibWidgetAlign.CUSTOM,
    VAlign: WLibWidgetAlign.CUSTOM
});

let lblB = new WLibWidgetLabel({
    Id: "MyLabelB",
    Text: "Column : 2, Row : 1",
    Parent: test_grid,
    HAlign: WLibWidgetAlign.CUSTOM,
    VAlign: WLibWidgetAlign.CUSTOM
});

let lblC = new WLibWidgetLabel({
    Id: "MyLabelC",
    Text: "Column : 2, Row : 2",
    Parent: test_grid,
    HAlign: WLibWidgetAlign.CUSTOM,
    VAlign: WLibWidgetAlign.CUSTOM
});

test_grid.Atach ({Column : 0, Row : 0, Widget : lbl1});
test_grid.Atach ({Column : 1, Row : 0, Widget : lbl2});
test_grid.Atach ({Column : 2, Row : 0, Widget : lblA});

test_grid.Atach ({Column : 0, Row : 1, Widget : lbl3});
test_grid.Atach ({Column : 1, Row : 1, Widget : lbl4});
test_grid.Atach ({Column : 2, Row : 1, Widget : lblB});

test_grid.Atach ({Column : 0, Row : 2, Widget : lbl5});
test_grid.Atach ({Column : 1, Row : 2, Widget : lbl6});
test_grid.Atach ({Column : 2, Row : 2, Widget : lblC});

test_grid.Display ();

console.log(WLib.Root);
console.log(test_grid);

WLib.LoadTheme ('themes/dark.css');
