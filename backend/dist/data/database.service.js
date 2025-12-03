"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseService = void 0;
const common_1 = require("@nestjs/common");
let DatabaseService = class DatabaseService {
    constructor() {
        this.users = [
            {
                id: '1',
                name: 'Usuario Demo',
                email: 'demo@sumayo.com',
                password: 'demo123',
                role: 'student'
            }
        ];
        this.courses = [
            {
                id: '1',
                title: 'Introducción a la Programación',
                description: 'Aprende los fundamentos de la programación',
                slug: 'introduccion-programacion'
            }
        ];
        this.topics = [
            {
                id: '1',
                courseId: '1',
                title: 'Variables y Tipos de Datos',
                description: 'Conceptos básicos de variables',
                price: 0,
                isFree: true
            }
        ];
    }
    findUserByEmail(email) {
        return this.users.find(user => user.email === email);
    }
    findUserById(id) {
        return this.users.find(user => user.id === id);
    }
    createUser(userData) {
        const newUser = {
            id: Date.now().toString(),
            ...userData
        };
        this.users.push(newUser);
        return newUser;
    }
    getAllCourses() {
        return this.courses;
    }
    getCourseBySlug(slug) {
        return this.courses.find(course => course.slug === slug);
    }
    getTopicsByCourse(courseId) {
        return this.topics.filter(topic => topic.courseId === courseId);
    }
    getTopicById(id) {
        return this.topics.find(topic => topic.id === id);
    }
};
exports.DatabaseService = DatabaseService;
exports.DatabaseService = DatabaseService = __decorate([
    (0, common_1.Injectable)()
], DatabaseService);
//# sourceMappingURL=database.service.js.map