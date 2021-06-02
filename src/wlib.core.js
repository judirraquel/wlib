import { WLibTypes } from "./lib/types.js";
import { WLibPage } from "./lib/page.js";
import { WLibHTMLObject } from "./lib/html_object.js";
import { WLibWidget } from "./lib/ui/widget.js";

class WebLib {

    constructor () {

        this.About = {
            Version : '1.0',
            Author : 'Horacio Daniel Ros',
            EMail : 'horaciodrs@gmail.com'
        };

        this.Mouse = {
            X : undefined,
            Y : undefined
        }

        this.Types = WLibTypes;
        this.Page = new WLibPage ();

        this.Root = new WLibWidget({Id : 'root', Parent : this.Page});

        

    }

    Get (obj) {
        return WLibHTMLObject.Get (obj);
    }

    Init () {

        window.onload = function() {
            WLib.Page.whenLoad.Run();
        };

        window.onresize = function () {
            WLib.Page.whenResize.Run();
        };

        this.Root.Body.whenMouseMove.Add (new WLibTypes.FunctionItem ({fn : function (args){

            var auxEvent = args.Event ? args.Event : window.event;
	        WLib.Mouse.X = auxEvent.clientX;
	        WLib.Mouse.Y = auxEvent.clientY;

        }, parameters : {}}));

    }

    LoadFonts (args) {

        //const Font = new FontFace('Roboto', 'url(font/Roboto-Regular.ttf)');
        //const FontBold = new FontFace('Roboto', 'url(font/Roboto-Bold.ttf');

        const Font = new FontFace('Roboto', 'url('+args+'Roboto-Regular.ttf)');
        const FontBold = new FontFace('Roboto', 'url('+args+'Roboto-Bold.ttf');

        FontBold.weight = 'bold';

        Font.load().then(function(loadedFont) {
            document.fonts.add(loadedFont)
            WLib.Root.Body.style.fontFamily = '"Roboto"';
        });

        FontBold.load().then(function(loadedFont) {
            document.fonts.add(loadedFont)
        });

    }

    LoadIcons (args) {
        let head = document.getElementsByTagName('HEAD')[0]; 
        let link = document.createElement('link');
        link.rel = 'stylesheet'; 
        link.type = 'text/css';
        link.href = args;//"icons/icons.css"; 
        head.appendChild(link); 
    }

    LoadTheme (args) {

        let head = document.getElementsByTagName('HEAD')[0]; 
        let link = document.createElement('link');
        link.rel = 'stylesheet'; 
        link.type = 'text/css';
        link.href = args; 
        head.appendChild(link); 

    }

}

let WLib = new WebLib ();

WLib.Init ();

export {WLib};