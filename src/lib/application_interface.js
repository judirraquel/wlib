import { WLib } from "../wlib.core.js";
import { WLibWidgetGrid } from "./ui/grid.js";
import { WLibWidgetAlign } from "./ui/widget.js";

class WLibApplicationInterface extends WLibWidgetGrid{

    constructor (args) {

        //Los parametros Column and Rows deben venir en args.

        args['Id'] = 'MainLayout';
        args['Parent'] = WLib.Root;
        args['HAling'] = WLibWidgetAlign.FILL;
        args['VAlign'] = WLibWidgetAlign.FILL;

        super(args);

        this.Root = WLib.Root;
        this.Theme = args.Theme ? args.Theme : "themes/dark/theme.css";
        this.Fonts = args.Fonts ? args.Fonts : "font/";
        this.Icons = args.Icons ? args.Icons : "icons/icons.css";

        WLib.LoadTheme(this.Theme);
        WLib.LoadFonts(this.Fonts);
        WLib.LoadIcons(this.Icons);

    }

    Configure (){

        super.Configure();

    }

}

export { WLibApplicationInterface };