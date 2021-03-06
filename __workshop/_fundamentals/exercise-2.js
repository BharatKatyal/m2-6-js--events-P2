// We often deal with "arrays of objects";
// below is an example of an array of objects, where each object represents a person:

const people = [
  { name: { first: "Alyssa", middle: "P.", last: "Hacker" }, age: 26 },
  { name: { first: "Ben", last: "Bitdiddle" }, age: 34 },
  { name: { first: "Eva", middle: "Lu", last: "Ator" }, age: 40 },
  { name: { first: "Lem", middle: "E.", last: "Tweakit" }, age: 45 },
  { name: { first: "Louis", last: "Reasoner" }, age: 21 },
  { name: { first: "Shahan", middle: "Haig", last: "Krakirian" }, age: 21 },
];

//-------------------------------------------------

// Exercise 2
// ------------
//
// 1. Write a function accepts an array and returns
// the average age of the `people` in that array (rounded to the nearest unit.)
// Use Math.round()

function avgAge(peopleArr) {
  let sumOfAges = 0
  // return something
  people.forEach(function(person, index){
    let realAge = people[index].age
    sumOfAges=sumOfAges + realAge;
    // console.log(realAge) 
  })

  let avg= sumOfAges/people.length
  return Math.round(avg)

}
// 2. Do a console.log to verify your function.
console.log(avgAge(people))

// 3. Run the test to validate: yarn test exercise-2

module.exports = { avgAge, people };
