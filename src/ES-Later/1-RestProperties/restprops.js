const Sean = {
  name: 'Sean',
  isSpeaking: true
}
const { name, ...otherInfo} = Sean

console.log(`
  name: ${name}, 
  otherInfo.name: ${otherInfo.name},
  otherInfo.isSpeaking: ${otherInfo.isSpeaking}`)