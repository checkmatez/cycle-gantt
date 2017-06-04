import xs from 'xstream'
import makeVisibleIndices$ from './make-visible-indices'

function model(actions) {
  let tableHeight$ = xs.of(500)
  let rowHeight$ = xs.of(30)
  let columns$ = xs.of(['ID', 'ID * 10', 'Random Number'])
  let rowCount$ = xs.of(10000)
  let scrollTop$ = actions.userScrolled$.startWith(0)
  let visibleIndices$ = makeVisibleIndices$(
    tableHeight$,
    rowHeight$,
    rowCount$,
    scrollTop$
  )
  let state$ = xs.Observable.combineLatest(
    tableHeight$,
    rowHeight$,
    columns$,
    rowCount$,
    visibleIndices$,
    (tableHeight, rowHeight, columns, rowCount, visibleIndices) => ({
      tableHeight,
      rowHeight,
      columns,
      rowCount,
      visibleIndices,
    })
  )
  return state$
}

export default model
