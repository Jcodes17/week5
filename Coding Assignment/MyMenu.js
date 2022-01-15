class food {
    constructor(type, calories) {
        this.type = type;
        this.calories = calories;
        this.newFoods = [];
    
    }
}


class Menu {
    constructor(){
        this.foodlist = []
    }

    start() {
        let selection = this.mainMenuOptions();
        while (selection !=0) {
            switch(selection) {
                case "1":
                    this.addFood();
                    break;
                case "2":
                    this.deleteFood();
                    break;
                case "3":
                    this.viewFood();
                    break;
                    default:
                        selection = 0;
                
            }
            selection = this.mainMenuOptions();
        }
    }

    mainMenuOptions() {
        return prompt(`
    1) Add Food
    2) Delete Food
    3) View Food`
        );
    }

    addFood() {
        let name = prompt ('Enter new food');
        this.foodlist.push(new food)
    }

    deleteFood() {
        let index = prompt ('Which food do you want to delete?');
        if (index > -1 && index < this.foodlist.lengh) {
            this.foodlist.splice(index, 1);
        }

    
    }

    viewFood() {
        let view = prompt ('Which food do you want to view')
    }
}












let menu = new Menu();
menu.start();

