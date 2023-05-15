import request from 'supertest';
import app from '../src/index';

describe('GET /hello', () => {
  it('should return "Hello, World!"', async () => {
    const response = await request(app.callback()).get('/hello');

    expect(response.status).toBe(200);
    expect(response.text).toBe("{\"message\":\"Hello, world!\"}");
  });
});