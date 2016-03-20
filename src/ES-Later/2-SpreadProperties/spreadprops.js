const otherInfo = {
  name: 'Sean',
  isSpeaking: true
}

let isHere = true
const Sean = { isHere, ...otherInfo}

console.log(`
  name: ${Sean.name}, 
  isHere: ${Sean.isHere}`)