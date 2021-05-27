class FunctionIt{
    constructor (args) {
        this.id = args.id ? args.id : undefined;
        this.fn = args.fn ? args.fn : function(){};
        this.parameters = args.parameters ? args.parameters : {};
    }

    Run (){
        this.fn (this.parameters);
    }
}

export {FunctionIt}