"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: true,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
    });
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
//# sourceMappingURL=main.js.map