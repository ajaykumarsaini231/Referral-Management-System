const request = require('supertest');
const app = require('../../backend/app');

describe('Backend Tests', () => {
  it('should return a successful response from /graphql', async () => {
    const response = await request(app).post('/graphql').send({
      query: '{ customers { id name email } }'
    });
    expect(response.status).toBe(200);
    expect(response.body.data).toBeDefined();
  });
});
