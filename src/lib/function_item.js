class FunctionIt{
    constructor (args) {
        this.Id = args.Id ? args.Id : undefined;
        this.fn = args.fn ? args.fn : function(){};
        this.parameters = args.parameters ? args.parameters : {};
    }

    Run (args){

        let params = this.parameters;

        if (args){
            params['Event'] = args.Event ? args.Event : undefined;
        }

        this.fn (params);

    }
}

export {FunctionIt}