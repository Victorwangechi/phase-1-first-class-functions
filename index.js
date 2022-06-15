// callbacak function
function receivesAFunction(callback) {
    callback();
  callback();
}
//create another function
function returnsANamedFunction() {
    //named function
    const namedFn = () => console.log("this is a named function");
    return namedFn;


  return function namedFn() {
    console.log("this is a named function");
  };
}

//function that return 'this is an anonymous function'
function returnsAnAnonymousFunction() {

   

  return () => console.log("this is an anonymous function");
}