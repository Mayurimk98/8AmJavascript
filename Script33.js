//Map => datatype

//number
//string
//array
//boolen
//object

//Set  => datatype 
//unique value store

let mySet = new Set()
console.log(mySet)

//1. add()
mySet.add(123)
mySet.add("mayuri")
mySet.add(34)
console.log(mySet)

//2. size ==> property
console.log(mySet.size)

let s1 = new Set([12, 22, 33, 44, 55])
console.log(s1)
//2. has()
console.log(s1.has(33))

console.log(s1.has(11))

//3. delete()
console.log(s1.delete(44))
console.log(s1)

//4. clear()
s1.clear()
console.log(s1)


//duplicate

let s2 = new Set([66, 88, 99, 44, 66, 88])
//[66,88,99,44]
console.log(s2.size)



