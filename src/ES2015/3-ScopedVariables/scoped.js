function scopeIt() {
  let x = 'foo'
  {
    const x = 'bar'
    //x = 'noreassign'
  }
  //let x = 'nodupe'
  console.log(x)
}

scopeIt()