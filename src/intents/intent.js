function intent(DOM) {
  const actions = {
    userClickedRow$: DOM.select('.row').events('click').map(e => {
      return e.path.find(el => el.tagName === 'TR').dataset.rowindex - 2
    }),
  }
  return actions
}

export default intent
