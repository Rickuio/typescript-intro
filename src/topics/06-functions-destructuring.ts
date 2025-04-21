
export interface Product {
    description: string;
    price: number;
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'Samsung A1',
    price: 250.0
}

// function taxCalculation( options: TaxCalculationOptions ): [number, number, string] {
// function taxCalculation( {tax, products}: TaxCalculationOptions ): [number, number, string] {
export function taxCalculation( options: TaxCalculationOptions ): [number, number, string] {

    const { tax, products } = options;

    let total = 0;
    products.forEach( ({price}) => {
        total += price;
    });
    let subT = total * tax;
    return [total, subT, 'Pay'];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const result = taxCalculation({
    products: shoppingCart,
    tax,
});

const [total, tx, value] = taxCalculation({
    products: shoppingCart,
    tax: tax,
});

console.log('Total: ', result[0]);
console.log('Tax: ', result[1]);
console.log('Value: ', result[2]);

console.log('Total Des: ' + total);
console.log('Value Tax Des: ' + tx);
console.log('Third value: ' + value);

//export {};