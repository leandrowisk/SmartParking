export interface Lease{
    id_establishment: number;
    creditCard: any;
    monthly: boolean;
    monthly_price?: number;
    hour: boolean;
    hour_price?: number;
    start_lease: Date;
    end_lease: Date;
}