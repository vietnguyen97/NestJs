import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskReponsitory } from './task.reponsitory';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  imports: [TypeOrmModule.forFeature([TaskReponsitory])],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
