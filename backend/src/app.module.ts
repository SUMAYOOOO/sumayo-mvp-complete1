import { Module } from '@nestjs/common';
import { DatabaseService } from './data/database.service';
import { AuthController } from './modules/auth/auth.controller';
import { CoursesController } from './modules/courses/courses.controller';

@Module({
  imports: [],
  controllers: [AuthController, CoursesController],
  providers: [DatabaseService],
})
export class AppModule {}
