export interface User {
    id: number;
    name: string;
    email: string;
    address: string;
    phone: string;
    cpf: string;
    birthday: string;
    sex: string;
    car: Car;
    password: string;
}

export interface Car {
    color: string;
    brand: string;
    model: string;
    category: string;
    chassi: string;
    renavam: number;
    plaque: string;
}

export interface Historic {
    parking_name: string;
    date: Date;
    price: number;
}

export const ELEMENT_DATA: Historic[] = [
    {parking_name: 'Estacionamento Sol Nascente', date: new Date('2013-03-01'), price: 50},
    {parking_name: 'Estacionamento Sol Nascente', date: new Date('2013-03-01'), price: 50},
];
