import xs from 'xstream'
import { table, th, td, tr } from '@cycle/dom'

const tableAttrs = {
  style: {
    'font-family': 'arial, sans-serif',
    'border-collapse': 'collapse',
    width: '100%',
  },
}
const tdAttrs = {
  style: {
    border: '1px solid #dddddd',
    'text-align': 'left',
    padding: '8px',
  },
}
const thAttrs = {
  style: {
    border: '1px solid #dddddd',
    'text-align': 'left',
    padding: '8px',
  },
}

function view(state$) {
  return xs.of(
    table(tableAttrs, [
      tr([
        th({ props: { rowSpan: 2 } }, 'ID работы'),
        th({ props: { rowSpan: 2 } }, 'Наименование работы'),
        th({ props: { rowSpan: 2 } }, 'Дата старта'),
        th({ props: { rowSpan: 2 } }, 'Дата финиша'),
        th({ props: { rowSpan: 2 } }, 'Длит. (сут.)'),
        th({ props: { colSpan: 5 } }, 'Июнь 2017'),
        th({ props: { colSpan: 5 } }, 'Июль 2017'),
      ]),
      tr([
        th('1'),
        th('2'),
        th('3'),
        th('4'),
        th('5'),
        th('6'),
        th('7'),
        th('8'),
        th('9'),
        th('10'),
      ]),
    ])
  )
}

export default view
