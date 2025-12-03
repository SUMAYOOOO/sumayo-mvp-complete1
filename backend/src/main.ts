import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Habilitar CORS
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // Health check endpoint
  app.getHttpAdapter().get('/health', (req, res) => {
    res.json({
      status: 'ok',
      timestamp: new Date().toISOString(),
      service: 'sumayo-backend',
      environment: process.env.NODE_ENV || 'development'
    });
  });

  const port = process.env.PORT || 3001;
  await app.listen(port);
  
  console.log(`🚀 Backend ejecutándose en: http://localhost:${port}`);
  console.log(`📊 Health check: http://localhost:${port}/health`);
  console.log(`🎓 Endpoints disponibles:`);
  console.log(`   POST /auth/login`);
  console.log(`   POST /auth/register`);
  console.log(`   GET  /courses`);
  console.log(`   GET  /courses/:slug`);
}

bootstrap();
