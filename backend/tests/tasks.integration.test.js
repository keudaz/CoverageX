const request = require('supertest');
const app = require('../src/app');

describe('Integration: tasks API', () => {
  it('GET /api/tasks returns array', async () => {
    const res = await request(app).get('/api/tasks');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body.data)).toBe(true);
  });

  it('POST /api/tasks -> create -> complete', async () => {
    const postRes = await request(app)
      .post('/api/tasks')
      .send({ title: 'integration test', description: 'desc' });
    expect(postRes.statusCode).toBe(201);
    const id = postRes.body.data.id;
    const doneRes = await request(app).post(`/api/tasks/${id}/complete`);
    expect(doneRes.statusCode).toBe(200);
  });
});
