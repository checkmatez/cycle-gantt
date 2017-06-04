import xs from 'xstream'

// get the visible indices stream as a function of the streams that make up the data for this
function makeVisibleIndices$(tableHeight$, rowHeight$, rowCount$, scrollTop$) {
  // calculate what the first visible row will be based off the height of the rows and how far we scrolled down
  // limit the stream output to distinct values per click
  let firstVisibleRow$ = Rx.Observable
    .combineLatest(scrollTop$, rowHeight$, (scrollTop, rowHeight) =>
      Math.floor(scrollTop / rowHeight)
    )
    .distinctUntilChanged()

  // calculate how many rows will even be visible, i.e. how many rows fit into the height of the table
  let visibleRows$ = Rx.Observable.combineLatest(
    tableHeight$,
    rowHeight$,
    (tableHeight, rowHeight) => Math.ceil(tableHeight / rowHeight)
  )

  // calculate the visible indices based on the above two streams and how many rows we have in our application
  let visibleIndices$ = Rx.Observable.combineLatest(
    rowCount$,
    visibleRows$,
    firstVisibleRow$,
    (rowCount, visibleRows, firstVisibleRow) => {
      let visibleIndices = []
      let lastRow = firstVisibleRow + visibleRows + 1

      if (lastRow > rowCount) {
        firstVisibleRow -= lastRow - rowCount
      }

      for (let i = 0; i <= visibleRows; i++) {
        visibleIndices.push(i + firstVisibleRow)
      }
      return visibleIndices
    }
  )

  return visibleIndices$
}

export default makeVisibleIndices$
