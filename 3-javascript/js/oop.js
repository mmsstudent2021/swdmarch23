// student object
// name
// gender
// age
// profit ?


// access modifier (public, protected, private)


class Student {


    f = "fff";
    
    
    constructor(name,gender,age){
        // data initialize
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.namePrefix = this.gender === "male" ? "Mr" : "Ms";
        this.fullName = this.namePrefix + " " + this.name;
        this.birthYear = 2023 - this.age;
    }

    introduction(){
        return `My name is ${this.name} and I was born in ${this.birthYear};`;
    }

    learn(){
        return this.name+" can learn ";
    }


    // static property & method

    static a = "aaa";

    static who(){
        return "I'm student";
    }


    // access modifier
    // private property & method

    #x = "xxx";

    #y(){
        return "this is private method y";
    }

    run(){
        return "It will show the private property x "+this.#y();
    }
}

// const st1 = new Student("Mg Mg","male",15);
// console.log(st1.age);
// console.log(st1.#x);
// console.log(st1.run());
// console.log(st1.#y());
// console.log(st1.f);

// console.log(st1);
// overwrite property
// st1.name = "Kyaw Kyaw";

// add property
// st1.pocketMoney = 500;

// property & method access
// console.log(st1.name);
// console.log(st1.age);
// console.log(st1.introduction());
// console.log(st1.learn());

// console.log(Student.who());
// console.log(Student.a);

// console.log(st1);

// console.log(st1.address);

// const st2 = new Student("Su Su","female",16);

// console.log(st2);



// oop concept inheritance

// class One {
//     a = "aa";
//     b = "bb";
//     c = "cc";
// }

// const one = new One;
// console.log(one);

// class Tow extends One {
   
//     d = "dd";
//     e = "ee";
// }

// const two = new Tow;
// console.log(two);


// oop concept encapsulation

class One{

    #x = "xxx";

    // getter & setter

    getX(){
        // extra step
        return this.#x;
    }

    setX(newValue){
        // extra step
        this.#x = newValue;
    }

}

const one = new One;
// overwrite
one.setX("aaa")

// access
console.log(one.getX());