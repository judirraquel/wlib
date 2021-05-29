class FunctionIt{
    constructor (args) {
        this.Id = args.Id ? args.Id : undefined;
        this.fn = args.fn ? args.fn : function(){};
        this.parameters = args.parameters ? args.parameters : {};
    }

    Run (){
        this.fn (this.parameters);
    }
}

export {FunctionIt}