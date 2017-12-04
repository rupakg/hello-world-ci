class HelloWorld {
    sayHello(event) {
        return {
            message: 'Go Serverless v1.0! Your function executed successfully!',
            input: event,
        };
    }
}
    
module.exports = HelloWorld;