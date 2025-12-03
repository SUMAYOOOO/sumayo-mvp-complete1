import { Injectable } from '@nestjs/common';

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

@Injectable()
export class DatabaseService {
  private users: User[] = [
    {
      id: '1',
      name: 'Usuario Demo',
      email: 'demo@sumayo.com',
      password: 'demo123',
      role: 'student'
    }
  ];

  private courses: Course[] = [
    {
      id: '1',
      title: 'Introducción a la Programación',
      description: 'Aprende los fundamentos de la programación',
      slug: 'introduccion-programacion'
    }
  ];

  private topics: Topic[] = [
    {
      id: '1',
      courseId: '1',
      title: 'Variables y Tipos de Datos',
      description: 'Conceptos básicos de variables',
      price: 0,
      isFree: true
    }
  ];

  // Métodos para usuarios
  findUserByEmail(email: string): User | undefined {
    return this.users.find(user => user.email === email);
  }

  findUserById(id: string): User | undefined {
    return this.users.find(user => user.id === id);
  }

  createUser(userData: Omit<User, 'id'>): User {
    const newUser: User = {
      id: Date.now().toString(),
      ...userData
    };
    this.users.push(newUser);
    return newUser;
  }

  // Métodos para cursos
  getAllCourses(): Course[] {
    return this.courses;
  }

  getCourseBySlug(slug: string): Course | undefined {
    return this.courses.find(course => course.slug === slug);
  }

  // Métodos para temas
  getTopicsByCourse(courseId: string): Topic[] {
    return this.topics.filter(topic => topic.courseId === courseId);
  }

  getTopicById(id: string): Topic | undefined {
    return this.topics.find(topic => topic.id === id);
  }
}
