import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { RabbitMQ } from './common/constans';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options:{
      urls: process.env.AMQP_URL,
      queue: RabbitMQ.TaskQueue,
    }
  });
  await app.listen();
  console.log('Microservice Tasks is listening')
}
bootstrap();
