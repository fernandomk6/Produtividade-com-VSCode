function helloWorld() {
  return 'Hello World!';
}

function greeting() {
  const date = new Date();
  const hours = date.getHours();

  return hours < 12 ? 'Bom dia' : hours > 18 ? 'Boa noite' : 'Boa tarde';
}

console.log(helloWorld());
console.log(greeting());

console.log([1,'2',3]);
console.log({name: 'fernando'});