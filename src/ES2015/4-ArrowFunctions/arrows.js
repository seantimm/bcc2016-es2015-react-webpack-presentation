const inventory = {
  prefix: 'Item: ',
  items: ['Thing 1', 'Thing 2'],

  listItems() {
    this.items.forEach(item => {
      console.log(this.prefix + item)
    })
  },

  listItemsNoArrow() {
    this.items.forEach(function(item) {
      console.log(this.prefix + item)
    })
  }
}

inventory.listItems()
inventory.listItemsNoArrow()