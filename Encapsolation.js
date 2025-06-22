console.log("task 1 Encapsolation")
//  task 1 Encapsolation

class student {
    // private
    #marks = 0;
    //checking
    setmarks(marks) {
        if (marks > 0) {
            this.#marks = marks;
        }
    }
    //return marks
    getmarks() {
        return this.#marks;
    }

}
let Student = new student();
Student.setmarks(300);
console.log(Student.getmarks());

console.log("task 2  Abstraction")
// task 2  Abstraction
class WashingMachine {
    // Run the private methods  //
    start() {
        console.log("Machine is started")
        this.#fillWater();
        this.#WashCloth();
    }
    // Private Methods //
    #fillWater() {
        console.log("fil water in Waching Machine");
    }
    // Private Methods //

    #WashCloth() {
        console.log("Washiong clothes");
    }


}

let WM = new WashingMachine();
//call the onj 
WM.start()

console.log("task 3  Polomorphism")
//task 3  Polomorphism

//Paarent Class is Animal
class Animal {
    //Animal speaking and different animal have different speaking
    speak() {
        console.log("animal is speaking")
    }
}
class dog extends Animal {
    //dog speak
    speak() {
        console.log("Dog is barking")
    }
}

let Dog = new dog();
Dog.speak();

class cat extends Animal {
    // cat speak
    speak() {
        console.log("cat is mioing")
    }

}
let Cat = new cat();
Cat.speak();





















