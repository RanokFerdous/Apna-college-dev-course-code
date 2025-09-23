function mergeObjects3(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}
const person = { name: "Rahim", age: 20 };
const update = { age: 22, city: "Dhaka" };

console.log(mergeObjects3(person, update));