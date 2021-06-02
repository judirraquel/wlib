import { WLib } from "../wlib.core.js";
import { WLibWidgetGrid } from "./ui/grid.js";
import { WLibWidgetAlign } from "./ui/widget.js";

class WLibApplicationInterfaz extends WLibWidgetGrid{

    constructor (args) {

        //Los parametros Column and Rows deben venir en args.

        this.Root = WLib.Root;
        this.Theme = args.Theme ? args.Theme : "themes/dark/theme.css";

        args['Id'] = 'MainLayout';
        args['Parent'] = this.Root;
        args['HAling'] = WLibWidgetAlign.FILL;
        args['VAlign'] = WLibWidgetAlign.FILL;

        super(args);

        WLib.LoadTheme(this.Theme);

    }

    Configure (){

        super.Configure();

    }

}

export { WLibApplicationInterfaz };