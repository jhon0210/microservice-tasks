import { Controller } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskDTO } from './dto/task.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { TaskMSG } from 'src/common/constans';

@Controller()
export class TasksController {
   
    constructor(private readonly tasksService: TasksService) {}
    
    @MessagePattern(TaskMSG.CREATE)
    create(@Payload() taskDTO: TaskDTO){
        return this.tasksService.create(taskDTO);
    }

    @MessagePattern(TaskMSG.FIND_ALL)
    findAll(){
        return this.tasksService.findAll();
    }

    @MessagePattern(TaskMSG.UPDATE)
    update(@Payload() payload) {
        return this.tasksService.update(payload.id, payload.taskDTO);
    }

    @MessagePattern(TaskMSG.DELETE)
    delete(@Payload() id: string) {
        return this.tasksService.delete(id);
    }
}
