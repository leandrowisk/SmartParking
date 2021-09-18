export interface User {
    
    name: string;
    email: string;
    address: string;
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
}