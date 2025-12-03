import { DatabaseService } from '../../data/database.service';
export declare class AuthController {
    private database;
    constructor(database: DatabaseService);
    login(body: {
        email: string;
        password: string;
    }): {
        success: boolean;
        message: string;
        user?: undefined;
        token?: undefined;
    } | {
        success: boolean;
        user: {
            id: string;
            name: string;
            email: string;
            role: "student" | "teacher" | "admin";
        };
        token: string;
        message?: undefined;
    };
    register(body: {
        name: string;
        email: string;
        password: string;
    }): {
        success: boolean;
        message: string;
        user?: undefined;
    } | {
        success: boolean;
        user: {
            id: string;
            name: string;
            email: string;
            role: "student" | "teacher" | "admin";
        };
        message?: undefined;
    };
}
