const prompt = require('prompt-sync')()
// REMINDER: Run your code to make sure there are no errors before submitting!
// Create an object that represents your favorite show with the following keys: name (string), genre (string), rating (number) (2 pts)
let favShow = {
  name: 'The 100',
  genre:'Action',
rating: 10,
  watched:true
}

// Console log the show's name using the object (1 pt)

console.log(favShow.name)

// Add a new key called watched and put in a boolean with whether you have seen it (1 pt)

watched: true



// Change the rating of the show to increase it by one (2 pt)


favShow.rating +=1


// Loop through the object and print every key and element. (2 pt)
// It should look like: 
// name is Ted Lasso
// genre is comedy
// rating is 4.5
// watched is true

for(let key in favShow){
  console.log(`${key} is ${favShow[key]}`)
}


// EXTRA CREDIT
// Make two more show objects and put them all in an array
// Loop through the array and print the names of the shows



let favShow2  = {
  name: 'All American',
  genre:'Drama',
rating: 8,
  watched:true
}
console.log(favShow2.name)

favShow2.rating +=1

for(let key in favShow2){
  console.log(`${key} is ${favShow2[key]}`)
}


let favShow3  = {
  name: 'Money Heist',
  genre:'crime',
rating: 10,
  watched:true
}
console.log(favShow3.name)

favShow3.rating +=1

for(let key in favShow3){
  console.log(`${key} is ${favShow3[key]}`)
}