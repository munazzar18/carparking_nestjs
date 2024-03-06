import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as basicAuth from 'express-basic-auth'
import { ValidationPipe } from '@nestjs/common';
import { User } from './user/user.schema';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe())
  app.setGlobalPrefix('api')
  app.use(['/swagger'],
    basicAuth({
      challenge: true,
      users: {
        ['root']: 'carparking'
      }
    })
  )


  const config = new DocumentBuilder()
    .setTitle('Cars Parking web app')
    .setDescription('Cars parking API')
    .addBearerAuth({
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      name: 'JWT',
      description: 'Enter Jwt Token',
      in: 'header'
    })
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('swagger', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
      displayRequestDuration: true
    },
  })
  await app.listen(4000);
}
bootstrap();
