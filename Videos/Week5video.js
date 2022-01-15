class food {
    constructor(type, cuisine) {
        this.type = type
        this.cuisine = cuisine
    }

    toString() {
        return this.type + " is " + this.cuisine;
    }
}

const eggs = new food("breakfast", "american");


console.log(toString);