console.log("Exercise 1.1")
console.log("---- ---- ----")

let array = [4,78,8,3,6,0,12,34]
const getMaxElement = (arr) => {
    let highest = arr[0] 
    for(let i=0; i<arr.length; i++){
        if(arr[i] > highest){
            highest = arr[i]
        }

    }
    return highest
}
console.log(getMaxElement(array))

console.log("==== ==== ====")
console.log("Exercise 1.2")
console.log("---- ---- ----")

const calculateAverage = (arr) => {
    let sum = 0
    let avg = 0
    for(let i = 0; i<arr.length; i++){
        sum = arr[i] + sum
      avg = sum/arr.length
    }
    return avg
}
console.log(calculateAverage([1, 2, 3, 4, 5]))

console.log("==== ==== ====")
console.log("Exercise 1.3")
console.log("---- ---- ----")

var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const convertEvenToOdd = (arr) => {
    let finalArray = []
     for(let i=0; i<arr.length; i++){
        if(arr[i] % 2 === 0){
            finalArray.push(arr[i] + 1)
        }
        else{
            finalArray.push(arr[i])
        }
     }
     return finalArray
}
console.log(convertEvenToOdd(numArr));

console.log("==== ==== ====")
console.log("Exercise 1.4")
console.log("---- ---- ----")

var words = ["eat", "sleep", "code", "repeat", "neog", "community"]
const filterWords = (arr) => {
    let newArray = []
    for(let i=0; i<arr.length; i++){
        if(arr[i].length > 5){
            newArray.push(arr[i])
        }
    }
    return newArray
}
console.log(filterWords(words))

console.log("==== ==== ====")
console.log("Exercise 1.5")
console.log("---- ---- ----")

const capitalizeWords = (arr) => {
    let capitalizedWords = []
for(let i=0; i<arr.length; i++){
    capitalizedWords.push(arr[i].toUpperCase())
}
return capitalizedWords
}
console.log(capitalizeWords(["eat", "sleep", "code", "repeat"]))

console.log("==== ==== ====")
console.log("Exercise 1.6")
console.log("---- ---- ----")

const getValues = (arr, property) => {
    let resultingArray = []
    for(let i=0; i<arr.length; i++){
        if(arr[i][property]){
            resultingArray.push(arr[i][property])
        }
    }
return resultingArray
}
console.log(
    getValues(
      [
        { name: "John", age: 21 },
        { name: "Mary", age: 22 },
        { name: "Peter", age: 23 },
      ],
      "name"
    )
  );

  console.log("==== ==== ====")
console.log("Exercise 1.7")
console.log("---- ---- ----")

const userData = { firstName : "John", lastName: "Dee" }
const podAndTeamAllocation = (user) => {
    let newObj = {}
    for(let key in user){
        newObj[key] = user[key]
    }
    newObj.teamId = 667543
    return newObj
}
console.log(podAndTeamAllocation(userData))

console.log("==== ==== ====")
console.log("Exercise 1.8")
console.log("---- ---- ----")

const checkForTeam = (student) => {
    for(let key in student){
        if(student.team === undefined){
            student.team = "A"
        }
    }
    return student
}
console.log(checkForTeam({firstName: 'Penn', lastName: 'Ma'}))
console.log(checkForTeam({firstName: 'John', lastName: 'Dee', team: 'B'}))
console.log(checkForTeam({firstName: 'Priya', lastName: 'Raj'}))

console.log("==== ==== ====")
console.log("Exercise 1.9")
console.log("---- ---- ----")

const book = { 
    title: 'JavaScript: The Definitive Guide',  
    authors: [{name: 'David Flanagan', age: 49 }, { name: 'Yukihiro Matsumoto', age: 57 }],  
    publisher: {name: "O'Reilly Media", location: 'CA'}
}
const {title, authors: [{name: author1}, {name: author2}], publisher: {name: publisherName}} = book

console.log(title)
console.log(author1)
console.log(author2)
console.log(publisherName)

console.log("==== ==== ====")
console.log("Exercise 1.10")
console.log("---- ---- ----")

var arrayy = [
    {
        name: "Jay",
        age: 60
    },
    {
        name: "Gloria",
        age: 36
    },
    {
        name: "Manny",
        age: 16
    },
    {
        name: "Joe",
        age: 9
    }
];
const sumOfAges = (arr) => {
    let sumOfAges = 0
    for(let i=0; i<arr.length; i++){
      sumOfAges = arr[i].age + sumOfAges
    }
    return sumOfAges
}
console.log(sumOfAges(arrayy))

const findSum = (...numbers) => numbers.reduce((curr, acc) => acc + curr, 0)
console.log(findSum("Sum of Numbers: ", 2, 4, 6, 8, 10)); 
