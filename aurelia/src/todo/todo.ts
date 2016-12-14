export class Todo {
    private description: string;
    private done: boolean;

    constructor(description) {
        this.description = description;
        this.done = false;
    }
}