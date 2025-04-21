
const skills:string[] = ['Bash', 'Counter', 'Healing'];

interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string; 
}

const player1: Character = {
    name: 'Uio',
    hp: 95,
    skills: ['Bash', 'Counter', 'Healing']
};

player1.hometown = 'Rivendell';

console.table(player1);
export {};