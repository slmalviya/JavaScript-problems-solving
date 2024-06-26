const users = [
    { name: 'Shravan', age: 25 },
    { name: 'Kartik', age: 30 },
    { name: 'Sachin', age: 20 }
  ];
  
  // Sort by age property
  users.sort((a, b) => a.age - b.age);
  
  console.log(users);
  
  // Sort by name property
  users.sort((a, b) => a.name > b.name ? 1 : -1);
  
  console.log(users);
  