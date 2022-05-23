const request = require('supertest');
const server = 'http://localhost:3000';
import regeneratorRuntime from 'regenerator-runtime';


describe('Route integration', () => {
  afterAll( done => {
    done();
  })
  it('responds with html type and 200 status', () => {
    request(server)
      .get('/api/portfolio/')
      .expect(200)
      .end()
  });
});
