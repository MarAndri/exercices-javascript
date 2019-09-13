/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
        constructor(name) {
            this.name = name;
        }
    }

    class Dog extends Animal {
        constructor(name) {
            super(name);
        }
        static greeting = "woof";
    }
    class Cat extends Animal {
        constructor(name) {
            super(name);
        }
        static greeting = "meow";
    }

    document.getElementById("run").addEventListener("click", () => {
        let cat1 = new Cat("Archi");
        let dog1 = new Dog("Happy");
        console.log(cat1.sayHello());
        console.log(dog1.sayHello());
    })

})();