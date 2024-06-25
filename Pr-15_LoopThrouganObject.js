let obj = { name: 'Alice', age: 25, city: 'Wonderland' };

console.log('Using for...in loop:');
for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key + ': ' + obj[key]);
  }
}

console.log('Using Object.keys with forEach:');
Object.keys(obj).forEach(key => {
  console.log(key + ': ' + obj[key]);
});

console.log('Using Object.values with forEach:');
Object.values(obj).forEach(value => {
  console.log(value);
});

console.log('Using Object.entries with forEach:');
Object.entries(obj).forEach(([key, value]) => {
  console.log(key + ': ' + value);
});

console.log('Using for...of with Object.keys:');
for (let key of Object.keys(obj)) {
  console.log(key + ': ' + obj[key]);
}

console.log('Using for...of with Object.entries:');
for (let [key, value] of Object.entries(obj)) {
  console.log(key + ': ' + value);
}
