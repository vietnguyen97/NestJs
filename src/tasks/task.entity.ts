import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TasksModule } from './tasks.module';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column('text', { nullable: true })
  status: TasksModule;
}
