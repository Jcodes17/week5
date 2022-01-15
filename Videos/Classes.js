class Student {
    constructor(firstName , lastName, phoneNumber, grade) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.grade = grade;
    }

    introduce() {
        console.log(`${this.firstName} ${this.lastName} can be reached at ${this.phoneNumber}`);
    }
}

let student1 = new Student ('Tom', 'Sawyer', '6517323324', 'A')
let student2 = new Student ('Jake', 'Adams', '6517325546', 'B')

student1.introduce();
student2.introduce();