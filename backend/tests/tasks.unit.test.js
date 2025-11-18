const tasksController = require('../src/controllers/tasksController');
const Task = require('../src/models/taskModel');

jest.mock('../src/models/taskModel');

describe('tasksController', () => {
  afterEach(() => jest.clearAllMocks());

  test('createTask returns 400 if title missing', async () => {
    const req = { body: { title: '' } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    await tasksController.createTask(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalled();
  });

  test('createTask creates and returns task', async () => {
    const req = { body: { title: 'New Task', description: 'desc' } };
    const insertedId = 123;
    Task.create.mockResolvedValue(insertedId);
    Task.findById.mockResolvedValue({ id: insertedId, title: 'New Task', description: 'desc' });
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    await tasksController.createTask(req, res);
    expect(Task.create).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ data: expect.objectContaining({ id: insertedId }) }));
  });

  test('completeTask returns 404 if not found', async () => {
    const req = { params: { id: '999' } };
    Task.markCompleted.mockResolvedValue(false);
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    await tasksController.completeTask(req, res);
    expect(res.status).toHaveBeenCalledWith(404);
  });
});
