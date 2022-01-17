import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

import { Todo } from './entities/todo.entity';


@Injectable()
export class TodoService {
  constructor(@InjectRepository(Todo) private todo: Repository<Todo>) { }

  async findOne(id: string): Promise<Todo> {
    return await this.todo.findOne(id);
  }

  async findAll(): Promise<Todo[]> {
    return await this.todo.find();
  }

  async create(todo: Todo): Promise<Todo> {
    await this.todo.save((todo.id = uuidv4(), todo));
    return todo
  }

  async update(id: string, todo: Todo): Promise<Todo> {
    await this.todo.update(id, todo);

    return todo;
  }

  async remove(id: string): Promise<Todo> {
    const todo = this.todo.findOne(id);
    await this.todo.delete(id);
    return todo
  }
}
