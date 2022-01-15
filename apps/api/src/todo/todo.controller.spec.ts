import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { Todo } from './entities/todo.entity';
import { mockTodo, mockTodos, updatedMockTodo } from './test.utils';

type MockRepository<T = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;
const createMockRepository = <T = any>(): MockRepository<T> => ({
  find: jest.fn(),
  findOne: jest.fn(),
  save: jest.fn(),
  update: jest.fn(),
  delete: jest.fn()
});

describe('TodoController', () => {
  let controller: TodoController;
  let service: TodoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodoController],
      providers: [
        TodoService,
        {
          provide: getRepositoryToken(Todo),
          useFactory: createMockRepository
        }
      ],
    }).compile();

    controller = module.get<TodoController>(TodoController);
    service = module.get<TodoService>(TodoService);
  });

  it('should be defined', (): void => {
    expect(controller).toBeDefined();
  });

  describe('#findOne', (): void => {
    it('should find one Todo', async () => {
      jest.spyOn(service, 'findOne').mockImplementation(async () => {
        return mockTodo;
      });

      expect(await controller.findOne(mockTodo.id)).toBe<Todo>(mockTodo)
    });
  });

  describe('#findAll', (): void => {
    it('should get all Todos', async () => {
      jest.spyOn(service, 'findAll').mockImplementation(async () => {
        return mockTodos;
      });

      expect(await controller.findAll()).toBe<Todo[]>(mockTodos);
    });
  });

  describe('#create', (): void => {
    it('should create a Todo', async () => {
      jest.spyOn(service, 'create').mockImplementation(async () => {
        return mockTodo
      });

      expect(await controller.create(mockTodo)).toBe<Todo>(mockTodo)
    });
  });

  describe('#update', (): void => {
    it('should update a Todo', async () => {
      jest.spyOn(service, 'update').mockImplementation(async () => {
        return updatedMockTodo
      });

      expect(await controller.update(mockTodo.id, mockTodo)).toBe<Todo>(updatedMockTodo)
    });
  });

  describe('#delete', (): void => {
    it('should delete a Todo', async () => {
      jest.spyOn(service, 'remove').mockImplementation(async () => {
        return null
      });

      expect(await controller.remove(mockTodo.id)).toBe(null);
    });
  });
});
