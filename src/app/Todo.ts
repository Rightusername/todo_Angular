export class Todo{
    public deleted: String = 'inactive';
    public newItem: String = 'inactive';
    constructor(public title: String, public completed: Boolean = false){

    }
}
