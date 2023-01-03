import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,  // Validator에 도달하지 않음
    forbidNonWhitelisted: true, // 이상한 것을 보내면 리퀘스트 자체를 막을 수 있음.
    transform: true, // 유저가 보낸 것을 우리가 원하는 타입으로 변환
  }));
  await app.listen(3000);
}
bootstrap(); 
