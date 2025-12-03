import { Controller, Post, Body } from '@nestjs/common';
import { DatabaseService } from '../../data/database.service';

@Controller('auth')
export class AuthController {
  constructor(private database: DatabaseService) {}

  @Post('login')
  login(@Body() body: { email: string; password: string }) {
    const user = this.database.findUserByEmail(body.email);
    
    if (!user) {
      return { success: false, message: 'Usuario no encontrado' };
    }

    if (user.password !== body.password) {
      return { success: false, message: 'Contraseña incorrecta' };
    }

    // En producción, usar JWT
    return {
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      },
      token: 'demo-token-' + Date.now()
    };
  }

  @Post('register')
  register(@Body() body: { name: string; email: string; password: string }) {
    const existingUser = this.database.findUserByEmail(body.email);
    
    if (existingUser) {
      return { success: false, message: 'El usuario ya existe' };
    }

    const newUser = this.database.createUser({
      name: body.name,
      email: body.email,
      password: body.password,
      role: 'student'
    });

    return {
      success: true,
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role
      }
    };
  }
}
