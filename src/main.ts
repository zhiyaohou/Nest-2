import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app:NestExpressApplication = await NestFactory.create(AppModule);
  app.useStaticAssets('./frontend/build'); 
  await app.listen(3000);
}
bootstrap();
