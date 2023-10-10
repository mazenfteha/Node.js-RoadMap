const request = require("supertest");
const app = require("./app")

/*
Use done to notify that it ends
Jest test will end when it hits the last line of the test function,
so you need to use a done() to make it right.
*/

describe('Test the root path', () => {
    test('It should response the GET Method first', done => {
        request(app)
        .get("/")
        .then(response => {
            expect(response.statusCode).toBe(200)
            done()
        })
    })
})

//Promise way(without done)

describe("Test the root path", () => {
    test("It should response the GET method(promise way)", () => {
        return request(app) //That return is crucial, otherwise your tests will get stuck.
        .get("/")
        .then(response => {
            expect(response.statusCode).toBe(200);
        });
    });
});

//Async, await way to test
//Use async to the function before you want to use await
describe("Test the root path", () => {
    test("It should response the GET method(Async/awit)", async () => {
        const response = await request(app).get("/");
        expect(response.statusCode).toBe(200);
    });
});


//About the Database connection (whrn you have db)
/*
describe('Test the addLike method', () => {
    beforeAll(() => {
        mongoDB.connect();
    });

    afterAll((done) => {
        mongoDB.disconnect(done);
    });
})
*/