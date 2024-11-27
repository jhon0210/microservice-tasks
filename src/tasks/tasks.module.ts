import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { ConfigModule } from '@nestjs/config';
import { TasksService } from './tasks.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskSchema } from './schema/task.schema';
import { TASK } from 'src/common/models/models';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: TASK.name,
        useFactory:()=> TaskSchema,
      },
    ]),
  ],
  controllers: [TasksController],
  providers: [TasksService],
  // exports: [UserService],
})

export class TasksModule {}
