export declare class AuthController {
    register(body: any): Promise<{
        id: any;
        email: any;
    }>;
    login(body: any): Promise<{
        accessToken: any;
    }>;
}
