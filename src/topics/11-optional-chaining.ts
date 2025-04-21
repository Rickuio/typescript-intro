
export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name : 'Ricardo',
}

const passenger2: Passenger = {
    name : 'Mary',
    children: ['Vale', 'Julian', 'Megan'],
}

const passenger3: Passenger = {
    name : 'Dany',
    children: ['Ale', 'JR'],
}

const printChildren = (pass: Passenger) => {
    const howMany = pass.children?.length || '0';
    const howMany2 = pass.children!.length;
    console.log(pass.name, howMany);
    return howMany2;
}

printChildren(passenger2);
printChildren(passenger1);
printChildren(passenger3);

