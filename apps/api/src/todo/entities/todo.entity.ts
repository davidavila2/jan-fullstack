import { Entity, Column, PrimaryColumn } from 'typeorm';
import { TodoStatus } from '../todo.enum';

@Entity({
  name: 'Todo'
})
export class Todo {
  @PrimaryColumn()
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
