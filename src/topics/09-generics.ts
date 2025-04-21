
export function whatsMyType<T>( argument: T ): T {
    return argument;
}

const soyString = whatsMyType<string>('Hello');
const soyNumber = whatsMyType<number>(200);
const soyArray = whatsMyType<string[]>(['I','am','stack']);

console.log(soyString.toUpperCase());
console.log(soyNumber.toFixed());
console.log(soyArray.join('-'));
