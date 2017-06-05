function intent(DOM) {
  // let actions = {
  //   userScrolled$: DOM.select('#scroll-table-container')
  //     .events('scroll')
  //     .map(e => e.srcElement.scrollTop),
  // }

  const actions = {
    userClickedRow$: DOM.select('.row').events('click').map(e => e.target),
  }
  return actions
}

export default intent
