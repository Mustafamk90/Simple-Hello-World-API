import request from "supertest";
import { app, server } from "../src/index";

//Test cases for the first endpoint
describe('GET /hello', () => {

  //Test case 1 without the name
  it('should return "Hello, World!"', async () => {
    const response = await request(app).get('/hello');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({greeting: "Hello, World!"});
  });

  // Test case 2 when the name is provided
  it('should return "Hello, Mustafa"', async () => {
    const response = await request(app).get('/hello?name=Mustafa');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({greeting: "Hello, Mustafa"});
  });


});

//Test cases for the second endpoint
describe('GET /info', () => {
  it('should return "Hello, Mustafa"', async () => {
    const response = await request(app).get('/info');
    expect(response.status).toBe(200);

    expect(response.body).toEqual(expect.objectContaining({
      time:expect.any(String),
      client_address: expect.any(String),
      host_name: expect.any(String),
      headers: expect.objectContaining({})
    }));

  });
});

afterAll(() => {
  server.close();
})


