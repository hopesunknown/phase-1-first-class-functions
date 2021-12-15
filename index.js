function receivesAFunction(thing) {
    return thing();
}
receivesAFunction(function() {return "Hello"});

function returnsANamedFunction() {
    return function test() {

    }
}

function returnsAnAnonymousFunction() {
    return function() {
        
    }
}