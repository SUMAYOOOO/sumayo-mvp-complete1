import { DatabaseService } from '../../data/database.service';
export declare class CoursesController {
    private database;
    constructor(database: DatabaseService);
    getAllCourses(): import("../../data/database.service").Course[];
    getCourse(slug: string): {
        message: string;
    } | {
        topics: {
            id: string;
            title: string;
            description: string;
            price: number;
            isFree: boolean;
        }[];
        id: string;
        title: string;
        description: string;
        slug: string;
        message?: undefined;
    };
}
