export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    role: 'student' | 'teacher' | 'admin';
}
export interface Course {
    id: string;
    title: string;
    description: string;
    slug: string;
}
export interface Topic {
    id: string;
    courseId: string;
    title: string;
    description: string;
    price: number;
    isFree: boolean;
}
export declare class DatabaseService {
    private users;
    private courses;
    private topics;
    findUserByEmail(email: string): User | undefined;
    findUserById(id: string): User | undefined;
    createUser(userData: Omit<User, 'id'>): User;
    getAllCourses(): Course[];
    getCourseBySlug(slug: string): Course | undefined;
    getTopicsByCourse(courseId: string): Topic[];
    getTopicById(id: string): Topic | undefined;
}
