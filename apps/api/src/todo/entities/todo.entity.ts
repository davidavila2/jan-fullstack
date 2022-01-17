import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { TodoStatus } from '../todo.enum';

@Entity({
  name: 'Todo'
})
export class Todo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: TodoStatus
  })
  status: string
}
