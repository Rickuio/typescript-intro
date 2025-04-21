
const name:string = 'Uio';
let hpPoints:number | 'FULL' = 95;
const isAlive:boolean = true;

hpPoints = 'FULL'; 

console.log({ name, hpPoints, isAlive });
console.log('Data -> ' + hpPoints);

export {};