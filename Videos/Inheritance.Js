class NotificationSender {
    constructor(status) {
        this.status = status;
    }
    sendNotification(notification) {
        console.log ('Sending: ' + notification);
    }

    findUserWithStatus(status) {
        let users = getUsers(status);
        return users;
    }

}



class PromotionSender extends NotificationSender {
    constructor(status) {
        super(status);

    }
 

    calculationDiscount(status) {
        if (status === 'Gold') {
            return .3;
        } else if (status === 'Silver') {
            return .15;
        }
        return 0;
    }
}


class CollectionsSender extends NotificationSender{    //extends is used to inherit from another class
    constructor(status) {
        super(status);                                 // super refers to parents and calls the whole constructor
    }


    calculateFee(status) {
        if (status === 'Overdue') {
            return 10;
        } else if (status === 'Deliquent'){
            return 25;
        }
        return 5;
    }
}

let collectionsSender = new CollectionsSender('Overdue');
collectionsSender.sendNotification('this is a test collections notification');