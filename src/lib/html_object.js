import { WLibExtendEvents } from "./events.js";

class WLibHTMLObject {

    constructor () {

    }

    static Get (obj) {

        if(typeof(obj) == 'object'){
            return WLibHTMLObject.Extend(obj);
        }

        if(typeof(obj) == 'string'){
            return WLibHTMLObject.Extend(document.getElementById(obj));
        }

        return undefined;

    }

    static Extend (obj) {

        if(!obj) return undefined;

        if(obj.Extended){
            return obj;
        }

        WLibExtendEvents (obj);

        obj.html = function(html){
            this.innerHTML = html;
            //this.whenResize.Run();
        };

        obj.isVisible = function() {
            if(this.style.display != 'none') {
                return true;
            }
            return false;
        };

        obj.display = function() {
            this.style.display = '';
        };

        obj.hide = function() {
            this.style.display = 'none';
        };

        obj.setX = function(px){
            px = parseInt(px);
            obj.iLeft = px;
            obj.style.left = px + 'px';
        };

        obj.setY = function(py) {
            py = parseInt(py);
            obj.iTop = py;
            obj.style.top = py + 'px';
        };

        obj.setW = function(pw) {
            pw = parseInt(pw);
            if(parseInt(pw) < 1) return;
            obj.iWidth = pw;
            obj.style.width = pw + 'px';
            //obj.whenResize.Run();
        };

        obj.setH = function(ph) {
            ph = parseInt(ph);
            if(parseInt(ph) < 1) return;
            obj.iHeight = ph;
            obj.style.height = ph + 'px';
            //obj.whenResize.Run();
        };

        obj.enableselection = function() {
            obj.onmousedown = new Function("return true");
            obj.onselectstart = new Function("return true");
        };

        obj.disableselection = function() {
            obj.onmousedown = new Function("return false;");
            obj.onselectstart = new Function("return false;");
        };

        obj.add = function(args){

            if(!args.Id){return undefined;}
            if(!args.tagName){return undefined;}

            let newElement = document.createElement(args.tagName);

            newElement.id = args.Id;

            obj.appendChild(newElement);

            return WLibHTMLObject.Get(args.Id);

        };

        obj.Extended = true;

        return obj;

    }
}

export {WLibHTMLObject};