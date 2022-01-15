import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TodoService } from './todo.service';
import { Todo } from './entities/todo.entity';
import { mockTodo, updatedMockTodo, mockTodos } from './test.utils';

type MockRepository<T = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;
const createMockRepository = <T = any>(): MockRepository<T> => ({
  find: jest.fn(),
  findOne: jest.fn(),
  save: jest.fn(),
  update: jest.fn(),
  delete: jest.fn()
});

describe('TodoService', () => {
  let service: TodoService;
  let todoRepository: MockRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TodoService,
        {
          provide: getRepositoryToken(Todo),
          useFactory: createMockRepository
        }
      ],
    }).compile();

    service = module.get<TodoService>(TodoService);
    todoRepository = module.get<MockRepository>(getRepositoryToken(Todo));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('#findOne', () => {
    it('should find one todo', () => {
      todoRepository.findOne.mockReturnValue(mockTodo);

      const todo: Promise<Todo> = service.findOne(mockTodo.id);

      expect(todo).toStrictEqual<Todo>(mockTodo);
    });
  });

  describe('#findAll', () => {
    it('should get all todos', () => {
      todoRepository.find.mockReturnValue(mockTodos);

      const todos: Promise<Todo[]> = service.findAll();

      expect(todos).toStrictEqual<Todo[]>(mockTodos)
    });
  });

  describe('#create', () => {
    it('should create a todo', () => {
      todoRepository.save.mockReturnValue(mockTodo);

      const todo: Promise<Todo> = service.create(mockTodo);

      expect(todo).toStrictEqual<Todo>(mockTodo);
    });
  });

  describe('#update', () => {
    it('should update a todo', async () => {
      todoRepository.update.mockReturnValue(updatedMockTodo);

      const todo = await service.update(updatedMockTodo.id, updatedMockTodo);

      expect(todo).toBe<Todo>(updatedMockTodo);
    });
  });

  describe('#delete', () => {
    it('should delete a todo', async () => {
      todoRepository.delete.mockReturnValue(mockTodo);

      const todo = await service.remove(mockTodo.id);

      expect(todo).toBe(undefined);
    })
  })
});
