// Exercise 1.4
// ------------
// Creating a Cat class - Part 4

// A) So far so good. Our Cat can modify its properties but we don't have a way to lower them...
// Write a wait method that accepts a minutes parameter and slowly lowers or increases the properties.

class Cat {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
        this.tiredness = 150;
        this.hunger = 50;
        this.loneliness = 60;
        this.happiness = 0;
    }

    sleep = (hours) => {
        this.tiredness -= (hours * 5);
        this.happiness += 100;
    }

    eat = (grams) => {
        this.hunger -= (grams / 5);
        this.happiness += 30;
    }

    play = (minutes) => {
        this.loneliness -= (minutes * 3);
        this.happiness += 50;
    }
    
    wait = (minutes) => {
        this.tiredness += 50;
        this.hunger += 50;
        this.loneliness += 50;
        this.happiness -= 50;
    }
}

let boots = new Cat("Boots", "Siamese");
boots.sleep(5);
boots.eat(25);
boots.play(20);

// B) Make Boots wait 20 minutes and call then console.log(boots);

boots.wait(20);
console.log(boots);