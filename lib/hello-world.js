class HelloWorld {
    sayHello(event) {
        return {
            message: 'This is my own message to test',
            input: event,
        };
    }
}

module.exports = HelloWorld;