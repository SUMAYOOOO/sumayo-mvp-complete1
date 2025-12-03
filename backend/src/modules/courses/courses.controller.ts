import { Controller, Get, Param } from '@nestjs/common';
import { DatabaseService } from '../../data/database.service';

@Controller('courses')
export class CoursesController {
  constructor(private database: DatabaseService) {}

  @Get()
  getAllCourses() {
    return this.database.getAllCourses();
  }

  @Get(':slug')
  getCourse(@Param('slug') slug: string) {
    const course = this.database.getCourseBySlug(slug);
    
    if (!course) {
      return { message: 'Curso no encontrado' };
    }

    const topics = this.database.getTopicsByCourse(course.id);
    
    return {
      ...course,
      topics: topics.map(topic => ({
        id: topic.id,
        title: topic.title,
        description: topic.description,
        price: topic.price,
        isFree: topic.isFree
      }))
    };
  }
}
