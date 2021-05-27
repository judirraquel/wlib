import { WLib } from "./wlib.core.js";
import { WLibWidget, WLibWidgetAlign } from "./lib/ui/widget.js";

let newfn = new WLib.Types.FunctionItem ({id : 'a', fn : function (args){

    console.log ('Hola, el parametro es:' + args.test);

}, parameters : {test : 12.5}});

let newfn2 = new WLib.Types.FunctionItem ({id : 'b', fn : function (args){

    console.log ('Hola, el parametro de la segunda funcion es:' + args.test);

}, parameters : {test : 21.5}});


//WLib.Get(document).whenMouseUp.add (newfn);
//WLib.Get(document).whenMouseMove.add (newfn2);

let  test_widget = new WLibWidget({Id : 'test_widget', Parent : WLib.Root, HAlign : WLibWidgetAlign.CENTER, VAlign : WLibWidgetAlign.CENTER, Left : 100, Top : 50, Width : 100, Height : 30});

test_widget.Body.html ("hola");

console.log (WLib.Root);
console.log (test_widget);