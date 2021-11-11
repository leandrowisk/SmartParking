export interface Parking {
    id: number;
    name: string;
    hour_price: number;
    user_avaliation: number;
    average_time: number;
    image_url: string;
    monthly: boolean;
    monthly_price?: number;
    address: string;
    reference_point?: string;
    available_vacancies: number;
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
}
