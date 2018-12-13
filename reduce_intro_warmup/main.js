
//add all elements together
function sum(arr){
  return arr.reduce((acc, cur) => {
    return acc + cur
  }, 0)
}

// multiply all elements together
function multiply(arr){
  return arr.reduce((acc, cur) => {
    return acc * cur
  }, 1)
}

//double each element using reduce
function double(arr){
  return arr.reduce((prev, cur) => {
    prev.push(cur * 2)
    return prev
  }, [])
}

// //count the letters
function countLetters(str){
  let string = []
  for (let i=0; i<str.length; i++){
    string[i] = str[i]
  }
  return string.reduce((prev, cur) => {
    prev[cur] = (prev[cur] || 0) + 1
    return prev
  }, {})

}

module.exports = {
  sum: sum,
  multiply: multiply,
  double: double,
  countLetters: countLetters
}
