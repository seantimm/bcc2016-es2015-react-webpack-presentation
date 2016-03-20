var [thing1, , thing2] =
  ['thing1', null, 'thing2']

console.log(thing2)

function outputName({name: x}) {
  console.log(x)
}

var Sean = { isHere: true, name: 'Sean'}
outputName(Sean)
outputName('test')