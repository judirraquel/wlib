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
            if (this.Parent.Id == 'root'){
                this.Body = WLibHTMLObject.Get (this.Parent.Id).add({tagName : 'div', Id : this.GetHTMLId(args.Id)});
                this.Body.className = "WLibWidget";
            }else {
                this.Body = WLibHTMLObject.Get (this.GetHTMLId(this.Parent.Id)).add({tagName : 'div', Id : this.GetHTMLId(args.Id)});
                this.Body.className = "WLibWidget";
            }
            
        }else {
            this.Body = WLibHTMLObject.Get (args.Id);
            this.Body.className = "WLibRoot";
            this.Body.style.margin = '0px';
            this.Body.style.padding = '0px';
        }

        if(args.className){
            this.Body.className = args.className;
        }

        this.Body.style.position = 'absolute';
        this.Body.style.overflow = 'hidden';
        this.Body.style.boxSizing = 'border-box';
        
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

        this.Parent.whenResize.Add (new WLibTypes.FunctionItem ({Id : this.Id, fn : function (args){

            args.Widget.InitPosition ();

        }, parameters : {Widget : this}}));

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

            this.setX (this.Position.Left);
            this.setY (this.Position.Top);
            this.setWH ({Width : this.Dimensions.Width, Height : this.Dimensions.Height});

            this.handler = setInterval(function (args){
                args.Widget.setWH ({Width : args.Widget.Dimensions.Width, Height : args.Widget.Dimensions.Height});
                clearInterval (args.Widget.handler);
            }, 100, {Widget : this});
            
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
                }else if (this.HAlign == WLibWidgetAlign.END){
                    this.Position.Left = this.Parent.Dimensions.Width - this.Dimensions.Width;
                }else if (this.HAlign == WLibWidgetAlign.CENTER){
                    this.Position.Left = parseInt((this.Parent.Dimensions.Width / 2) - (this.Dimensions.Width / 2));
                }
    
            }

            if (this.VAlign != WLibWidgetAlign.CUSTOM){
    
                if (this.VAlign == WLibWidgetAlign.FILL){
                    this.Position.Top = 0;
                    this.Dimensions.Height = this.Parent.Dimensions.Height;
                }else if (this.VAlign == WLibWidgetAlign.START){
                    this.Position.Top = 0;
                }else if (this.VAlign == WLibWidgetAlign.END){
                    this.Position.Top = this.Parent.Dimensions.Height - this.Dimensions.Height;
                }else if (this.VAlign == WLibWidgetAlign.CENTER){
                    this.Position.Top = parseInt((this.Parent.Dimensions.Height / 2) - (this.Dimensions.Height / 2));
                }
    
            }

            this.setX (this.Position.Left);
            this.setY (this.Position.Top);
            this.setWH ({Width : this.Dimensions.Width, Height : this.Dimensions.Height});

        }
        
    }

    GetHTMLId (args){
        return (this.HTMLPrefix + args);
    }

    setVisible (args) {
        this.Visible = args;
    }

    Display (){

    }

    Resize (args) {
        this.whenResize.Run ();
    }

    Add (args) {
        this.Childs.push (args);
    }

    setX (args) {
        this.Position.Left = args;
        this.Body.setX (args);
    }

    setY (args) {
        this.Position.Top = args;
        this.Body.setY (args);
    }

    setW (args) {
        this.Dimensions.Width = args;
        this.Body.setW (args);
        this.Resize ();
    }

    setH (args) {
        this.Dimensions.Height = args;
        this.Body.setH (args);
        this.Resize ();
    }

    setWH (args) {
        this.Dimensions.Width = args.Width;
        this.Body.setW (args.Width);
        this.Dimensions.Height = args.Height;
        this.Body.setH (args.Height);
        this.Resize ();
    }

}

export {WLibWidget, WLibWidgetAlign};