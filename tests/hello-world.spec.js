const helloWorld = require('../handler').helloWorld;


describe('helloWorld', () => {
    var event = {};
    var context = {};
    var resp = {};
    
    it('should call helloWorld function with success', (done) => {
        var callback = (ctx, data) => {
            console.log(data);
            resp = data;
            done();
        }
        helloWorld(event, context, callback);
        expect(resp.statusCode).toBe(200);
    });
});

const HelloWorld = require('../lib/hello-world');

describe('sayHello', () => {
    var event = {};
    var hWorld = new HelloWorld();

    it('should call sayHello and return message', () => {
        expect(hWorld.sayHello(event).message).toBe('Go Serverless v1.0! Your function executed successfully!');
    });
});