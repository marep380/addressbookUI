export class ServiceResponse<T>{

    constructor(data:T){
        this._data = data;
    }

    private _data: T;
    set data(data: T){
        this._data =data;
    }
    
    get data() : T{
        return this._data;
    }

    successfull = true;
    message = "";

}