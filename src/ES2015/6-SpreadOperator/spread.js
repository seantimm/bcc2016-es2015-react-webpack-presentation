// The spread operator expands
// elements of an array
const values = [1, 2, 3]
const moreValues = [...values, 4]

function addEmUp(a, b, c, d) {
  console.log(a+b+c+d)
}

addEmUp(...moreValues)