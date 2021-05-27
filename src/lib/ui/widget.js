import { WLibTypes } from "../types.js";
import { WLibHTMLObject } from "../html_object.js";

const WLibWidgetAlign = {
    START : 0,
    CENTER : 1,
    FILL : 2,
    END : 3,
    CUSTOM : 4
}

class WLibWidget {

    constructor (args) {

        this.HTMLPrefix = new String('WLib.HTML.');

        this.Id = args.Id;

        this.Enabled = args.Enabled ? args.Enabled : true;

        this.HAlign = args.HAlign ? args.HAlign : WLibWidgetAlign.FILL;
        this.VAlign = args.VAlign ? args.VAlign : WLibWidgetAlign.FILL;

        //La posiscion y las dimensiones deberian autocaompletarse de acuerdo a los valores de halign y valign y de acuerdo al parent.

        this.Position = {
            Left : args.Left,
            Top : args.Top
        }

        this.Dimensions = {
            Width : args.Width,
            Height : args.Height
        }

        this.Visible = args.Visible ? args.Visible : true;
        this.Parent = args.Parent ? args.Parent : undefined; //Es un objeto del Tipo Widget. No es el elemento HTML.

        if (this.Id != 'root'){
            this.Body = WLibHTMLObject.Get (this.Parent.Id).add({tagName : 'div', Id : this.GetHTMLId(args.Id)});
        }else {
            this.Body = WLibHTMLObject.Get (args.Id);
        }
        
        this.whenResize = new WLibTypes.FunctionArray();
        //this.whenScroll = new WLibTypes.FunctionArray();
        this.whenClick = new WLibTypes.FunctionArray();
        this.whenFocus = new WLibTypes.FunctionArray();
        this.whenMouseMove = new WLibTypes.FunctionArray();
        this.whenMouseOver = new WLibTypes.FunctionArray();
        this.whenMouseOut = new WLibTypes.FunctionArray();
        this.whenMouseDown = new WLibTypes.FunctionArray();
        this.whenMouseUp = new WLibTypes.FunctionArray();
        /*this.whenKeyDown = new WLibTypes.FunctionArray();
        this.whenKeyUp = new WLibTypes.FunctionArray();
        this.whenKeyPress = new WLibTypes.FunctionArray();*/
        this.whenChange = new WLibTypes.FunctionArray();
        this.whenMouseWheel = new WLibTypes.FunctionArray();
        this.whenRightClick = new WLibTypes.FunctionArray();

        this.Init();

    }

    Init () {
        this.InitPosition ();
    }

    InitPosition () {

        if (this.Id == 'root'){

            this.Position.Left = 0;
            this.Position.Top = 0;
            this.Dimensions.Width = window.innerWidth;
            this.Dimensions.Height = window.innerHeight;

            this.Body.style.position = 'absolute';
            this.Body.style.overflow = 'hidden';
            this.Body.style.boxSizing = 'border-box';
            this.Body.style.margin = '0px';
            this.Body.style.padding = '0px';

            this.Body.setX (this.Position.Left);
            this.Body.setY (this.Position.Top);
            this.Body.setW (this.Dimensions.Width);
            this.Body.setH (this.Dimensions.Height);
            
        }else {

            let parentBody = document;

            if (this.Parent) {
                parentBody = this.Parent.Body;
            }
    
            if (this.HAlign != WLibWidgetAlign.CUSTOM){
    
                if (this.HAlign == WLibWidgetAlign.FILL){
                    this.Position.Left = 0;
                    this.Dimensions.Width = this.Parent.Dimensions.Width;
                }else if (this.HAlign == WLibWidgetAlign.START){
                    this.Position.Left = 0;
                    //En este caso dejo el width que se paso al constructor.
                }else if (this.HAlign == WLibWidgetAlign.END){
                    this.Position.Left = this.Parent.Dimensions.Width - this.Dimensions.Width;
                    //En este caso dejo el width que se paso al constructor.
                }else if (this.HAlign == WLibWidgetAlign.CENTER){
                    this.Position.Left = parseInt((this.Parent.Dimensions.Width / 2) - (this.Dimensions.Width / 2));
                    //En este caso dejo el width que se paso al constructor.
                }
    
            }

            if (this.VAlign != WLibWidgetAlign.CUSTOM){
    
                if (this.VAlign == WLibWidgetAlign.FILL){
                    this.Position.Top = 0;
                    this.Dimensions.Height = this.Parent.Dimensions.Height;
                }else if (this.VAlign == WLibWidgetAlign.START){
                    this.Position.Top = 0;
                    //En este caso dejo el width que se paso al constructor.
                }else if (this.VAlign == WLibWidgetAlign.END){
                    this.Position.Top = this.Parent.Dimensions.Height - this.Dimensions.Height;
                    //En este caso dejo el width que se paso al constructor.
                }else if (this.VAlign == WLibWidgetAlign.CENTER){
                    this.Position.Top = parseInt((this.Parent.Dimensions.Height / 2) - (this.Dimensions.Height / 2));
                    //En este caso dejo el width que se paso al constructor.
                }
    
            }

            this.Body.style.position = 'relative';
            this.Body.style.overflow = 'hidden';
            this.Body.style.boxSizing = 'border-box';
            this.Body.style.margin = '0px';
            this.Body.style.padding = '0px';

            this.Body.setX (this.Position.Left);
            this.Body.setY (this.Position.Top);
            this.Body.setW (this.Dimensions.Width);
            this.Body.setH (this.Dimensions.Height);

        }
        
    }

    GetHTMLId (args){
        return (this.HTMLPrefix + args);
    }

    setVisible (arg) {
        this.Visible = arg;
    }

    Display (){

    }

    Resize (args) {

    }

}

export {WLibWidget, WLibWidgetAlign};