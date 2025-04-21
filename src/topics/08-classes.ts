
export class Person {

    // public name: string | undefined;
    // private address?: string;

    constructor(
        public firstName: string, 
        public lastName: string, 
        private addr?: string = 'No address'
    ) {}

}

export class Hero extends Person {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
    ){
        super(realName, realName);
    }

}

export class Hero2 {
    
    // public person: Person;
    
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ){
        // this.person = new Person(realName);
    }

}

const tony = new Person('Tony','Stark','Canada');
const batman = new Person('Homero', 'Simpsom');
const hulk = new Hero('Hulk', 40, 'Hombre verde');
const iroman2 = new Hero2('Iroman',45,'Tony', tony);

console.log(tony);
console.log(tony.name);
console.log(batman);
console.log(hulk);
console.log(iroman2);