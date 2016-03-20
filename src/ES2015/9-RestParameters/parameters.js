function showIt(prefix, ...items) {
  items.forEach(item => {
    console.log(`${prefix}: ${item}`)
  })
}

showIt('Item', 'Thing 1', 'Thing 2')
showIt('More', ...['This', 'That'])