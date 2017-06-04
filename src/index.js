import { run } from '@cycle/run'
import { makeDOMDriver } from '@cycle/dom'
import xs from 'xstream'

// import intent from './intents/intent'
// import model from './models/main-model'
import view from './views/main-view'

function main({ DOM }) {
  // const actions = intent(DOM)
  // const state$ = model(actions)
  const vtree$ = view()
  return { DOM: vtree$ }
}

const drivers = {
  DOM: makeDOMDriver('#app'),
}

run(main, drivers)
