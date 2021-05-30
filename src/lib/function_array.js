class FunctionArr{
    constructor () {

        this.Items = new Array ();

    }

    Exists (args) {

        for (let i=0; i<this.Items.length; i++){
            if (this.Items[i].Id == args){
                return true;
            }
        }

        return false;

    }

    GetIndex (args) {

        for (let i=0; i<this.Items.length; i++){
            if (this.Items[i].Id == args){
                return i;
            }
        }

        return -1;

    }

    GetCount (args) {

        let count = 0;

        for (let i=0; i<this.Items.length; i++){
            if (this.Items[i].Id == args){
                count++;
            }
        }

        return count;

    }

    Add (pFn) {
        this.Items.push (pFn);
    }

    Run (args){
        this.Items.forEach (function(current_fn, i) {
            current_fn.Run (args);
        });
    }
}

export {FunctionArr}