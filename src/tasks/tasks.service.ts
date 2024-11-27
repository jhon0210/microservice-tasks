import { Model } from 'mongoose';
import { ITask } from 'src/common/interfaces/taks.interface';
import { TASK } from 'src/common/models/models';
import { TaskDTO } from './dto/task.dto';
import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class TasksService {
    constructor(@InjectModel(TASK.name) private readonly model:
    Model<ITask>){}

    async create(taskDTO: TaskDTO): Promise<ITask> {  
        const newTask = new this.model(taskDTO);
        return await newTask.save();
    }

    async findAll(): Promise<ITask[]>{
        return await this.model.find();

    }

    async update(id: string, taskDTO: TaskDTO): Promise<ITask> {
        const task = { ...taskDTO };
        return await this.model.findByIdAndUpdate(id, task, { new: true });
    }

    async delete(id: string) {
        await this.model.findByIdAndDelete(id);
        return {
            status: HttpStatus.OK,
            msg: 'Deleted',
        };
    }
}
