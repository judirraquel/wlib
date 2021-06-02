import { WLib } from "./wlib.core.js";
import { WLibWidgetAlign } from "./lib/ui/widget.js";
import { WLibWidgetPanel, WLibWidgetPanelTypes } from "./lib/ui/panel.js";
import { WLibWidgetGrid } from "./lib/ui/grid.js";
import { WLibWidgetToolbar } from "./lib/ui/toolbar.js";
import { WLibWidgetButton, WLibWidgetButtonTypes } from "./lib/ui/button.js";
import { WLibWidgetCanvas } from "./lib/ui/canvas.js";
import { WLibWidgetVerticalScroll } from "./lib/ui/vertical_scroll.js";
import { WLibWidgetSimpleDataGrid } from "./lib/ui/simple_data_grid.js";

WLib.LoadTheme("themes/dark/theme.css");
WLib.LoadIcons("icons/icons.css");
WLib.LoadFonts("font/");

let main_layout = new WLibWidgetGrid({
    Id: "MainLayout",
    Parent: WLib.Root,
    HAlign: WLibWidgetAlign.FILL,
    VAlign: WLibWidgetAlign.FILL,
    Columns: [{ Width: undefined }],
    Rows: [{ Height: 40 }, { Height: undefined }, { Height: 25 }],
});

let toolbar = new WLibWidgetToolbar({ Id: "Toolbar", Parent: main_layout });

let btn0 = new WLibWidgetButton({
    Id: "btn0",
    Parent: toolbar,
    Icon: "pets",
    Text: "TradeSim",
    HAlign: WLibWidgetAlign.CUSTOM,
    VAlign: WLibWidgetAlign.CUSTOM,
    Width: 120,
    Height: 30,
    Type : WLibWidgetButtonTypes.PLAIN
});

let btn1 = new WLibWidgetButton({
    Id: "btn1",
    Parent: toolbar,
    Icon: "timeline",
    HAlign: WLibWidgetAlign.CUSTOM,
    VAlign: WLibWidgetAlign.CUSTOM,
    Width: 30,
    Height: 30,
    Type : WLibWidgetButtonTypes.TOOLBAR
});

let btn2 = new WLibWidgetButton({
    Id: "btn2",
    Parent: toolbar,
    Icon: "save",
    HAlign: WLibWidgetAlign.CUSTOM,
    VAlign: WLibWidgetAlign.CUSTOM,
    Width: 30,
    Height: 30,
    Type : WLibWidgetButtonTypes.TOOLBAR
});

let btnBack = new WLibWidgetButton({
    Id: "btnBack",
    Parent: toolbar,
    Icon: "fast_rewind",
    HAlign: WLibWidgetAlign.CUSTOM,
    VAlign: WLibWidgetAlign.CUSTOM,
    Width: 30,
    Height: 30,
    Type : WLibWidgetButtonTypes.TOOLBAR
});

let btnPlay = new WLibWidgetButton({
    Id: "btnPlay",
    Parent: toolbar,
    Icon: "play_arrow",
    HAlign: WLibWidgetAlign.CUSTOM,
    VAlign: WLibWidgetAlign.CUSTOM,
    Width: 30,
    Height: 30,
    Type : WLibWidgetButtonTypes.PRIMARY
});

let btnForward = new WLibWidgetButton({
    Id: "btnForward",
    Parent: toolbar,
    Icon: "fast_forward",
    HAlign: WLibWidgetAlign.CUSTOM,
    VAlign: WLibWidgetAlign.CUSTOM,
    Width: 30,
    Height: 30,
    Type : WLibWidgetButtonTypes.TOOLBAR
});

let btnClose = new WLibWidgetButton({
    Id: "btnClose",
    Parent: toolbar,
    Icon: "clear",
    HAlign: WLibWidgetAlign.CUSTOM,
    VAlign: WLibWidgetAlign.CUSTOM,
    Width: 30,
    Height: 30,
    Type : WLibWidgetButtonTypes.PLAIN
});

let btnMax = new WLibWidgetButton({
    Id: "btnMax",
    Parent: toolbar,
    Icon: "crop_square",
    HAlign: WLibWidgetAlign.CUSTOM,
    VAlign: WLibWidgetAlign.CUSTOM,
    Width: 30,
    Height: 30,
    Type : WLibWidgetButtonTypes.PLAIN
});

let btnMin = new WLibWidgetButton({
    Id: "btnMin",
    Parent: toolbar,
    Icon: "remove",
    HAlign: WLibWidgetAlign.CUSTOM,
    VAlign: WLibWidgetAlign.CUSTOM,
    Width: 30,
    Height: 30,
    Type : WLibWidgetButtonTypes.PLAIN
});

