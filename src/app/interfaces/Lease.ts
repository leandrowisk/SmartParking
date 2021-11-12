export interface Lease{
    user_id: number;
    monthly: boolean;
    monthly_price?: number;
    hour: boolean;
    hour_price?: number;
    start_lease: Date;
    end_lease: Date;
}