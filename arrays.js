
var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]


function addElementToBeginningOfArray(array,element){
  var newarray = [element,...array]
  return newarray
}
function destructivelyAddElementToBeginningOfArray(array,element){
    array.unshift(element)
  return array
}
function addElementToEndOfArray(array,element){
  var newarray = [...array,element]
  return newarray
}
function destructivelyAddElementToEndOfArray(array,element){
  array.push(element)
  return array
}
function accessElementInArray(array,index){
 var newarray =  array[index]
  return newarray
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}