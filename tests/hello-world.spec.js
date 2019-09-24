const helloWorld = require('../handler').helloWorld;
const HelloWorld = require('../lib/hello-world')

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
        expect(resp.statusCode)
            .toBe(200);
    });
});

describe('sayHello', () => {
    var hWorld = new HelloWorld();
    it('should call sayHello and return message', () => {
        expect(hWorld.sayHello({}).message)
            .toBe('Oh! hello there captain Grievous');
    });
});

describe('should return the event data as a key named as input', () => {
    var hWorld = new HelloWorld();
    expect(hWorld.sayHello({})).toHaveProperty('input')
})