import { WLibTypes } from "./types.js";

function WLibExtendEvents (obj) {

    if(!obj.whenResize) obj.whenResize = new WLibTypes.FunctionArray();
    if(!obj.whenScroll) obj.whenScroll = new WLibTypes.FunctionArray();
    if(!obj.whenClick) obj.whenClick = new WLibTypes.FunctionArray();              //IMPLEMENTADO
    if(!obj.whenFocus) obj.whenFocus = new WLibTypes.FunctionArray();              //IMPLEMENTADO
    if(!obj.whenMouseMove) obj.whenMouseMove = new WLibTypes.FunctionArray();      //IMPLEMENTADO
    if(!obj.whenMouseOver) obj.whenMouseOver = new WLibTypes.FunctionArray();      //IMPLEMENTADO
    if(!obj.whenMouseOut) obj.whenMouseOut = new WLibTypes.FunctionArray();        //IMPLEMENTADO
    if(!obj.whenMouseDown) obj.whenMouseDown = new WLibTypes.FunctionArray();      //IMPLEMENTADO
    if(!obj.whenMouseUp) obj.whenMouseUp = new WLibTypes.FunctionArray();          //IMPLEMENTADO
    if(!obj.whenKeyDown) obj.whenKeyDown = new WLibTypes.FunctionArray();          //IMPLEMENTADO
    if(!obj.whenKeyUp) obj.whenKeyUp = new WLibTypes.FunctionArray();              //IMPLEMENTADO
    if(!obj.whenKeyPress) obj.whenKeyPress = new WLibTypes.FunctionArray();        //IMPLEMENTADO
    if(!obj.whenChange) obj.whenChange = new WLibTypes.FunctionArray();
    if(!obj.whenMouseWheel) obj.whenMouseWheel = new WLibTypes.FunctionArray();
    if(!obj.whenRightClick) obj.whenRightClick = new WLibTypes.FunctionArray();

    obj.addEventListener ('click', function (){
        obj.whenClick.Run();
    }, false);

    obj.addEventListener ('focus', function (){
        obj.whenFocus.Run();
    }, false);

    obj.addEventListener ('mousemove', function (ev){
        obj.whenMouseMove.Run({Event : ev});
    }, false);

    obj.addEventListener ('mouseover', function (){
        obj.whenMouseOver.Run();
    }, false);

    obj.addEventListener ('mouseup', function (){
        obj.whenMouseUp.Run();
    }, false);

    obj.addEventListener ('keydown', function (){
        obj.whenKeyDown.Run();
    }, false);

    obj.addEventListener ('keyup', function (){
        obj.whenKeyUp.Run();
    }, false);

    obj.addEventListener ('keypress', function (){
        obj.whenKeyPress.Run();
    }, false);

    obj.addEventListener ('mousedown', function (){
        obj.whenMouseDown.Run();
    }, false);

    obj.addEventListener ('mouseout', function (){
        obj.whenMouseOut.Run();
    }, false);

}

export {WLibExtendEvents}