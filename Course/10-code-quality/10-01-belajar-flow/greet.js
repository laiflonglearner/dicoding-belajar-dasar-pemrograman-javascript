// @flow

const myName: string = "Flow";

function greet(name: string) {
  console.log(`Hello, ${name}. My name is ${myName}`);
}

// greet(123); // This will cause a Flow error because 123 is not a string
