function greeting(name) {
  console.log('Hello ' + name);
}

function processUserInput(callback) {
  var name = console.log('Please enter your name.');
  callback("Vikas");
}

processUserInput(greeting);