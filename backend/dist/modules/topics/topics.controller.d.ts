export declare class TopicsController {
    get(id: string): Promise<any>;
    getPrice(id: string): Promise<{
        error: string;
        priceId?: undefined;
    } | {
        priceId: any;
        error?: undefined;
    }>;
}
