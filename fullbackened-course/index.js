const firstModule = require('./first-module');

console.log(firstModule.add(10,18));

console.log(firstModule.subtract(4,17));


try {
    console.log('trying to divide by zero?');
    let result = firstModule.divide(0, 100);
    console.log(result, "result");
    
} catch (error) {
    console.log('caught an error: ',error.message)
}