let btnDibujo = new WLibWidgetButton({
    Id: "btnDibujo",
    Parent: toolbar,
    Icon: "mode_edit",
    HAlign: WLibWidgetAlign.CUSTOM,
    VAlign: WLibWidgetAlign.CUSTOM,
    Width: 30,
    Height: 30,
    Type : WLibWidgetButtonTypes.TOOLBAR
});

let btnIndicador = new WLibWidgetButton({
    Id: "btnIndicador",
    Parent: toolbar,
    Icon: "microwave",
    HAlign: WLibWidgetAlign.CUSTOM,
    VAlign: WLibWidgetAlign.CUSTOM,
    Width: 30,
    Height: 30,
    Type : WLibWidgetButtonTypes.TOOLBAR
});

let btnReporte = new WLibWidgetButton({
    Id: "btnReporte",
    Parent: toolbar,
    Icon: "bar_chart",
    HAlign: WLibWidgetAlign.CUSTOM,
    VAlign: WLibWidgetAlign.CUSTOM,
    Width: 30,
    Height: 30,
    Type : WLibWidgetButtonTypes.TOOLBAR
});

//indicadores: microwave
//estadisticas: bar_chart
//dibujos: mode_edit / category
//config: miscellaneous_services / construction
//notificaciones: notifications_none
//account: person / account_box

let btnConfig = new WLibWidgetButton({
    Id: "btnConfig",
    Parent: toolbar,
    Icon: "miscellaneous_services",
    HAlign: WLibWidgetAlign.CUSTOM,
    VAlign: WLibWidgetAlign.CUSTOM,
    Width: 30,
    Height: 30,
    Type : WLibWidgetButtonTypes.PLAIN
});

let btnAccount = new WLibWidgetButton({
    Id: "btnAccount",
    Parent: toolbar,
    Icon: "person",
    HAlign: WLibWidgetAlign.CUSTOM,
    VAlign: WLibWidgetAlign.CUSTOM,
    Width: 30,
    Height: 30,
    Type : WLibWidgetButtonTypes.PLAIN
});

toolbar.AddButton(btn0);
toolbar.AddButton(btn1);
toolbar.AddButton(btn2);
toolbar.AddButton(btnBack);
toolbar.AddButton(btnPlay);
toolbar.AddButton(btnForward);
toolbar.AddButton(btnDibujo);
toolbar.AddButton(btnIndicador);
toolbar.AddButton(btnReporte);

toolbar.AddButtonRight(btnClose);
toolbar.AddButtonRight(btnMax);
toolbar.AddButtonRight(btnMin);
toolbar.AddButtonRight(btnConfig);
toolbar.AddButtonRight(btnAccount);

toolbar.Configure();

let panel1 = new WLibWidgetPanel({
    Id: "MainPanel",
    Parent: main_layout,
    Type: WLibWidgetPanelTypes.HORIZONTAL,
    HAlign: WLibWidgetAlign.CUSTOM,
    VAlign: WLibWidgetAlign.CUSTOM,
});

let panel2 = new WLibWidgetPanel({
    Id: "MainPanel2",
    Parent: panel1,
    Type: WLibWidgetPanelTypes.VERTICAL,
    HAlign: WLibWidgetAlign.CUSTOM,
    VAlign: WLibWidgetAlign.CUSTOM,
});

let canvas = new WLibWidgetCanvas ({Id: 'Canvas1', Parent : panel2, HAlign : WLibWidgetAlign.CUSTOM, VAlign : WLibWidgetAlign.CUSTOM});

let SimpleGrid = new WLibWidgetSimpleDataGrid ({
    Id: 'SimpleGrid',
    Parent : panel1,
    HAlign : WLibWidgetAlign.CUSTOM,
    VAlign : WLibWidgetAlign.CUSTOM,
    Columns : [{Header : "Operacion 1" , Width: 200}, {Header : "Obsservaciones" , Width: undefined}, {Header : "Proffit" , Width: 200}]
});

let GridObjects = new WLibWidgetSimpleDataGrid ({
    Id: 'GridObjects',
    Parent : panel2,
    HAlign : WLibWidgetAlign.CUSTOM,
    VAlign : WLibWidgetAlign.CUSTOM,
    Columns : [{Header : "Objects Manager" , Width: undefined}]
});

SimpleGrid.Configure ();
GridObjects.Configure ();

main_layout.Atach({ Column: 0, Row: 1, Widget: panel1 });
main_layout.Atach({ Column: 0, Row: 0, Widget: toolbar });
panel1.Atach({ Row: 0, Column: 0, Widget: panel2 });
panel1.Atach({ Row: 2, Column: 0, Widget: SimpleGrid });

panel2.Atach({ Row: 0, Column: 2, Widget: canvas });
panel2.Atach({ Row: 0, Column: 0, Widget: GridObjects });

main_layout.Configure();
panel1.Configure();
panel2.Configure();
