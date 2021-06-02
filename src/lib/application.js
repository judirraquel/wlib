class WLibApplication{

    constructor (args) {

        this.Interface = args.Interface ? args.Interface : undefined;

    }

    Configure (){
        this.Interface.Configure ();
    }

}