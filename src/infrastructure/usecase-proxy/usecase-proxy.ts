export class UsecaseProxy<T>{
    constructor(private readonly usecase: T){}

    getInstace(){
        return this.usecase
    }
}