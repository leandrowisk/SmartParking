export interface Parking {
    id: number;
    name: string;
    price: number;
    user_avaliation: number;
    average_time: number;
    image_url: string;
    monthly: boolean;
    available_vacancies: number;
    zone: string;
    services_available: Array<Services>;
}

export interface Services {  
    service_name: string;
    service_price: number; 
}

export interface Filter {
    name?: string;
    price?: number;
    user_avaliation?: number;
    zone?: string;

}
