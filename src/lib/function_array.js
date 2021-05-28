class FunctionArr{
    constructor () {
        this.Items = new Array ();
    }

    Add (pFn) {
        this.Items.push (pFn);
    }

    Run (){
        this.Items.forEach (function(current_fn, i) {
            current_fn.Run ();
        });
    }
}

export {FunctionArr}