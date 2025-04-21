
function addNumbers(a: number, b: number): number {
    return a + b;
}

const addNumArrow = (a: number, b: number): string => {
    return `${a + b}`;
}

function multiply(firstNumber:number, secondNumber?:number, base:number = 2) {
    return firstNumber * base;
}

const resultado = addNumbers(5, 10);
const resultado2 = addNumArrow(3, 3);
const resultado3:number = multiply(5);

console.log({resultado});
console.log(addNumArrow(1,1));
console.log({resultado2, resultado3});

// Curar personajes

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {

    character.hp += amount;
}

const player1: Character = {
    name: 'Goku',
    hp: 50,
    showHp() { 
        console.log('Hp:', this.hp);
        console.log(`Puntos de vida ${this.hp}`);
    }
}

player1.showHp();
healCharacter(player1, 20);
player1.showHp();

export{};