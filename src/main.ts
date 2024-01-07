import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';

const logger = new Logger('main.ts');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('ProDescriber API')
    .setDescription(
      'ProDescriber API is an api for generating descriptions for products to bust sales.',
    )
    .setVersion('1.0')
    .addTag('describer')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const port = 3002;
  await app
    .listen(port)
    .then(() =>
      logger.log(`[DESCRIBER_API] is running on http://localhost:${port}`),
    )
    .catch((err) => logger.error(err));
}
bootstrap();