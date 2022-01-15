import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

import { Todo } from './entities/todo.entity';


@Injectable()
export class TodoService {
  constructor(@InjectRepository(Todo) private todo: Repository<Todo>) { }

  findOne(id: string): Promise<Todo> {
    return this.todo.findOne(id);
  }

  findAll(): Promise<Todo[]> {
    return this.todo.find();
  }

  create(todo: Todo): Promise<Todo> {
    return this.todo.save((todo.id = uuidv4(), todo));
  }

  async update(id: string, todo: Todo): Promise<Todo> {
    await this.todo.update(id, todo);

    return todo;
  }

  async remove(id: string): Promise<void> {
    await this.todo.delete(id);
  }
}
