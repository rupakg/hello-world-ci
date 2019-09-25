class HelloWorld {
    sayHello(event) {
        return {
            message: 'Oh! hello there Anakin (?)',
            input: event,
        };
    }
}

module.exports = HelloWorld;