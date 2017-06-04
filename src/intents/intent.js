function intent(DOM) {
  let actions = {
    userScrolled$: DOM.select('#scroll-table-container')
      .events('scroll')
      .map(e => e.srcElement.scrollTop),
  }
  return actions
}

export default intent
